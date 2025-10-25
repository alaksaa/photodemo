import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import CountdownTimer from '@/components/Challenge/CountdownTimer';
import SubmissionForm from '@/components/Challenge/SubmissionForm';
import Leaderboard from '@/components/Challenge/Leaderboard';
import WeeklyHighlights from '@/components/Challenge/WeeklyHighlights';
import { motion } from 'framer-motion';

const ChallengePage = () => {
  const deadline = new Date('2025-10-30T23:59:59');

  return (
    <>
      <Helmet>
        <title>Weekly Challenge - PhotonSpace</title>
        <meta name="description" content="Participate in the PhotonSpace weekly problem challenge, submit your questions, and climb the leaderboard!" />
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
        <ParticleBackground />
        <Navigation activeSection="challenge" isHomePage={false} />

        <main className="container mx-auto px-4 py-28 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Weekly Problem Challenge
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Contribute unique physics problems, earn points, and see your questions featured in our official test series!
            </p>
          </motion.div>

          <CountdownTimer deadline={deadline} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
            <div className="lg:col-span-2">
              <SubmissionForm />
            </div>
            <div className="lg:col-span-1">
              <Leaderboard />
            </div>
          </div>
          
          <WeeklyHighlights />

        </main>

        <Footer />
      </div>
    </>
  );
};

export default ChallengePage;