import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
const About = () => {
  return <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About PhotonSpace
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Empowering the next generation of physicists
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-20" />
                <img className="relative rounded-2xl w-full h-96 object-cover" alt="Physics researcher in modern laboratory" src="https://images.unsplash.com/photo-1701848055770-effbdb148e15" />
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="space-y-6">
              <h3 className="text-3xl font-bold">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                PhotonSpace was created to revolutionize physics education by combining cutting-edge technology with proven learning methodologies. We believe that mastering physics requires not just understanding concepts, but also developing strong problem-solving skills and cognitive abilities.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our platform integrates interactive courses, extensive question banks, realistic mock tests, and innovative brain training exercises to provide a comprehensive learning experience for advanced physics students.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">10K+</div>
                  <div className="text-sm text-gray-400">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">500+</div>
                  <div className="text-sm text-gray-400">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">95%</div>
                  <div className="text-sm text-gray-400">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="glass-effect rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Meet the Creator</h3>
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <motion.div whileHover={{
              scale: 1.05
            }} className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden flex-shrink-0 border-4 border-cyan-500/50 shadow-lg shadow-cyan-500/10">
                <img class="w-full h-full object-cover" alt="Futuristic portrait of Dr. Photon Scientist" src="https://images.unsplash.com/photo-1680355466499-39701c0be79f" />
              </motion.div>
              <div className="flex-1 text-center lg:text-left">
                <h4 className="text-3xl font-bold mb-2">A. Photon </h4>
                <p className="text-cyan-400 mb-4 font-semibold">Masters in Theoretical Physics | Education Innovator</p>
                <p className="text-gray-300 mb-6 max-w-lg mx-auto lg:mx-0">With over 2 years of experience in physics research and education, I've dedicated my career to making advanced physics accessible and engaging for students worldwide.</p>
                <div className="flex gap-4 justify-center lg:justify-start">
                  <Button variant="outline" size="sm" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-white transition-all duration-300">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-white transition-all duration-300">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-white transition-all duration-300">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>;
};
export default About;