"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "./Timeline.module.scss";
import { TimelineSection } from "@/app/lib/types";

export const TimelineBar = ({ i, hover }: { i: number; hover: number }) => {
  return (
    <div className={`${styles.bar} ${hover === i ? styles.hover : ""} hover`} />
  );
};

export const TimelineCircle = ({
  section,
  i,
  hover,
}: {
  section: TimelineSection;
  hover: number;
  i: number;
}) => {
  return (
    <div className={`${styles.activity}`}>
      <h4>{section.year}</h4>
      <div
        className={`${styles.circle} ${hover === i ? styles.hover : ""}`}
      ></div>
      <h5>{section.activity}</h5>
    </div>
  );
};

const Timeline = ({ timeline }: { timeline: TimelineSection[] }) => {
  const [hover, setHover] = useState(-1);
  const [animateDescription, setAnimateDescription] = useState({})

  const handleHoverStart = (i: number) => {
    setHover(i)
    
    setAnimateDescription({ opacity: [0, 1]})
  }

  const handleHoverEnd = () => {
    setAnimateDescription({ opacity: [1, 0]})

    setTimeout(() => {
      setHover(-1)
    }, 500);
  }

  return (
    <div className={styles.container}>
      {timeline.map((section, i) => (
        <motion.div
          className={`${styles.section}`}
          onMouseEnter={() => handleHoverStart(i)}
          onMouseLeave={() => handleHoverEnd()}
          whileInView={{opacity: [0,1], x: [-10,0] }}
          transition={{ duration: 0.5, delay: 0.1*i}}
        >
          <TimelineCircle section={section} hover={hover} i={i} />
          <TimelineBar i={i} hover={hover} />

          {hover === i && (
            <motion.div className={styles.description} animate = {animateDescription} initial = {{opacity: 0}} transition={{ duration: 0.5 }}>
              <p>{section.description}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
