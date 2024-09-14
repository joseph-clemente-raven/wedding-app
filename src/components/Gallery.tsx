'use client'

import Image from 'next/image'
import React from 'react'

export default function Gallery() {
    return (
        <div className='flex flex-col relative'>
            <div className='absolute -top-8 -left-96 opacity-30'>
                <Image
                    src={'side1.png'}
                    width={300}
                    height={300}
                    alt='flower'
                    objectFit='cover'
                />
            </div>
            <div className='absolute bottom-20 -right-80 opacity-30'>
                <Image
                    src={'side2.png'}
                    width={300}
                    height={300}
                    alt='flower'
                    objectFit='cover'
                />
            </div>
            <div className='flex flex-col gap-2 relative'>
                <p className='text-center font-semibold text-2xl text-green-950'>Gallery</p>
                <p className='text-center font-bold text-green-950'>Moments of Forever: A Wedding Journey</p>
                <p className='text-center font-light text-green-950'>Capture and relive the magic of your wedding day with &quot;Moments of Forever,&quot; a gallery preserving every joyful, heartfelt moment.</p><br/>
                <div className='absolute -top-8 left-80 opacity-50'>
                    <Image
                        src={'line4.png'}
                        width={300}
                        height={5}
                        alt='flower'
                        objectFit='cover'
                    />
                </div>
            </div>
            <div className='flex flex-wrap justify-center gap-4 py-12'>
                <Image
                    src={'img.jpg'}
                    alt='gallery'
                    width={300}
                    height={300}
                    objectFit='cover'
                />
                <Image
                    src={'img1.jpg'}
                    alt='gallery'
                    width={300}
                    height={300}
                    objectFit='cover'
                />
                <Image
                    src={'img2.jpg'}
                    alt='gallery'
                    width={300}
                    height={300}
                    objectFit='cover'
                />
                <Image
                    src={'img3.jpg'}
                    alt='gallery'
                    width={300}
                    height={300}
                    objectFit='cover'
                />
                <Image
                    src={'img2.jpg'}
                    alt='gallery'
                    width={300}
                    height={300}
                    objectFit='cover'
                />
                <Image
                    src={'img3.jpg'}
                    alt='gallery'
                    width={300}
                    height={300}
                    objectFit='cover'
                />
                <Image
                    src={'img.jpg'}
                    alt='gallery'
                    width={300}
                    height={300}
                    objectFit='cover'
                />
                <Image
                    src={'img1.jpg'}
                    alt='gallery'
                    width={300}
                    height={300}
                    objectFit='cover'
                />
                <Image
                    src={'img3.jpg'}
                    alt='gallery'
                    width={300}
                    height={300}
                    objectFit='cover'
                />
            </div>
        </div>
    )
}
