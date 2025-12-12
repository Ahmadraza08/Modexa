import React, { useState, useEffect } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/Newsletter'
import { motion } from 'framer-motion'

const About = () => {

  return (
      <div>
        {/* About Us Section */}
        <motion.div 
          className='text-2xl text-center pt-8 border-t'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title text1={'ABOUT'} text2={'US'} />
        </motion.div>

        <motion.div 
          className='my-10 flex flex-col md:flex-row gap-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={assets.about_img} className='w-full rounded-3xl shadow-2xl shadow-gray-400 md:max-w-[450px]' alt="Modexa Interior Studio" />

          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>MODEXA INTERIOR was founded with a passion for creating stunning, modern, and functional interior designs. Our mission is to transform homes and offices into bespoke living and working spaces that reflect your unique style and taste.</p>
            
            <p>Since our inception, we have completed numerous residential and commercial projects, including bedrooms, lounges, kitchens, offices, and bathrooms. Our team sources high-quality materials and designs to ensure every project combines elegance, functionality, and durability.</p>
            
            <b className='text-gray-800'>Our Mission</b>
            <p>At MODEXA INTERIOR, our mission is to deliver exceptional interior design solutions that merge aesthetics with practicality. We provide a seamless experience from concept design to project completion, ensuring every space we create enhances comfort, beauty, and functionality.</p>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div 
          className='text-xl py-4'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </motion.div>

        <motion.div 
          className='flex flex-col md:flex-row text-sm mb-20'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Expert Interior Designers:</b>
            <p className='text-gray-600'>Our experienced team crafts bespoke interiors tailored to your lifestyle, ensuring every design is both modern and timeless.</p>
          </div>

          <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Personalized Solutions:</b>
            <p className='text-gray-600'>We understand your vision and work closely with you to bring your dream interiors to life, from concept sketches to final execution.</p>
          </div>

          <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>High-Quality Materials:</b>
            <p className='text-gray-600'>We source premium materials and furnishings to ensure each project is durable, functional, and exudes luxury.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <NewsletterBox />
        </motion.div>
      </div>
  )
}

export default About
