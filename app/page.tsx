"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import React, { useState } from "react";

export default function Home() {


  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "Outfit Selections" },
    {
      type: "heading1",
      text: "with Mirror Reflections."
    }
  ];

  const [isVisible, setIsVisible] = useState(true);

  const container = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };


  return (
    <motion.div 
      className="App font-bold text-6xl text-center w-screen h-screen bg-[#000] uppercase flex flex-col justify-center"

      initial="hidden"
      // animate="visible"
      animate={isVisible ? "visible" : "hidden"}
      variants={container}
      exit="hidden"
      
    >
      <div className="container ">
        {placeholderText.map((item, index) => {
          return <AnimatedText  {...item} key={index} onAnimationComplete={() => setIsVisible(false)}/>;
        })}
      </div>

    </motion.div>
  );
}
