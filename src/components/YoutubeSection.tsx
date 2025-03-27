
import { useState, useRef, useEffect } from 'react';
import { Youtube } from 'lucide-react';

const YoutubeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`gaming-card p-6 md:p-8 h-full transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: '0.2s' }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
        YOUTUBE
      </h2>
      
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 bg-gray-800 border-2 border-gray-700 shadow-xl">
          <img 
            src="https://placehold.co/160x160/191919/EEEEEE?text=BMT" 
            alt="BMT YouTube Channel" 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        <h3 className="text-lg font-medium text-white mb-1">@bmtclips</h3>
        <p className="text-gray-400 mb-6">60k+ Subscribers, 44 videos</p>
        
        <a 
          href="https://www.youtube.com/channel/UCZAmQp2BEyHEgQFTGgwiiXw?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg px-6 py-2 mb-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center"
        >
          <Youtube className="w-5 h-5 mr-2" />
          View On YouTube
        </a>
        
        <div className="flex gap-6">
          <a 
            href="https://github.com/RockyBMT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300 button-hover-effect"
          >
            GitHub
          </a>
          <a 
            href="https://www.hackerrank.com/profile/boristchakarski"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300 button-hover-effect"
          >
            HackerRank
          </a>
        </div>
      </div>
    </div>
  );
};

export default YoutubeSection;
