"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import styles from "./Timeline.module.scss";
import { TimelineSection } from "@/app/lib/types";
import { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const containerRef:any = useRef(null)

  const handleClick = (i?: number, e?:any) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target)
    ) {
      setHover(-1)
    } else {
      if (i! >= 0) {
        setHover(i!);
      } else if (!i) {
        setHover(-1);
      } else {
        setHover(i);
    }
    }
  
  };

  const childVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <div className={styles.container} ref={containerRef} onClick={(e) => handleClick(undefined, e)}>
      {timeline.map((section, i) => (
        <motion.div
          className={`${styles.section}`}
          whileInView={{ opacity: [0, 1], x: [-10, 0] }}
          transition={{ duration: 0.5, delay: 0.1 * i }}
          onHoverStart={!isMobile ? () => setHover(i) : () => {}}
          onHoverEnd={!isMobile ? () => setHover(-1) : () => {}}
          onClick={isMobile ? (e) => handleClick(i, e) : () => {}}
          initial={{ opacity: 0, x: -10 }}
          key={i}
        >
          <motion.div className="flex flex-col lg:flex-row lg:items-center w-full h-full items-center">
            <TimelineCircle section={section} hover={hover} i={i} />
            <TimelineBar i={i} hover={hover} />
          </motion.div>

          <motion.div
            variants={childVariants}
            className={styles.description}
            animate={hover === i ? "visible" : "hidden"}
            initial = "hidden"
            transition={{ duration: 0.5 }}
            onClick={(e) => handleClick(undefined, e)}
          >
            <p>{section.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
