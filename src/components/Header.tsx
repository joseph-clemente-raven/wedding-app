"use client"
import React from 'react'
import { Tangerine } from 'next/font/google';
import Image from 'next/image';
import { setup } from '@/constants/controller';

const tangerine = Tangerine({ weight: '700', preload: false });
const tangerineBold = Tangerine({ weight: '700', preload: false });

export default function Header() {
  return (
    <div className='flex relative h-[70vh] sm:h-screen flex-col'>
        <Image
            src={`${setup}GSP-6621.jpg`}
            alt="Banner Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-0"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div> */}
        <div className="absolute inset-0 flex items-end justify-start">
            <div className="px-2 py-10 sm:px-24 md:px-8 w-full sm:w-1/2 md:w-[80vw]">
                <p className={`text-2xl sm:text-4xl text-outline ${tangerine.className}`}>
                    Dearest Gentle Reader,
                </p>
                <p className={`text-4xl sm:text-6xl text-outline ${tangerineBold.className}`}>
                    Join Us as We Celebrate Love, Laughter, and a Lifetime Together
                </p>
            </div>
        </div>
    </div>
  )
}
