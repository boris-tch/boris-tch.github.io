
import { useEffect } from 'react';
import Header from '../components/Header';
import GameCard from '../components/GameCard';
import LauncherSection from '../components/LauncherSection';
import YoutubeSection from '../components/YoutubeSection';
import Footer from '../components/Footer';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gaming-darker">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">BMT Gaming Hub</span>
        </h1>
        
        <section className="page-section" style={{ '--animation-delay': '3' } as React.CSSProperties}>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">RECENT GAMES</h2>
          
          <div className="space-y-6">
            <GameCard 
              title="Upward by BMT, bigmanozin, Obliber" 
              embedUrl="https://itch.io/embed/2733963?border_width=0&amp;bg_color=191919&amp;fg_color=eeeeee&amp;link_color=5a5a5a&amp;border_color=191919"
              delay={0}
            />
            <GameCard 
              title="Unhinged by BMT" 
              embedUrl="https://itch.io/embed/2253842?border_width=0&amp;bg_color=191919&amp;fg_color=eeeeee&amp;link_color=5a5a5a&amp;border_color=191919"
              delay={100}
            />
            <GameCard 
              title="Parkour Mainiac by BMT" 
              embedUrl="https://itch.io/embed/742901?border_width=0&amp;bg_color=191919&amp;fg_color=eeeeee&amp;link_color=5a5a5a&amp;border_color=191919"
              delay={200}
            />
          </div>
        </section>
        
        <section className="page-section mt-12" style={{ '--animation-delay': '5' } as React.CSSProperties}>
          <LauncherSection />
        </section>
        
        <section className="page-section mt-12" style={{ '--animation-delay': '7' } as React.CSSProperties}>
          <YoutubeSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
