"use client"
import Countdown from '@/components/Countdown';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import OurStory from '@/components/OurStory';
import Wedding from '@/components/Wedding';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function Home() {
    return (
        <main className='flex flex-col overflow-hidden'>
            <Header/>
            <div className='flex flex-col px-10 pb-10 bg-[#FBFCF8] w-full sm:w-[70%] self-center'>
                <Countdown/>
                <OurStory/>
                <Wedding/>
                <Map/>
                <Gallery/>
            </div>
            <Footer/>
        </main>
    )
}
