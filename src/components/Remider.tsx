import React from 'react'
import { Dancing_Script } from 'next/font/google';

const dancing_script = Dancing_Script({ weight: '700', preload: false });

export default function Reminder() {
  return (
    <div className='flex items-center min-h-80 flex-col p-0 sm:p-6 gap-4 justify-center'>
        <h1 className={`font-bold text-4xl text-center ${dancing_script.className}`}>A Gentle Reminder</h1>
        <p className='p-6 sm:px-32 py-0 text-center'>We truly appreciate your understanding that, due to the limited capacity of our venue, we are able to accommodate adults only and we kindly request no plus ones. Unfortunately, we are unable to host children at this event.</p>
        <p className='p-6 sm:px-32 py-0 text-center'>Your cooperation in this matter is greatly appreciated</p>
        <p className='p-6 sm:px-32 py-0 text-center'>Thank you and see you!</p>
    </div>
  )
}
