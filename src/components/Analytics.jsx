import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Clock, Award } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Analytics = () => {
  const { toast } = useToast();

  const stats = [
    {
      label: 'Average Speed',
      value: '2.5 min/question',
      change: '+12%',
      icon: Clock,
      color: 'cyan'
    },
    {
      label: 'Accuracy Rate',
      value: '87%',
      change: '+5%',
      icon: Target,
      color: 'green'
    },
    {
      label: 'Study Streak',
      value: '23 days',
      change: 'Record!',
      icon: Award,
      color: 'purple'
    },
    {
      label: 'Overall Progress',
      value: '68%',
      change: '+15%',
      icon: TrendingUp,
      color: 'blue'
    }
  ];

  const weakTopics = [
    { topic: 'Quantum Mechanics', score: 62, improvement: -3 },
    { topic: 'Thermodynamics', score: 71, improvement: +8 },
    { topic: 'Electromagnetism', score: 78, improvement: +12 }
  ];

  const handleAnalyticsClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="analytics" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Performance Analytics
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Track your progress and identify areas for improvement
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-xl p-6 cursor-pointer"
                onClick={handleAnalyticsClick}
              >
                <div className={`w-12 h-12 rounded-lg bg-${stat.color}-500/20 flex items-center justify-center mb-4`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                </div>
                <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                <div className="text-2xl font-bold mb-2">{stat.value}</div>
                <div className={`text-sm ${stat.change.includes('+') ? 'text-green-400' : 'text-purple-400'}`}>
                  {stat.change} from last week
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-cyan-400" />
                Focus Areas
              </h3>
              <div className="space-y-4">
                {weakTopics.map((topic, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">{topic.topic}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold">{topic.score}%</span>
                        <span className={`text-xs ${topic.improvement > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {topic.improvement > 0 ? '+' : ''}{topic.improvement}%
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${topic.score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
                Weekly Activity
              </h3>
              <div className="space-y-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                  const activity = Math.floor(Math.random() * 100);
                  return (
                    <div key={day} className="flex items-center gap-4">
                      <span className="text-sm text-gray-400 w-12">{day}</span>
                      <div className="flex-1 h-8 bg-slate-800 rounded-lg overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${activity}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                        />
                      </div>
                      <span className="text-sm font-semibold w-12 text-right">{activity}%</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;