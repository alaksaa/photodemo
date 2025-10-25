import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Send } from 'lucide-react';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';

const SubmissionForm = () => {
  const { toast } = useToast();
  const { user, setAuthModalOpen } = useAuth();
  const [formData, setFormData] = useState({
    question_text: '',
    options: ['', '', '', ''],
    correct_answer: '',
    explanation: '',
    reference: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    setFormData((prev) => ({ ...prev, options: newOptions }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to submit a question.",
        variant: "destructive",
      });
      setAuthModalOpen(true);
      return;
    }

    if (!formData.question_text || !formData.explanation || !formData.correct_answer) {
      toast({
        title: "Whoops! Looks like you missed a few fields. 🧐",
        description: "Please fill out all required fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from('questions').insert({
      ...formData,
      user_id: user.id,
    });

    if (error) {
      toast({
        title: "Submission Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "🚀 Submission Received!",
        description: "Your question has been sent for review. Good luck!",
      });
      setFormData({
        question_text: '',
        options: ['', '', '', ''],
        correct_answer: '',
        explanation: '',
        reference: '',
      });
    }
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="glass-effect rounded-2xl p-8 h-full"
    >
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Submit Your Question</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Question Text*</label>
          <textarea
            name="question_text"
            value={formData.question_text}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="e.g., What is the escape velocity of Earth?"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Options (for MCQs)</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formData.options.map((option, index) => (
              <input
                key={index}
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                className="w-full p-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder={`Option ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Correct Answer*</label>
          <input
            type="text"
            name="correct_answer"
            value={formData.correct_answer}
            onChange={handleChange}
            className="w-full p-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="Specify the correct option number or the answer itself"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Explanation*</label>
          <textarea
            name="explanation"
            value={formData.explanation}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="Provide a detailed explanation for the solution."
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Reference</label>
          <input
            type="text"
            name="reference"
            value={formData.reference}
            onChange={handleChange}
            className="w-full p-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="e.g., 'Concepts of Physics by H.C. Verma, Page 123'"
          />
        </div>
        <div className="pt-2">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg"
          >
            <Send className="w-5 h-5 mr-2" />
            {isSubmitting ? 'Submitting...' : 'Submit for Review'}
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default SubmissionForm;