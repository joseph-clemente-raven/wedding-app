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
            const difference: number = targetDate.getTime() - now.getTime();

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
        <div className='flex relative items-center self-center gap-1 sm:gap-4 flex-row py-16'>
            <div className='absolute -top-8 -left-96 opacity-30'>
                <Image
                    src={'/side3.png'}
                    width={300}
                    height={300}
                    alt='flower'
                    className='object-cover w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40'
                />
            </div>
            <div className='relative'>
                <div className='absolute -left-12 -top-20'>
                    <Image
                        src="/10.png"
                        alt="Avatar"
                        width={160}
                        height={160}
                        className='hidden sm:block rounded-full object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32'
                    />
                </div>
                <div className='absolute -right-6 -bottom-6'>
                    <Image
                        src="/9.png"
                        alt="Avatar"
                        width={100}
                        height={100}
                        className='hidden sm:block rounded-full object-cover w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24'
                    />
                </div>
                <Image
                    src="/img.jpg"
                    alt="Avatar"
                    width={150}
                    height={150}
                    className='rounded-full hidden object-cover w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40'
                />
            </div>
            <div className="ml-0 sm:ml-6">
                <p className="text-xl sm:text-2xl font-semibold text-green-950">Kimmy & Joseph</p>
                <div className='flex flex-row gap-1 sm:gap-6 items-center'>
                    <div className="flex flex-col text-center gap-2">
                        <p className='text-xl sm:text-4xl font-semibold text-green-950'>{timeLeft.days}</p>
                        <p className='text-xs font-light text-green-950'>Days</p>
                    </div>
                    <Image
                        src="/2.png"
                        alt="Icon"
                        width={80}
                        height={80}
                        className='rounded-full object-cover w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16'
                    />
                    <div className="flex flex-col text-center gap-2">
                        <p className='text-xl sm:text-4xl font-semibold text-green-950'>{timeLeft.hours}</p>
                        <p className='text-xs font-light text-green-950'>Hours</p>
                    </div>
                    <Image
                        src="/5.png"
                        alt="Icon"
                        width={100}
                        height={100}
                        className='rounded-full object-cover w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24'
                    />
                    <div className="flex flex-col text-center gap-2">
                        <p className='text-xl sm:text-4xl font-semibold text-green-950'>{timeLeft.minutes}</p>
                        <p className='text-xs font-light text-green-950'>Minutes</p>
                    </div>
                    <Image
                        src="/sage.png"
                        alt="Icon"
                        width={100}
                        height={100}
                        className='rounded-full object-cover w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24'
                    />
                    <div className="flex flex-col text-center gap-2">
                        <p className='text-xl sm:text-4xl font-semibold text-green-950'>{timeLeft.seconds}</p>
                        <p className='text-xs font-light text-green-950'>Seconds</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
