import React from 'react'

import { Dancing_Script } from 'next/font/google';

const dancing_script = Dancing_Script({ weight: '700', preload: false });

export default function EInvitation() {
  return (
    <div className='flex items-center min-h-80 flex-col p-0 sm:px-20 sm:pb-20 gap-4 justify-center'>
        <h1 className={`font-bold text-4xl text-center ${dancing_script.className}`}>E-Invitation</h1>
    </div>
  )
}
