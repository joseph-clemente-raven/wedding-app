'use client'

import { setup } from '@/constants/controller'
import Image from 'next/image'
import React from 'react'

export default function Wedding() {
    return (
        <div className='flex flex-col pt-10 pb-10 sm:pt-36 sm:pb-10'>
            <div className='flex flex-col gap-2 relative'>
                <p className='text-center font-semibold text-2xl'>Wedding Details</p><br/>
                <div className='absolute -top-24 left-0 sm:left-80 opacity-60'>
                    <Image
                        src={`${setup}line2.png`}
                        width={300}
                        height={5}
                        alt='line'
                        objectFit='cover'
                    />
                </div>
                <p className='text-center font-light'>Join Us as We Say <span className='font-bold'>{`'`} I Do {`'`}</span>: Everything You Need to Know for Our Special Day</p>
            </div>
            <div className='flex flex-col sm:flex-row py-2 sm:py-10 gap-1 sm:gap-4 px-0'>
                <div className='flex flex-1'>
                    <div className='flex flex-col shadow-md p-4 text-center'>
                        <div className='flex flex-1'>
                            <div className="w-full aspect-square">
                                <Image
                                    src={`${setup}church.jpg`}
                                    alt='church'
                                    width={1200}
                                    height={1200}
                                    objectFit='cover'
                                    className="w-full h-full"/>
                            </div>
                        </div>
                        <div className='py-4'>
                            <p className='font-semibold'>Church</p>
                            <p className='font-bold'>Our Lady of Mount Carmel Church</p>
                            <p className='font-light text-xs'>Villarin St., Cagayan De Oro City, Misamis Oriental</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-1'>
                    <div className='shadow-md p-4 text-center gap-10'>
                        <div className="w-full aspect-square">
                            <Image
                                src={`${setup}reception.jpg`}
                                alt='reception'
                                width={1200}
                                height={1200}
                                objectFit='cover'
                                className="w-full h-full"/>
                        </div>
                        <div className='py-4'>
                            <p className='font-semibold text-green-950'>Reception</p>
                            <p className='font-bold text-green-950'>Country Village Hotel</p>
                            <p className='font-light text-xs text-green-950'>Villarin St., Cagayan De Oro City, Misamis Oriental</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-1'>
                    <div className='shadow-md p-4 text-center gap-10'>
                        <div className="w-full aspect-square">
                            <Image
                                src={`${setup}C1.png`}
                                alt='weddingday'
                                width={1200}
                                height={1200}
                                objectFit='cover'
                                className="w-full h-full"/>
                        </div>
                        <div className='py-4'>
                            <p className='font-semibold text-green-950'>Wedding Day</p>
                            <p className='font-bold text-green-950'>March 29, 2025 03:00 PM</p>
                            <p className='text-xs font-light text-green-950'>Saturday</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
