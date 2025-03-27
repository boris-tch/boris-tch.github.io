
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Youtube } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link 
            to="/games" 
            className={`header-link mr-8 ${location.pathname === '/games' ? 'text-white after:w-full' : ''}`}
          >
            GAMES
          </Link>
        </div>
        
        <Link 
          to="/" 
          className="transform transition-transform duration-300 hover:scale-105"
        >
          <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            BMT
          </div>
        </Link>
        
        <div className="flex items-center">
          <a 
            href="https://www.youtube.com/@bmtclips" 
            target="_blank" 
            rel="noopener noreferrer"
            className="header-link flex items-center"
          >
            <Youtube className="w-4 h-4 mr-1" />
            <span>YOUTUBE</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
