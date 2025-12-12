import React, { useState, useEffect, useRef } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/Newsletter';
import LoadingWrapper from '../components/LoadingWrapper';
import { gsap } from 'gsap';

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const contentRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200); // minimal delay for loader
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && contentRef.current) {
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
      });
    }
  }, [loading]);

  return (
    <LoadingWrapper isLoading={loading}>
      <div ref={contentRef} className="px-4 md:px-16">
        {/* Title */}
        <div className='text-center text-2xl pt-10 border-t mb-12'>
          <Title text1={'CONTACT'} text2={'US'} />
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-28">
          {/* Social Media */}
          <div className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <p className="text-gray-600 mb-2">
              Instagram: <a href="https://www.instagram.com/modexa.interiors/" className="text-amber-900 hover:underline">@modexa.interiors</a>
            </p>
            <p className="text-gray-600">
              Facebook: <a href="https://www.facebook.com/people/Modexa-Interior/61584910341532/#" className="text-amber-900 hover:underline">Modexa Interior</a>
            </p>
          </div>

          {/* Contact Details */}
          <div className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-2">Whatsapp: +92 210 2794546</p>
            <p className="text-gray-600">Email: <a href="mailto:modexainterior@gmail.com" className="text-amber-900 hover:underline">modexainterior@gmail.com</a></p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-20">
          <NewsletterBox />
        </div>
      </div>
    </LoadingWrapper>
  );
};

export default Contact;
