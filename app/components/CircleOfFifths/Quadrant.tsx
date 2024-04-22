"use client";

import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion'

import styles from "./CircleOfFifths.module.scss";

import Note from "./Note";
import { QuadrantType } from "@/app/lib/types";

const Quadrant = ({ quadrandt, i }: { quadrandt: QuadrantType; i: number }) => {
  const [rotation, setRotation] = useState(((360 * i) / 3) - 15);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the rotation state by a certain angle (e.g., 10 degrees)
      setRotation((prevRotation) => prevRotation + (i/2+ 1));
    }, 210); // Adjust the interval time (in milliseconds) as needed

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); 

  const handleHoverStart = () => {

  }

  const handleClick = () => {
    setRotation(rotation*-0.001)
  }

  return (
    <motion.div
      className={styles.quadrant}
      style={{ transform: `rotate(${i%2 === 0 ? rotation : rotation}deg)` }}
      onMouseEnter={() => handleHoverStart()}
      onClick={handleClick}
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delay: i*0.15 }}
      initial = {{ opacity: 0} }
    >
      {Object.values(quadrandt).map((note, i) => (
        <Note note={note} i={i} key={i} />
      ))}
    </motion.div>
  );
};

export default Quadrant;
