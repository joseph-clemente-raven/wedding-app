'use client'

import Image from 'next/image'
import React from 'react'

export default function OurStory() {
  return (
    <div className='flex flex-col sm:flex-row relative gap-4'>
      <div className='absolute -bottom-20 -right-80 opacity-30'>
          <Image
              src={'/side4.png'}
              width={300}
              height={300}
              alt='flower'
              objectFit='cover'
          />
      </div>
      <div className='absolute left-0 -top-14 opacity-20'>
        <Image
          src={'/1.png'}
          width={500}
          height={500}
          objectFit='cover'
          alt='flower'
        />
      </div>
      <div className='flex flex-col flex-1 justify-center px-2 sm:px-20 gap-3'>
          <p className='font-semibold text-xl'>Our Story</p>
          <p className='font-light'>From a simple connection on Litmatch to a love that transcends distance, their journey has been one of unwavering commitment and deepening bonds. Despite the miles between them, their hearts grew closer with every message and call. Now, they're ready to turn their long-distance love into a lifetime together.</p>
          <button className='self-start z-10 p-3 text-xs text-white bg-green-950'>See More</button>
      </div>
      <div className='flex flex-1'>
          <Image
              src={'/img1.jpg'}
              alt='story'
              height={400}
              width={400}
              objectFit='cover'
          />
      </div>
    </div>
  )
}
