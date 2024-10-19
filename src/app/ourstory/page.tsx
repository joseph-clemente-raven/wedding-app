'use client';

import Footer from '@/components/Footer';
import TextWithScrollEffect from '@/components/TextWithScrollEffect';
import { setup } from '@/constants/controller';
import { Tangerine } from 'next/font/google';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const tangerine = Tangerine({ weight: '700', preload: false });

export default function OurStoryScreen() {


  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setLoaded(true);
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <main className='w-full min-h-screen flex flex-col'>
      <div className='flex flex-col px-0 sm:px-10 pb-32 bg-[#FBFCF8] w-full sm:w-[70%] self-center pt-[70px] sm:pt-[90px]'>
        <div className='flex flex-col sm:flex-row h-[90vh] sm:h-96 w-full'>
          <div className='flex flex-col flex-1 justify-center px-8 gap-2'>
            <h4 className='font-semibold text-xl'>Our Journey to Forever</h4>
            <p>
              What began as a beautiful connection has blossomed into a lifetime of love and partnership. Through every moment—big and small—we’ve shared dreams, faced challenges, and built a future together. Now, we’re ready to take the next step and celebrate this incredible journey with the people we love most.
            </p>
          </div>
          <div className='flex w-full h-full flex-row flex-1 gap-3'>
            <div className='flex w-full h-full flex-1 mt-4 relative overflow-hidden'>
              <Image
                src={`${setup}G1.png`}
                alt='banner'
                layout='fill'
                objectFit='cover'
                objectPosition='30% 50%'
                className={`w-full h-full transition-opacity duration-1000 opacity-100`}
                priority
              />
            </div>
            <div className='flex w-full h-full flex-1 relative overflow-hidden'>
              <Image
                src={`${setup}G2.png`}
                alt='banner'
                layout='fill'
                objectFit='cover'
                objectPosition='30% 10%'
                className={`w-full h-full transition-opacity duration-1000 opacity-100`}
                priority
              />
            </div>
            <div className='flex w-full h-full flex-1 mt-4 relative overflow-hidden'>
              <Image
                src={`${setup}G3.png`}
                alt='banner'
                layout='fill'
                objectFit='cover'
                objectPosition='80% 50%'
                className={`w-full h-full transition-opacity duration-1000 opacity-100`}
                priority
              />
            </div>
          </div>
        </div>
        <div className='text-center mt-20'>
          <h4 className={`font-bold text-6xl ${tangerine.className}`}>
            Kimmy <span className={`${tangerine.className}`}>&</span> Joseph
          </h4>
          <p className={`${tangerine.className} text-4xl`}>Love Story</p>
          <div className='flex justify-center items-center h-16'>
            <Image
              src={`${setup}line2.png`}
              width={300}
              height={5}
              alt='line'
              className='m-0 p-0'
              objectFit='cover'
            />
          </div>
        </div>
        
        {/* Story 1 */}
        <div className='flex flex-col sm:flex-row py-16 px-10 gap-6'>
          <div className="w-full flex flex-1">
            <Image
              src={`${setup}GSP-6647.jpg`}
              alt='Story 1'
              width={1200}
              height={1200}
              objectFit='cover'
              className="w-full h-full rounded-full shadow-lg"
            />
          </div>
          <div className='flex flex-1 items-center'>
            <TextWithScrollEffect text={`Joseph and Kimmy met on an app called Litmatch, where they began chatting and quickly formed a strong connection. At first, Kimmy told Joseph that she wasn’t ready to commit to anyone, feeling uncertain about love. However, Joseph was filled with hope and responded, “I hope someone will change your mind.” He believed there was something special between them and wanted to show her the beauty of love, even if it meant taking some risks along the way. Their conversations grew deeper, and Joseph felt excited about the possibility of a future together.`} />
          </div>
        </div>

        {/* Story 2 */}
        <div className='flex flex-col-reverse sm:flex-row px-10 gap-6'>
          <div className='flex flex-1 items-center'>
            <TextWithScrollEffect text={`Even though they lived far apart—Joseph in Bulacan and Kimmy in Cagayan de Oro—he decided to take a leap of faith and visit her. When they finally met in person, it felt magical as they explored the city and created wonderful memories together. Joseph was warmly welcomed by Kimmy's family and friends, who quickly saw how happy they made each other. During his visit, they bought promise rings and made vows at the Malaybalay Church, promising to support one another and keep their love alive despite the challenges they might face. This special moment made their bond even stronger, filling both their hearts with joy.`} />
          </div>
          <div className="w-full flex flex-1">
            <Image
              src={`${setup}S2.png`}
              alt='Story 2'
              width={1200}
              height={1200}
              objectFit='cover'
              className="w-full h-full rounded-full shadow-lg"
            />
          </div>
        </div>

        {/* Story 3 */}
        <div className='flex flex-col sm:flex-row py-16 px-10 gap-6'>
          <div className="w-full flex flex-1">
            <Image
              src={`${setup}GSP-7410.jpg`}
              alt='Story 3'
              width={1200}
              height={1200}
              objectFit='cover'
              className="w-full h-full rounded-full shadow-lg"
            />
          </div>
          <div className='flex flex-1 items-center'>
            <TextWithScrollEffect text={`Like all relationships, theirs had its share of ups and downs. They encountered misunderstandings along the way but always managed to talk things out and find common ground, proving that their connection was strong enough to overcome any obstacle. When Kimmy's birthday approached, Joseph planned a special celebration just for her, wanting to fill her day with happiness and laughter. Later on, Kimmy traveled to Bulacan to meet Joseph's family and enjoy a concert featuring her favorite Korean artist, an experience that deepened their connection and created even more cherished memories.`} />
          </div>
        </div>

        {/* Story 4 */}
        <div className='flex flex-col-reverse sm:flex-row px-10 gap-6'>
          <div className='flex flex-1 items-center'>
            <TextWithScrollEffect text={`As time went by, Joseph realized that Kimmy was the one he wanted to spend his life with. He felt it in his heart and wanted to take the next step in their love story by proposing to her. With excitement and nervousness, he asked for his parents' blessing, feeling ready to commit to a future together. Their journey is a beautiful example of how love can bridge any distance, bringing joy, laughter, and shared dreams into their lives. Together, Joseph and Kimmy found a love that was real and lasting, proving that when two people are meant to be together, nothing can stand in their way. Their love story is a testament to the power of connection, showing that true love can overcome any barrier.`} />
          </div>
          <div className="w-full flex flex-1">
            <iframe
              width="400"
              height="400"
              className='rounded-lg'
              src="https://www.youtube.com/embed/MJ8Ps0M6-8o?si=doeboWo9AUxspQNg&amp;controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
