"use client";

import React, { use, useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./CircleOfFifths.module.scss";

import Note from "./Note";
import { QuadrantType } from "@/app/lib/types";

const Quadrant = ({
  quadrandt,
  i,
  rotationSpeed,
}: {
  quadrandt: QuadrantType;
  i: number;
  rotationSpeed: number;
}) => {
  const [rotation, setRotation] = useState((360 * i) / 3 - 15);
  const [hover, setHover] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the rotation state by a certain angle (e.g., 10 degrees)
      setRotation((prevRotation) => prevRotation + (i / 2 + 1) * rotationSpeed);
    }, 210); // Adjust the interval time (in milliseconds) as needed

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [rotationSpeed]);

  const handleHoverStart = () => {
    setHover(true);
  };

  const handleClick = () => {
    setRotation(rotation * -0.001);
  };

  const renderBgColor = (i: number) => {
    if (i === 5) {
      return "var(--color-lilac)";
    } else if (i === 1) {
      return "var(--color-green)";
    } else if (i === 2) {
      return "var(--color-red)";
    } else if (i === 3) {
      return "var(--color-blue)";
    } else if (i === 4) {
      return "var(--color-yellow)";
    } else if (i === 0) {
      return "#efdecd";
    }
  };

 useEffect(() => {
  if(hover){
    setBgColor(renderBgColor(i)!)
  } else {
    setBgColor('transparent')
  }
 }, [hover])

//  useEffect(() => {

//   const intervalId = setInterval(() => {
//     // Update the rotation state by a certain angle (e.g., 10 degrees)
//     if(rotationSpeed > 1){
//       setBgColor(renderBgColor(i))
  
//       setTimeout(() => {
//         setBgColor('transparent')
//       }, 1000);
//     }
//   }, 1000); // Adjust the interval time (in milliseconds) as needed

//   // Cleanup function to clear the interval when the component unmounts
//   return () => clearInterval(intervalId);
 
//  }, [rotationSpeed])

  return (
    <motion.div
      className={styles.quadrant}
      style={{
        transform: `rotate(${i % 2 === 0 ? rotation : rotation}deg)`,
        // background: hover ? renderBgColor(i) : "transparent",
        background: bgColor
      }}
      onMouseEnter={() => handleHoverStart()}
      onMouseLeave={() => setHover(false)}
      // onClick={handleClick}
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delay: i * 0.15 }}
      initial={{ opacity: 0 }}
    >
      {Object.values(quadrandt).map((note, i) => (
        <Note note={note} i={i} key={i} />
      ))}
    </motion.div>
  );
};

export default Quadrant;
