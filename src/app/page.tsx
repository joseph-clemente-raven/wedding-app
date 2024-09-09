"use client"
import Countdown from '@/components/Countdown';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import OurStory from '@/components/OurStory';
import Wedding from '@/components/Wedding';

export default function Home() {
    return (
        <main className='flex flex-col overflow-hidden'>
            <Header/>
            <div className='flex flex-col px-10 bg-[#FBFCF8] w-[70%] self-center'>
                <Countdown/>
                <OurStory/>
                <Wedding/>
                <Gallery/>
            </div>
            <Footer/>
        </main>
    )
}
