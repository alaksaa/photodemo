import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ThumbsUp, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Discussions = () => {
  const { toast } = useToast();
  const [discussions] = useState([
    {
      id: 1,
      title: 'How to approach rotational dynamics problems?',
      author: 'PhysicsEnthusiast',
      replies: 24,
      likes: 156,
      topic: 'Mechanics',
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      title: 'Confusion about Maxwell\'s displacement current',
      author: 'QuantumLearner',
      replies: 18,
      likes: 89,
      topic: 'Electromagnetism',
      timeAgo: '5 hours ago'
    },
    {
      id: 3,
      title: 'Best resources for understanding wave-particle duality',
      author: 'ModernPhysicsFan',
      replies: 42,
      likes: 203,
      topic: 'Modern Physics',
      timeAgo: '1 day ago'
    },
    {
      id: 4,
      title: 'Thermodynamic cycles - practical applications',
      author: 'EngineeringMind',
      replies: 31,
      likes: 127,
      topic: 'Thermodynamics',
      timeAgo: '2 days ago'
    }
  ]);

  const handleDiscussionClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="discussions" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Community Discussions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with fellow physics enthusiasts and share knowledge
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button
              size="lg"
              className="w-full md:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              onClick={handleDiscussionClick}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start New Discussion
            </Button>
          </div>

          <div className="space-y-4">
            {discussions.map((discussion, index) => (
              <motion.div
                key={discussion.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="glass-effect rounded-xl p-6 cursor-pointer group"
                onClick={handleDiscussionClick}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                      {discussion.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {discussion.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {discussion.timeAgo}
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                        {discussion.topic}
                      </span>
                    </div>

                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                        <MessageSquare className="w-4 h-4" />
                        <span>{discussion.replies} replies</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{discussion.likes} likes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
              onClick={handleDiscussionClick}
            >
              Load More Discussions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discussions;