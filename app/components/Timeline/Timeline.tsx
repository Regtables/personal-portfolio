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

  const childVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  }

  return (
    <div className={styles.container}>
      {timeline.map((section, i) => (
        <motion.div
          className={`${styles.section}`}
          onHoverStart={() => setHover(i)}
          onHoverEnd={() => setHover(-1)}
          whileInView={{ opacity: [0, 1], x: [-10, 0] }}
          transition={{ duration: 0.5, delay: 0.1 * i }}
        >
          <TimelineCircle section={section} hover={hover} i={i} />
          <TimelineBar i={i} hover={hover} />

      
          <motion.div
            variants={childVariants}
            className={styles.description}
            animate={hover === i ? 'visible' : 'hidden'}
            transition={{ duration: 0.5 }}
          >
            <p>{section.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
