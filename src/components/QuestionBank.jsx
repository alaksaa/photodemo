import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const QuestionBank = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const topics = ['All Topics', 'Mechanics', 'Electromagnetism', 'Thermodynamics', 'Optics', 'Modern Physics'];
  const difficulties = ['All Levels', 'Easy', 'Medium', 'Hard', 'Expert'];

  const questions = [
    {
      id: 1,
      title: 'Calculate the orbital velocity of a satellite',
      topic: 'Mechanics',
      difficulty: 'Medium',
      attempts: 1250,
      successRate: 68
    },
    {
      id: 2,
      title: 'Derive Maxwell\'s equations from first principles',
      topic: 'Electromagnetism',
      difficulty: 'Expert',
      attempts: 890,
      successRate: 42
    },
    {
      id: 3,
      title: 'Analyze heat engine efficiency using Carnot cycle',
      topic: 'Thermodynamics',
      difficulty: 'Hard',
      attempts: 1100,
      successRate: 55
    },
    {
      id: 4,
      title: 'Solve double-slit interference pattern problem',
      topic: 'Optics',
      difficulty: 'Medium',
      attempts: 1450,
      successRate: 72
    },
    {
      id: 5,
      title: 'Calculate energy levels in hydrogen atom',
      topic: 'Modern Physics',
      difficulty: 'Hard',
      attempts: 980,
      successRate: 48
    },
    {
      id: 6,
      title: 'Determine projectile motion trajectory',
      topic: 'Mechanics',
      difficulty: 'Easy',
      attempts: 2100,
      successRate: 85
    }
  ];

  const handleQuestionClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Easy': 'text-green-400 bg-green-400/10',
      'Medium': 'text-yellow-400 bg-yellow-400/10',
      'Hard': 'text-orange-400 bg-orange-400/10',
      'Expert': 'text-red-400 bg-red-400/10'
    };
    return colors[difficulty] || 'text-gray-400 bg-gray-400/10';
  };

  return (
    <section id="question-bank" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Question Bank
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Practice with thousands of curated physics problems
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="glass-effect rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
              >
                {topics.map((topic) => (
                  <option key={topic} value={topic.toLowerCase()}>
                    {topic}
                  </option>
                ))}
              </select>

              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty.toLowerCase()}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {questions.map((question, index) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="glass-effect rounded-xl p-6 cursor-pointer group"
                onClick={handleQuestionClick}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <BookOpen className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition-colors mb-2">
                          {question.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                            {question.topic}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs ${getDifficultyColor(question.difficulty)}`}>
                            {question.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{question.attempts} attempts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-green-400">{question.successRate}% success</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              onClick={handleQuestionClick}
            >
              Load More Questions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionBank;