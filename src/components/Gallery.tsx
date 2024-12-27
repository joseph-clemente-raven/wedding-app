'use client'

import { setup } from '@/constants/controller'
import Image from 'next/image'
import React from 'react'

const gallery = [{
    id: 1,
    word: 'Together',
},
{
    id: 2,
    word: 'We',
},
{
    id: 3,
    word: 'Created',
},
{
    id: 4,
    word: 'Memories',
},
{
    id: 5,
    word: 'That',
},
{
    id: 6,
    word: 'Distance',
},
{
    id: 7,
    word: 'Could',
},
{
    id: 8,
    word: 'Never',
},
{
    id: 9,
    word: 'Erase',
}]

export default function Gallery() {
    return (
        <div className='flex flex-col relative'>
            <div className='flex flex-col relative px-6 sm:px-60 gap-2 mb-3'>
                <p className='text-center font-semibold text-2xl text-green-950'>Photos</p>
                <p className='text-center font-bold text-green-950'>Moments of Forever: A Wedding Journey</p>
                <p className='text-center font-light text-green-950'>Capture and relive the magic of your wedding day with &quot;Moments of Forever,&quot; a gallery preserving every joyful, heartfelt moment.</p><br/>
                <div className='mx-auto -mt-10'>
                    <Image
                        src={`${setup}line4.png`}
                        width={200}
                        height={200}
                        alt='flower'
                        className='object-contain opacity-50'
                    />
                </div>
            </div>
            <div className='flex mt-3 flex-wrap justify-center gap-4'>
                {gallery.map((item, index) => (
                    <div key={index} className='relative shadow-lg p-2 w-full sm:w-1/3 group overflow-hidden border-2 border-gray-200/60 transition-all duration-300'>
                        <Image
                            src={`${setup}f${item.id}.png`}
                            alt={`gallery ${item.id}`}
                            width={400}
                            height={400}
                            objectFit='cover'
                            className='transition-opacity duration-1000 w-full ease-in-out group-hover:opacity-70'
                        />
                        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                            <p className='text-white text-4xl font-bold'>{item.word}</p>
                        </div>
                        <div className='absolute inset-0 border-2 border-white scale-0 transition-transform duration-1000 ease-in-out group-hover:scale-100' />
                    </div>
                ))}
            </div>
        </div>
    )
}
