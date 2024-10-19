'use client'

import { setup } from '@/constants/controller'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function OurStory() {
  return (
    <div className='flex flex-col sm:flex-row relative gap-4'>
      <div className='absolute left-0 -top-14 opacity-20'>
        <Image
          src={`${setup}1.png`}
          width={500}
          height={500}
          objectFit='cover'
          alt='flower'
        />
      </div>
      <div className='flex flex-col flex-1 justify-center px-2 sm:px-20 gap-3'>
          <p className='font-semibold text-xl'>Our Story</p>
          <p className='font-light'>From a simple connection on Litmatch to a love that transcends distance, their journey has been one of unwavering commitment and deepening bonds. Despite the miles between them, their hearts grew closer with every message and call. Now, they&apos;re ready to turn their long-distance love into a lifetime together.</p>
          <Link href={'/ourstory'} className='z-10'>
            <button className='self-start p-3 text-xs text-white bg-green-950'>See More</button>
          </Link>
      </div>
      <div className='flex flex-1'>
          <Image
              src={`${setup}C2.png`}
              alt='story'
              height={300}
              width={300}
              objectFit='cover'
          />
      </div>
    </div>
  )
}
