'use client';
import React, { useEffect, useRef, useState } from 'react';

export const splitTextToSpans = (text, isVisible) => {
    // Escape single quotes
    const escapedText = text.replace(/'/g, "&#39;");
    
    // Split the text into words
    const words = escapedText.split(' ');

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

        const currentRef = textRef.current; // Store the current ref value

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) { // Use the stored value in cleanup
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
