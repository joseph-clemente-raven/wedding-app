'use client';
import React, { useEffect, useRef, useState } from 'react';

// Helper function to split text into spans by word
export const splitTextToSpans = (text, isVisible) => {
    // Split the text into words
    const words = text.split(' ');

    return (
        <>
            {words.map((word, index) => (
                <span
                    key={index}
                    className={`inline-block leading-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: `${index * 200}ms` }} // Adjust delay for each word
                >
                    {word}{'\u00A0'}
                </span>
            ))}
        </>
    );
};

const TextWithScrollEffect = ({ text }) => {
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once the element is visible
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
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
