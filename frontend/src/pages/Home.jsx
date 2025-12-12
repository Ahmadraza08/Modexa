import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import Newsletter from "../components/Newsletter";
import LoadingWrapper from "../components/LoadingWrapper";
import { motion } from "framer-motion";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [animateContent, setAnimateContent] = useState(false);

  useEffect(() => {
    const loaderShown = sessionStorage.getItem("loaderShown");
    if (!loaderShown) {
      setLoading(true);
      sessionStorage.setItem("loaderShown", "true");

      const timer = setTimeout(() => {
        setLoading(false);
        setAnimateContent(true); // Play animation only after loader
      }, 3000); // Loader duration

      return () => clearTimeout(timer);
    } else {
      // If loader already shown, show content directly without animation
      setAnimateContent(false);
    }
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { staggerChildren: 0.3, ease: "easeOut" } 
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const Content = (
    <>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <Newsletter />
    </>
  );

  return (
    <LoadingWrapper isLoading={loading}>
      {!loading && animateContent ? (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="overflow-hidden"
        >
          <motion.div variants={item}><Hero /></motion.div>
          <motion.div variants={item}><LatestCollection /></motion.div>
          <motion.div variants={item}><BestSeller /></motion.div>
          <motion.div variants={item}><OurPolicy /></motion.div>
          <motion.div variants={item}><Newsletter /></motion.div>
        </motion.div>
      ) : (
        !loading && Content // show content directly without animation
      )}
    </LoadingWrapper>
  );
};

export default Home;
