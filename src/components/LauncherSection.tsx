
import { useState, useRef, useEffect } from 'react';

const LauncherSection = () => {
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
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        BMT LAUNCHER
      </h2>
      
      <div className="flex flex-col items-center">
        <div className="w-full max-w-md relative overflow-hidden rounded-lg mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img 
            src="https://placehold.co/800x450/191919/EEEEEE?text=BMT+Launcher" 
            alt="BMT Launcher" 
            className="w-full h-auto rounded-lg shadow-xl transform transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        
        <div className="text-center">
          <p className="text-gray-300 mb-6 leading-relaxed">
            This is a Launcher that has access to my games (Only Unhinged currently), 
            with the ability for them to be updated when I release them. It uses .NET XML, 
            and Google Drive to download and update games.
          </p>
          
          <p className="text-gray-400 mb-8">
            Click below to download the zip (it will have a randomly generated name)<br />
            (To open the App find the .exe in the folder)
          </p>
          
          <a 
            href="https://www.googleapis.com/drive/v3/files/190THbE01BME6g9VXtL4lslfvCkpPYeR0?alt=media&key=AIzaSyDVCNpmfKmJ0gPeyZ8YWMca9ZOKz0CWdgs"
            className="download-button inline-flex items-center"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fillRule="evenodd" 
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
                clipRule="evenodd"
              ></path>
            </svg>
            DOWNLOAD
          </a>
        </div>
      </div>
    </div>
  );
};

export default LauncherSection;
