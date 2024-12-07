import React from 'react'
import { Dancing_Script } from 'next/font/google';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { setup } from '@/constants/controller';

const dancing_script = Dancing_Script({ weight: '700', preload: false });

export default function PhotoScreen() {
  return (
    <main className='flex flex-col px-10 w-full sm:w-[70%] self-center'>
      <div className='flex flex-col gap-2 min-h-screen bg-[#FBFCF8] pt-28 pb-10'>
        <section className='flex flex-col min-h-[30vw] w-full'>
          <p className={`${dancing_script.className} text-4xl text-center`}>Pre-nup</p>
          <div className='flex justify-center items-center'>
            <Image
              src={`${setup}line2.png`}
              width={200}
              height={5}
              alt='line'
              className='m-0 p-0 opacity-50'
              objectFit='cover'
            />
          </div>
          <div className='flex justify-center flex-1 items-center flex-col h-full w-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="gray" className='w-32'>
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <p className='text-gray-500'>Photos are not yet available</p>
          </div>
        </section>
        <hr className='border-3'/>
        <section className='min-h-[30vw] flex flex-col pt-10'>
          <p className={`${dancing_script.className} text-4xl text-center`}>Wedding day</p>
          <div className='flex justify-center items-center'>
            <Image
              src={`${setup}line2.png`}
              width={200}
              height={5}
              alt='line'
              className='m-0 p-0 opacity-50'
              objectFit='cover'
            />
          </div>
          <div className='flex justify-center flex-1 items-center flex-col h-full w-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="gray" className='w-32'>
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <p className='text-gray-500'>Photos are not yet available</p>
          </div>
        </section>
      </div>
      <Footer/>
    </main>
  )
}
