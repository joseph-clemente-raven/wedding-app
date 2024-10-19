
// Helper function to split text into spans
export const splitTextToSpans = (text, isVisible) => {
    return text.split('').map((char, index) => (
        <span
            key={index}
            className={`inline-block transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: `${index * 50}ms` }} // Delay for each letter
        >
            {char}
        </span>
    ));
};