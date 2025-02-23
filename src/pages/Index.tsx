
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const games = [
  {
    title: "Cute Sprite Game",
    description: "An engaging sprite-based adventure",
    url: "https://cute-sprite-889853.netlify.app/",
    background: "bg-gradient-to-br from-rose-50 to-rose-100"
  },
  {
    title: "Hangman",
    description: "Classic word guessing game with a modern twist",
    url: "https://hangman-five-topaz.vercel.app/",
    background: "bg-gradient-to-br from-amber-50 to-amber-100"
  }
];

const Index = () => {
  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-neutral-50 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-neutral-900 text-white"
          >
            Game Collection
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-semibold tracking-tight text-neutral-900 mb-4"
          >
            Featured Games
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-neutral-600 max-w-xl mx-auto"
          >
            Explore our collection of engaging games, each crafted with attention to detail and user experience.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                onClick={() => handleCardClick(game.url)}
                className={`group cursor-pointer h-64 relative overflow-hidden ${game.background} border-0 rounded-2xl transition-all duration-300 hover:shadow-lg`}
              >
                <div className="absolute inset-0 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative h-full flex flex-col justify-end p-6">
                  <h3 className="text-xl font-medium text-neutral-900 mb-2">
                    {game.title}
                  </h3>
                  <p className="text-neutral-600">
                    {game.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-neutral-700">
                    <span className="mr-2">Play Now</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
