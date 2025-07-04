'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Quantum ML Research",
      image: "/assets/img/quantum-computing.jpg",
      link: "/assets/pdf/IntroToQMLandQNN.pdf"
    },
    {
      title: "AT&T Mobile App Hackathon",
      image: "/assets/img/att_hackathon.jpeg",
      link: "https://developer.att.com/blog/2017-summit-challenge-winners"
    },
    {
      title: "COVI",
      image: "/assets/img/COVI.png",
      link: "https://www.kickstarter.com/projects/thecovicompany/covi-stay-home-gain-points-earn-rewards"
    },
    {
      title: "Team Tron RL",
      image: "/assets/img/TeamTronRL.png",
      link: "/assets/pdf/TeamTronRL.pdf"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Projects
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.p 
              className="text-lg text-gray-300 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
            </motion.p>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-slate-700 border-slate-600 py-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col h-full"
                  >
                    <div className="relative flex-shrink-0 aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      {/* Desktop hover overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors">
                          <ExternalLink className="w-6 h-6" />
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 p-4 flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                      {/* Mobile link icon */}
                      <div className="md:hidden bg-blue-400/90 backdrop-blur-sm text-white p-2 rounded-full shadow-lg ml-2 flex-shrink-0">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </a>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection; 