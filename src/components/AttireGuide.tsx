import React from 'react'
import { Dancing_Script } from 'next/font/google';
import Image from 'next/image';
import { setup } from '@/constants/controller';

const dancing_script = Dancing_Script({ weight: '700', preload: false });

export default function AttireGuide() {
  return (
    <div className='flex items-center min-h-80 flex-col p-0 sm:p-6 gap-4 justify-center'>
      <h1 className={`font-bold text-4xl text-center ${dancing_script.className}`}>Attire Guide</h1>
      <div className='flex flex-col sm:flex-row w-full justify-center items-center'>
          <Image
            src={`${setup}attire.png`}
            width={300}
            height={300}
            objectFit='contain'
            alt='attire'
          />
      </div>
      <div className='flex'>
        <div className='h-5 w-5 rounded-full bg-[#2D6D26]'/>
        <div className='h-5 w-5 rounded-full bg-[#5A8E54] -ml-2'/>
        <div className='h-5 w-5 rounded-full bg-[#86AE81] -ml-2'/>
        <div className='h-5 w-5 rounded-full bg-[#b3ceaf] -ml-2'/>
        <div className='h-5 w-5 rounded-full bg-[#dfefdc] -ml-2'/>
        <div className='h-5 w-5 rounded-full bg-[#ffffff] -ml-2'/>
        <div className='h-5 w-5 rounded-full bg-[#efefef] -ml-2'/>
      </div>
      <p className='p-6 sm:px-32 py-0 text-center'>We would love to see you in your semi-formal attire. We encourage you to dress with this color palette.</p>
    </div>
  )
}
