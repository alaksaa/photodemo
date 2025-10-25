import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLeaderboard = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('profiles')
      .select('username, points')
      .order('points', { ascending: false })
      .limit(5);

    if (error) {
      console.error('Error fetching leaderboard:', error);
    } else {
      const rankedData = data.map((user, index) => {
        let icon = null;
        let color = 'text-cyan-400';
        if (index === 0) { icon = Trophy; color = 'text-yellow-400'; }
        if (index === 1) { icon = Award; color = 'text-gray-300'; }
        if (index === 2) { icon = Star; color = 'text-orange-400'; }
        return { ...user, rank: index + 1, icon, color };
      });
      setLeaderboardData(rankedData);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLeaderboard();
    
    const channel = supabase
      .channel('realtime:public:profiles')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'profiles' }, (payload) => {
        fetchLeaderboard();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="glass-effect rounded-2xl p-8 h-full"
    >
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Trophy className="w-8 h-8 text-yellow-400" />
        Leaderboard
      </h2>
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
        </div>
      ) : (
        <div className="space-y-4">
          {leaderboardData.map((user, index) => (
            <motion.div
              key={user.rank}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex items-center justify-between p-3 rounded-lg bg-slate-900/40"
            >
              <div className="flex items-center gap-4">
                <span className={`text-xl font-bold w-6 text-center ${user.color || 'text-cyan-400'}`}>
                  {user.rank}
                </span>
                <div className="flex items-center gap-2">
                  {user.icon && <user.icon className={`w-5 h-5 ${user.color}`} />}
                  <span className="font-semibold">{user.username}</span>
                </div>
              </div>
              <span className="font-bold text-cyan-400">{user.points} pts</span>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Leaderboard;