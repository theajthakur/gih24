import React, { useState } from "react";
import { motion } from "framer-motion";
import "../Assets/styles/Slider.css";

const Slider = ({ slides }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate the slides array to ensure seamless looping
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Wrapping div for seamless looping */}
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex"
        animate={{
          x: ["0%", "-400%"],
          transition: {
            ease: "linear",
            duration: 26, // Adjust the duration here (in seconds)
            repeat: Infinity,
          },
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{ pointerEvents: isHovered ? "none" : "auto" }} // Disable pointer events when hovered
      >
        {/* Render duplicated slides */}
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center justify-center"
            style={{ width: `${(100 / slides.length) * 4}%` }}
          >
            <img src={slide?.source} className="sponser-slider scale-75" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
