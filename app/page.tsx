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

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
      
    }
  };


  return (
    <motion.div 
      className="App font-bold text-6xl text-center w-screen h-screen bg-[#000] uppercase flex flex-col justify-center"

      initial="hidden"
      // animate="visible"
      animate={ "visible"}
      variants={container}
      exit="hidden"
      
    >
      <div className="container ">
        {placeholderText.map((item, index) => {
          return <AnimatedText  {...item} key={index} />;
        })}
      </div>

    </motion.div>
  );
}
