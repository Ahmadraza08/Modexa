import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Loader = ({ onFinish }) => {
  const [count, setCount] = useState(0);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Check if loader has already been shown in this session
    const loaderShown = sessionStorage.getItem("loaderShown");
    if (!loaderShown) {
      setShowLoader(true);
      sessionStorage.setItem("loaderShown", "true");

      let current = 0;
      document.body.style.overflow = "hidden";

      const animateTo = (target, duration) => {
        const start = current;
        const range = target - start;
        const steps = 60;
        const stepTime = duration / steps;
        let step = 0;

        const interval = setInterval(() => {
          step++;
          const progress = step / steps;
          const eased = 1 - Math.pow(1 - progress, 3);
          current = Math.floor(start + eased * range);
          setCount(current);
          if (step >= steps) clearInterval(interval);
        }, stepTime);
      };

      animateTo(5, 2000);
      setTimeout(() => animateTo(90, 2000), 2000);
      setTimeout(() => {
        animateTo(99, 2000);
        setTimeout(() => {
          onFinish && onFinish();
          setShowLoader(false);
          document.body.style.overflow = "auto";
        }, 2000);
      }, 4000);

      return () => {
        clearInterval();
        document.body.style.overflow = "auto";
      };
    }
  }, [onFinish]);

  if (!showLoader) return null;

  return (
    <StyledWrapper>
      <div className="counter">
        <div className="digit">{count}%</div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: #fff;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  .counter {
    font-size: 28vh;
    font-family: prata-regular;
    font-weight: medium;
    color: #000;
  }

  .digit {
    transition: transform 0.2s ease-in-out;
  }
`;

export default Loader;
