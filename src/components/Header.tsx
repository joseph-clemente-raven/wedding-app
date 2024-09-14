"use client"
import React from 'react'
import { Calligraffitti } from 'next/font/google';
import Image from 'next/image';

const calligraphy = Calligraffitti({ weight: '400', preload: false });

export default function Header() {
  return (
    <div className='flex relative h-screen flex-col'>
        <Image
            src="/banner.jpg"
            alt="Banner Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-0"
            />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div> */}
        <div className="absolute inset-0 flex items-end sm:items-center justify-end text-right">
            <div className="px-9 py-10 sm:px-32 w-full sm:w-1/2">
                <p className={`text-lg font-semibold text-green-950`}>Dearest Gentle Reader,</p>
                <p className={`text-2xl font-bold sm:text-4xl text-green-950 text-modern-text ${calligraphy.className}`}>Join Us as We Celebrate Love, Laughter, and a Lifetime Together</p>
            </div>
        </div>
    </div>
  )
}
