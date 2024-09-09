'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Target date in Philippine Time (PHT)
        const targetDate = new Date('2025-03-29T13:00:00+08:00');

        const countdown = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(countdown);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    return (
        <div className='flex relative items-center self-center gap-4 flex-row py-16'>
            <div className='absolute -top-8 -left-96 opacity-30'>
                <Image
                    src={'/side3.png'}
                    width={300}
                    height={300}
                    alt='flower'
                    objectFit='cover'
                />
            </div>
            <div className='relative'>
                <div className='absolute -left-12 -top-20'>
                    <Image
                        src="/10.png"
                        alt="Avatar"
                        width={160}
                        height={160}
                        objectFit="cover"
                        className='rounded-full'/>
                </div>
                <div className='absolute -right-6 -bottom-6'>
                    <Image
                        src="/9.png"
                        alt="Avatar"
                        width={100}
                        height={100}
                        objectFit="cover"
                        className='rounded-full'/>
                </div>
                <Image
                    src="/img.jpg"
                    alt="Avatar"
                    width={150}
                    height={150}
                    objectFit="cover"
                    className='rounded-full'/>
            </div>
            <div className="ml-6">
                <p className="text-2xl font-semibold text-green-950">Kimmy & Joseph</p>
                <div className='flex flex-row gap-6 items-center'>
                    <div className="flex flex-col text-center gap-2">
                        <p className='text-4xl font-semibold text-green-950'>{timeLeft.days}</p>
                        <p className='text-xs font-light text-green-950'>Days</p>
                    </div>
                    <Image
                        src="/2.png"
                        alt="Icon"
                        width={80}
                        height={80}
                        objectFit="cover"
                        className='rounded-full'/>
                    <div className="flex flex-col text-center gap-2">
                        <p className='text-4xl font-semibold text-green-950'>{timeLeft.hours}</p>
                        <p className='text-xs font-light text-green-950'>Hours</p>
                    </div>
                    <Image
                        src="/5.png"
                        alt="Icon"
                        width={100}
                        height={100}
                        objectFit="cover"
                        className='rounded-full'/>
                    <div className="flex flex-col text-center gap-2">
                        <p className='text-4xl font-semibold text-green-950'>{timeLeft.minutes}</p>
                        <p className='text-xs font-light text-green-950'>Minutes</p>
                    </div>
                    <Image
                        src="/sage.png"
                        alt="Icon"
                        width={100}
                        height={100}
                        objectFit="cover"
                        className='rounded-full'/>
                    <div className="flex flex-col text-center gap-2">
                        <p className='text-4xl font-semibold text-green-950'>{timeLeft.seconds}</p>
                        <p className='text-xs font-light text-green-950'>Seconds</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
