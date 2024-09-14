// Define types for API response
interface Coordinate {
  type: string;
  coordinates: [number, number][];
}

interface Feature {
  type: string;
  geometry: Coordinate;
}

interface ApiResponse {
  features: Feature[];
}

// components/Map.js
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Define custom icons to avoid default icon issues
const customIcon = new L.Icon({
  iconRetinaUrl: '/icons8-location.gif',
  iconSize: [50, 50],
});

// Define custom icons to avoid default icon issues
const customCarIcon = new L.Icon({
  iconRetinaUrl: '/icons8-car.gif',
  iconSize: [50, 50],
});

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

  return (
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
  );
};

export default Map;
