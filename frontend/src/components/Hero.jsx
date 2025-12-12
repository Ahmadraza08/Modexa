import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative w-full min-h-[600px] h-auto flex flex-col items-center justify-start pt-20 overflow-hidden">

      {/* Big Modern Text */}
      <motion.div 
        className="w-full px-4 flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="prata-regular text-6xl sm:text-6xl lg:text-8xl black">
          Design<span className="prata-regular text-white bg-black px-2">ing Dreams</span>
        </h1>

        <h1 className="prata-regular text-3xl sm:text-4xl lg:text-7xl mt-5 mb-8">
          into Reality
        </h1>
      </motion.div>

      {/* Videos Row Responsive */}
      <div className="flex flex-col md:flex-row w-full max-w-[1200px] justify-center gap-4 px-4 items-center mt-10">
        {[assets.video1, assets.video2, assets.video3].map((vid, index) => (
          <motion.video
            key={index}
            className="w-full md:w-1/3 h-[20vh] md:h-[35vh] lg:h-[70vh] object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-500"
            src={vid}
            autoPlay
            loop
            muted
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 * index }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
