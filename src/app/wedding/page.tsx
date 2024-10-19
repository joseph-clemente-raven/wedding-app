import AttireGuide from '@/components/AttireGuide'
import EInvitation from '@/components/EInvitation'
import Gifts from '@/components/Gifts'
import RSVP from '@/components/RSVP'
import { setup } from '@/constants/controller'
import Image from 'next/image'
import React from 'react'

export default function Wedding() {
  return (
    <main className='flex flex-col overflow-hidden'>
      <div className='flex relative h-screen flex-col'>
        <Image
            src={`${setup}GSP-6956.jpg`}
            alt="Banner Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-0"
        />
      </div>
      <div className='flex flex-col px-10 pb-10 bg-[#FBFCF8] w-full sm:w-[70%] self-center'>
        <RSVP/>
        <EInvitation/>
        <AttireGuide/>
        <Gifts/>
      </div>
    </main>
  )
}
