
'use client';

import React from 'react';
import Image from 'next/image';
import { Dancing_Script } from 'next/font/google';

const dancing_script = Dancing_Script({ weight: '700', preload: false });

export default function EInvitation() {
  const images = [
    './invitation/1.png',
    './invitation/2.png',
    './invitation/3.png',
    // './invitation/4.png',
  ]; // Path to images in public folder

  // Function to download each image as a separate file
  const downloadImages = () => {
    const eimages = [
      './invitation/1.png',
      './invitation/2.png',
      './invitation/3.png',
      './invitation/4.png',
    ]; // Path to images in public folder
  
    eimages.forEach((image, index) => {
      // Create an anchor tag programmatically
      const link = document.createElement('a');
      link.href = image;
      link.download = `invitation_${index + 1}.jpg`; // Specify the download file name

      // Trigger the download
      link.click();
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-6 gap-4 justify-center my-12 sm:my-0">
      <h1 className={`font-bold text-4xl text-center ${dancing_script.className}`}>
        E-Invitation
      </h1>
      <p onClick={downloadImages} className="font-bold cursor-pointer hover:text-green-500">(Download Invitation)</p>
      <div className="w-full flex flex-col gap-10 px-0 sm:px-60">
        {images.map((image, index) => (
          <div key={index} className="snap-center flex justify-center items-center">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={1000} // Adjust dimensions to match your layout
              height={1000}
              className="max-h-full max-w-full object-contain shadow-lg"
              priority={index === 0} // Optimize the first image
            />
          </div>
        ))}
      </div>
    </div>
  );
}
