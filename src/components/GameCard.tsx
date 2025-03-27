
import { useState, useEffect, useRef } from 'react';

interface GameCardProps {
  title: string;
  embedUrl: string;
  width?: number;
  height?: number;
  delay?: number;
}

const GameCard = ({ title, embedUrl, width = 550, height = 165, delay = 0 }: GameCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay for staggered animation
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`w-full transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <iframe 
        src={embedUrl}
        width="100%" 
        height={height}
        className="rounded-lg shadow-md border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
        style={{ maxWidth: width }}
        title={title}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default GameCard;
