import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const MockTests = () => {
  const { toast } = useToast();

  const tests = [
    {
      id: 1,
      title: 'JEE Advanced Physics Mock Test #1',
      questions: 60,
      duration: 180,
      difficulty: 'Expert',
      attempted: true,
      score: 85
    },
    {
      id: 2,
      title: 'NEET Physics Practice Test',
      questions: 45,
      duration: 120,
      difficulty: 'Advanced',
      attempted: false,
      score: null
    },
    {
      id: 3,
      title: 'Mechanics Mastery Challenge',
      questions: 30,
      duration: 90,
      difficulty: 'Hard',
      attempted: true,
      score: 92
    },
    {
      id: 4,
      title: 'Electromagnetism Speed Test',
      questions: 40,
      duration: 100,
      difficulty: 'Advanced',
      attempted: false,
      score: null
    }
  ];

  const handleTestClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="mock-tests" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Mock Tests & Assessments
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Test your knowledge with timed assessments and track your progress
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {tests.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-effect rounded-xl p-6 cursor-pointer"
                onClick={handleTestClick}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold">{test.title}</h3>
                  {test.attempted && (
                    <div className="flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                      <Award className="w-4 h-4" />
                      <span>{test.score}%</span>
                    </div>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Target className="w-4 h-4" />
                    <span>{test.questions} Questions</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{test.duration} Minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-orange-400" />
                    <span className="text-orange-400">{test.difficulty}</span>
                  </div>
                </div>

                <Button
                  className={`w-full ${
                    test.attempted
                      ? 'bg-slate-700 hover:bg-slate-600'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'
                  }`}
                  onClick={handleTestClick}
                >
                  {test.attempted ? 'Review Test' : 'Start Test'}
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
            <h3 className="text-2xl font-bold mb-6 text-center">Your Performance Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">12</div>
                <div className="text-gray-400">Tests Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">87%</div>
                <div className="text-gray-400">Average Score</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">24h</div>
                <div className="text-gray-400">Total Practice Time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MockTests;