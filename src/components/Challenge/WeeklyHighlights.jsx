import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';

const WeeklyHighlights = () => {
  const { toast } = useToast();
  const [highlights, setHighlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHighlights = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('questions')
        .select(`
          id,
          question_text,
          profiles:user_id ( username )
        `)
        .eq('status', 'approved')
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) {
        console.error('Error fetching highlights:', error);
      } else {
        setHighlights(data);
      }
      setLoading(false);
    };

    fetchHighlights();
    
    const channel = supabase
      .channel('realtime:public:questions')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'questions' }, (payload) => {
        fetchHighlights();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };

  }, []);

  const handleHighlightClick = () => {
    toast({
      title: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "Approved questions will appear in the main question bank soon.",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          This Week's Highlights
        </h2>
        <p className="text-lg text-gray-400">
          Check out the top-rated questions from our community this week.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-48">
          <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * index }}
              whileHover={{ y: -8, scale: 1.03 }}
              onClick={handleHighlightClick}
              className="glass-effect rounded-2xl p-6 cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors truncate">
                  {item.question_text}
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                Submitted by <span className="font-semibold text-cyan-400">{item.profiles?.username || 'Anonymous'}</span>
              </p>
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                  New Submission
                </span>
                <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-white">
                  View
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default WeeklyHighlights;