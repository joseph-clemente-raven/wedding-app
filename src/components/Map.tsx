// components/Map.js
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Define custom icons to avoid default icon issues
const customIcon = new L.Icon({
  iconRetinaUrl: 'icons8-location.gif',
  iconSize: [50, 50],
});

const customCarIcon = new L.Icon({
  iconRetinaUrl: 'icons8-car.gif',
  iconSize: [50, 50],
});

interface ApiResponse {
  features: {
    geometry: {
      coordinates: [number, number][];
    };
  }[];
}


const destination: [number, number] = [8.4811435794063, 124.62944979563575]; // Church location

const Map = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [route, setRoute] = useState<[number, number][]>([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setUserLocation([position.coords.latitude, position.coords.longitude] as [number, number]);
        },
        error => {
          console.error('Error getting user location:', error);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      // Fetch route from user's location to the church using OpenRouteService or another routing service
      fetch(`https://api.openrouteservice.org/v2/directions/foot-walking?api_key=5b3ce3597851110001cf624838f8fcc6d8164fbea6ed47296b12e22b&start=${userLocation[1]},${userLocation[0]}&end=${destination[1]},${destination[0]}`)
        .then(response => response.json())
        .then((data: ApiResponse) => {
          const coordinates = data.features[0].geometry.coordinates.map(
            (coord: [number, number]) => [coord[1], coord[0]] as [number, number]
          );
          setRoute(coordinates);
        })
        .catch(error => {
          console.error('Error fetching route:', error);
        });
    }
  }, [userLocation]);

  // Function to redirect to Google Maps
  const redirectToGoogleMaps = () => {
    const googleMapsBaseUrl = 'https://www.google.com/maps/dir/';
    if (userLocation) {
      const start = `${userLocation[0]},${userLocation[1]}`;
      const end = `${destination[0]},${destination[1]}`;
      window.open(`${googleMapsBaseUrl}${start}/${end}/`, '_blank');
    } else {
      window.open(`https://www.google.com/maps/search/?api=1&query=${destination[0]},${destination[1]}`, '_blank');
    }
  };

  return (
    <div className='mb-10'>
      <MapContainer center={destination} zoom={13} style={{ height: 300, width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {userLocation && (
          <>
            <Marker position={userLocation} icon={customCarIcon}>
              <Popup>Your Location</Popup>
            </Marker>
            <Polyline positions={route} color="blue" />
          </>
        )}
        <Marker position={destination} icon={customIcon}>
          <Popup>
            <span className='font-bold'>Kimmy & Joseph - Wedding Celebration</span> <br />
            <span className='font-light'>Join Us at Our Lady of Mt. Carmel Parish Church, Villarin St., Cagayan De Oro City, Misamis Oriental.</span>
          </Popup>
        </Marker>
      </MapContainer>
      
      {userLocation && (
        <div style={{ marginTop: '16px', textAlign: 'center' }}>
          <button
            style={{
              padding: '6px 20px',
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={redirectToGoogleMaps}
          >
            Get Driving Directions
          </button>
        </div>
      )}
    </div>
  );
};

export default Map;
