
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameCard from '../components/GameCard';

const Games = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gaming-darker">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-7xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-16 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">BMT Games</span>
        </h1>
        
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="grid gap-8">
            <GameCard 
              title="Upward by BMT, bigmanozin, Obliber" 
              embedUrl="https://itch.io/embed/2733963?border_width=0&amp;bg_color=191919&amp;fg_color=eeeeee&amp;link_color=5a5a5a&amp;border_color=191919"
              height={185}
              delay={0}
            />
            
            <GameCard 
              title="Unhinged by BMT" 
              embedUrl="https://itch.io/embed/2253842?border_width=0&amp;bg_color=191919&amp;fg_color=eeeeee&amp;link_color=5a5a5a&amp;border_color=191919"
              height={185}
              delay={100}
            />
            
            <GameCard 
              title="Parkour Mainiac by BMT" 
              embedUrl="https://itch.io/embed/742901?border_width=0&amp;bg_color=191919&amp;fg_color=eeeeee&amp;link_color=5a5a5a&amp;border_color=191919"
              height={185}
              delay={200}
            />
            
            <GameCard 
              title="GravityTest by BMT" 
              embedUrl="https://itch.io/embed/666823?border_width=0&amp;bg_color=191919&amp;fg_color=eeeeee&amp;link_color=5a5a5a&amp;border_color=191919"
              height={185}
              delay={300}
            />
            
            <GameCard 
              title="Escape by BMT" 
              embedUrl="https://itch.io/embed/743120?border_width=0&amp;bg_color=191919&amp;fg_color=eeeeee&amp;link_color=5a5a5a&amp;border_color=191919"
              height={185}
              delay={400}
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Games;
