import React from 'react'
import { Dancing_Script } from 'next/font/google';

const dancing_script = Dancing_Script({ weight: '700', preload: false });

export default function PhotoScreen() {
  return (
    <main className='flex flex-col px-10 min-h-screen pt-28 pb-10 bg-[#FBFCF8] w-full sm:w-[70%] self-center'>
      <section className='min-h-80'>
        <p className={`${dancing_script.className} text-4xl text-center`}>Pre-nup</p>
      </section>
      <section className='min-h-80'>
        <p className={`${dancing_script.className} text-4xl text-center`}>Wedding day</p>
      </section>
    </main>
  )
}
