import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setProgress(progress);

      setVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  if (!visible) return null; 

  return (
    <button
      aria-label="scroll to top"
      onClick={handleScrollTop}
      className="w-14 z-99 h-14 fixed left-7 bottom-7 flex justify-center items-center rounded-full bg-transparent group"
    >
      <svg className="absolute -rotate-90" width="60" height="60">
        <circle
          stroke="#e5e7eb" 
          fill="transparent"
          strokeWidth="4"
          r={radius}
          cx="30"
          cy="30"
        />
        <circle
          stroke="#3b82f6" 
          fill="transparent"
          strokeWidth="4"
          r={radius}
          cx="30"
          cy="30"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.2s ease-out" }}
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 text-blue-600 relative z-10 group-hover:-translate-y-1 transition-transform"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
