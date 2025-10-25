import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const CountdownTimer = ({ deadline }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(deadline) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="text-center">
        <motion.div
          key={timeLeft[interval]}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-cyan-400"
        >
          {String(timeLeft[interval]).padStart(2, '0')}
        </motion.div>
        <div className="text-sm uppercase text-gray-400">{interval}</div>
      </div>
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
        <Clock className="w-6 h-6" />
        Submission Deadline
      </h2>
      <div className="flex justify-center gap-6 md:gap-12">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;