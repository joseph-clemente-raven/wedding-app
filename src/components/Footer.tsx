'use client'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='pb-20 pt-10 flex flex-row justify-center items-center'>
      <p className='font-semibold text-green-950'>© 2024 Kimmy</p>
      <Image
        src={'/ring.png'}
        width={60}
        height={60}
        alt='ring'
        objectFit='cover'
      />
      <p className='font-semibold text-green-950'>Joseph</p>
    </div>
  )
}
