import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ weight: '400', preload: false });

export const metadata: Metadata = {
  title: 'Kimmy 💍 Joseph',
  description: "Joseph and Kimmy's story is one of love, commitment, and shared dreams. Together, they embark on a beautiful journey filled with cherished memories, unwavering support, and the promise of a lifetime partnership. Their bond symbolizes not just romance, but a deep connection rooted in trust and companionship, like two halves completing each other perfectly.",
  keywords: [
    'love story',
    'commitment',
    'Joseph and Kimmy',
    'journey of love',
    'lifetime partnership',
    'romance and trust',
  ],
  openGraph: {
    title: 'Kimmy 💍 Joseph',
    description: "Joseph and Kimmy's love story filled with cherished memories and unwavering support.",
    siteName: 'Kimmy & Joseph',
    images: [
      {
        url: '/images/GSP-6621.jpg', // Path to the image in the public folder
        width: 800,
        height: 600,
        alt: 'Kimmy and Joseph',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kimmy 💍 Joseph',
    description: "Joseph and Kimmy's love story filled with cherished memories and unwavering support.",
    images: ['/images/GSP-6621.jpg'], // Path to the image in the public folder
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen w-full bg-[#eee] flex flex-col">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
