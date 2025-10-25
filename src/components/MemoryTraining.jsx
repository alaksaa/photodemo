import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const MemoryTraining = () => {
  const { toast } = useToast();

  const games = [
    {
      id: 1,
      title: 'Formula Flash',
      description: 'Memorize and recall physics formulas under time pressure',
      icon: Zap,
      difficulty: 'Medium',
      bestScore: 850
    },
    {
      id: 2,
      title: 'Constant Recall',
      description: 'Match physical constants with their values',
      icon: Target,
      difficulty: 'Easy',
      bestScore: 920
    },
    {
      id: 3,
      title: 'Concept Connections',
      description: 'Link related physics concepts and principles',
      icon: Brain,
      difficulty: 'Hard',
      bestScore: 720
    },
    {
      id: 4,
      title: 'Equation Builder',
      description: 'Reconstruct complex equations from memory',
      icon: Trophy,
      difficulty: 'Expert',
      bestScore: 680
    }
  ];

  const handleGameClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="memory-training" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Memory & Brain Training
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Enhance your cognitive abilities with interactive brain exercises
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="glass-effect rounded-xl p-8 cursor-pointer group"
                onClick={handleGameClick}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <game.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                      {game.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {game.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
                    {game.difficulty}
                  </span>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">Best: {game.bestScore}</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  onClick={handleGameClick}
                >
                  Play Now
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Your Training Progress</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">47</div>
                <div className="text-gray-400 text-sm">Games Played</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">3,420</div>
                <div className="text-gray-400 text-sm">Total Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">12</div>
                <div className="text-gray-400 text-sm">Day Streak</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">Top 5%</div>
                <div className="text-gray-400 text-sm">Global Rank</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MemoryTraining;