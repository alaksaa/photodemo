import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Award, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';

const Courses = () => {
  const { toast } = useToast();
  const [courses] = useState([
    {
      id: 1,
      title: 'Classical Mechanics',
      description: 'Master Newton\'s laws, energy, momentum, and rotational dynamics',
      progress: 65,
      duration: '12 weeks',
      level: 'Advanced',
      image: 'Newtonian physics visualization with orbiting planets and force vectors'
    },
    {
      id: 2,
      title: 'Electromagnetism',
      description: 'Explore electric fields, magnetic forces, and Maxwell\'s equations',
      progress: 40,
      duration: '10 weeks',
      level: 'Advanced',
      image: 'Electromagnetic field lines and wave propagation visualization'
    },
    {
      id: 3,
      title: 'Quantum Mechanics',
      description: 'Dive into wave functions, uncertainty principle, and quantum states',
      progress: 20,
      duration: '14 weeks',
      level: 'Expert',
      image: 'Quantum wave function and particle-wave duality illustration'
    },
    {
      id: 4,
      title: 'Thermodynamics',
      description: 'Understand heat, entropy, and the laws of thermodynamics',
      progress: 80,
      duration: '8 weeks',
      level: 'Intermediate',
      image: 'Heat engine diagram with energy flow and entropy visualization'
    },
    {
      id: 5,
      title: 'Optics & Waves',
      description: 'Study light behavior, interference, diffraction, and wave phenomena',
      progress: 55,
      duration: '9 weeks',
      level: 'Advanced',
      image: 'Light wave interference patterns and optical phenomena'
    },
    {
      id: 6,
      title: 'Relativity',
      description: 'Explore special and general relativity, spacetime, and gravity',
      progress: 10,
      duration: '12 weeks',
      level: 'Expert',
      image: 'Spacetime curvature and gravitational lensing visualization'
    }
  ]);

  const handleCourseClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="courses" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Physics Courses
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive curriculum designed for advanced physics students
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-xl overflow-hidden group cursor-pointer"
              onClick={handleCourseClick}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt={course.title}
                 src="https://images.unsplash.com/photo-1635251595512-dc52146d5ae8" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/80 rounded-full text-xs font-semibold">
                  {course.level}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    <span>{course.progress}% Complete</span>
                  </div>
                </div>

                <div className="mb-4">
                  <Progress value={course.progress} className="h-2" />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 group"
                  onClick={handleCourseClick}
                >
                  <span>Continue Learning</span>
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;