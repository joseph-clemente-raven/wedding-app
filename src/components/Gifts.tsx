import React from 'react'
import { Dancing_Script } from 'next/font/google';

const dancing_script = Dancing_Script({ weight: '700', preload: false });

export default function Gifts() {
  return (
    <div className='flex items-center min-h-80 flex-col p-0 sm:p-20 gap-4 justify-center'>
        <h1 className={`font-bold text-4xl text-center ${dancing_script.className}`}>Gifts</h1>
        <p className='p-6 sm:px-32 py-0 text-center'>With all that we have, we are truly blessed. Your presence & prayers are that we request. But if you desire to give nonetheless, monetary gift is the one we suggest.</p>
    </div>
  )
}
