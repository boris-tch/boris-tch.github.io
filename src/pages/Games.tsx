
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameCard from '../components/GameCard';

interface Game {
  id: number;
  title: string;
  embedUrl: string;
  description: string;
}

const Games = () => {
  const [games, setGames] = useState<Game[]>([
    {
      id: 1,
      title: "Upward by BMT, bigmanozin, Obliber",
      embedUrl: "https://itch.io/embed/2733963?border_width=0&amp;bg_color=191919&amp;fg_color=eeeeee&amp;link_color=5a5a5a&amp;border_color=191919",
      description: "A challenging platformer game with unique mechanics."
    },
    {
      id: 2,
      title: "Unhinged by BMT",
      embedUrl: "https://itch.io/embed/2253842?border_width=0&amp;bg_color=191919&amp;fg_color=eeeeee&amp;link_color=5a5a5a&amp;border_color=191919",
      description: "Adventure through a mysterious world with unique puzzles."
    },
    {
      id: 3,
      title: "Parkour Mainiac by BMT",
      embedUrl: "https://itch.io/embed/742901?border_width=0&amp;bg_color=191919&amp;fg_color=eeeeee&amp;link_color=5a5a5a&amp;border_color=191919",
      description: "Test your parkour skills in this fast-paced action game."
    }
  ]);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gaming-darker">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">BMT Games</span>
        </h1>
        
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Explore all games created by BMT, from challenging platformers to adventure puzzles.
        </p>
        
        <section className="page-section" style={{ '--animation-delay': '3' } as React.CSSProperties}>
          <div className="grid grid-cols-1 gap-12">
            {games.map((game, index) => (
              <div key={game.id} className="gaming-card p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4">{game.title}</h2>
                <p className="text-gray-400 mb-6">{game.description}</p>
                <GameCard 
                  title={game.title} 
                  embedUrl={game.embedUrl}
                  delay={index * 100}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Games;
