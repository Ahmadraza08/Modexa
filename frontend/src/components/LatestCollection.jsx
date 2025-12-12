import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StatCard = ({ label, value }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    let started = false;

    ScrollTrigger.create({
      trigger: cardRef.current,
      start: "bottom bottom", // Jab element viewport me aaye tab trigger
      onEnter: () => {
        if (started) return;
        started = true;

        let start = 0;
        const end = value;
        const duration = 1500;
        const step = Math.max(20, Math.floor(duration / end));

        let timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start === end) clearInterval(timer);
        }, step);
      }
    });
  }, [value]);

  return (
    <div ref={cardRef} className="text-center  stat-item">
      <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
        {count}+
      </h1>
      <p className="text-gray-600 text-sm md:text-base mt-2">{label}</p>
    </div>
  );
};

const StatCards = ({ label, value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const step = Math.max(20, Math.floor(duration / end));

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
        {count}+
      </h1>
      <p className="text-gray-600 text-sm md:text-base mt-2">{label}</p>
    </div>
  );
};

const LatestCollection = () => {
  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-20 items-center">

        <StatCard label="Years of Experience" value={5} />
        <StatCard label="Projects Completed" value={100} />
        <StatCard label="Happy Clients" value={90} />
        {/* <StatCard label="Awards & Recognition" value={12} /> */}

      </div>
    </div>
  );
};

export default LatestCollection;
