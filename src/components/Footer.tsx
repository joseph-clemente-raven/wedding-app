'use client'
import { setup } from '@/constants/controller'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <main className='flex flex-col pb-20 pt-10'>
      <div className='flex flex-row justify-center items-center'>
        <p className='font-semibold text-green-950'>© 2024 Kimmy</p>
        <Image
          src={`${setup}ring.png`}
          width={60}
          height={60}
          alt='ring'
          objectFit='cover'
        />
        <p className='font-semibold text-green-950'>Joseph</p>
      </div>
      <p className='text-center text-xs'>#Forever<span className='font-bold'>SEPH</span>ilingNi<span className='font-bold'>KIMMY</span></p>
    </main>
  )
}
