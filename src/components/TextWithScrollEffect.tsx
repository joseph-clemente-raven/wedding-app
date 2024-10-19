'use client';
import React, { useEffect, useRef, useState, ReactNode } from 'react';

// Function to split text into spans with visibility effect
export const splitTextToSpans = (text: string, isVisible: boolean): ReactNode => {
    // Escape single quotes in text
    const escapedText = text.replace(/'/g, '&#39;');

    // Split the text into words
    const words = escapedText.split(' ');

    return (
        <>
            {words.map((word, index) => (
                <span
                    key={index}
                    className={`inline-block leading-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: `${index * 200}ms` }} // Delay each word for staggered effect
                >
                    {word}{'\u00A0'}
                </span>
            ))}
        </>
    );
};

// Props type for TextWithScrollEffect component
interface TextWithScrollEffectProps {
    text: string;
}

// Component with scroll-triggered text reveal effect
const TextWithScrollEffect: React.FC<TextWithScrollEffectProps> = ({ text }) => {
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once element becomes visible
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        const currentRef = textRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div ref={textRef}>
            {splitTextToSpans(text, isVisible)}
        </div>
    );
};

export default TextWithScrollEffect;