import React from 'react'
import { Dancing_Script } from 'next/font/google';

const dancing_script = Dancing_Script({ weight: '700', preload: false });

export default function RSVP() {
  return (
    <div className='flex items-center flex-col p-0 sm:p-20 sm:pb-0 gap-4 justify-center'>
      <h1 className={`font-bold text-4xl text-center ${dancing_script.className}`}>RSVP</h1>
      <p>Join Us for an Unforgettable Experience!</p>
      <p className='p-6 sm:px-32 py-0 text-center'>We&apos;re excited to celebrate together! Please let us know if you can make it by filling out the RSVP form below. Your presence will make our event even more special. Thank you, and we look forward to seeing you soon!</p>
      <p><a target='_blank' href='https://forms.gle/5gpwr7rgj56MY37D7' className='font-bold'>Click here to  RSVP</a></p>
    </div>
  )
}
