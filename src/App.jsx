import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import ChallengePage from '@/pages/ChallengePage';
import { Toaster } from '@/components/ui/toaster';
import AuthModal from '@/components/Auth/AuthModal';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/challenge" element={<ChallengePage />} />
        </Routes>
        <AuthModal />
      </Router>
      <Toaster />
    </>
  );
}

export default App;