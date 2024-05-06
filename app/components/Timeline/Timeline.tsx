"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      <div className={`${styles.circle} ${hover === i ? styles.hover : ""}`}></div>
      <h5>{section.activity}</h5>
    </div>
  );
};

const Timeline = ({ timeline }: { timeline: TimelineSection[] }) => {
  const [hover, setHover] = useState(-1);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const containerRef: any = useRef(null);

  const handleClick = (i?: number, e?: any) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setHover(-1);
    } else {
      setHover(i!);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setHover(-1);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.container} ref={containerRef}>
      {timeline.map((section, i) => (
        <motion.div
          className={`${styles.section}`}
          whileInView={{ opacity: [0, 1], x: [-10, 0] }}
          transition={{ duration: 0.5, delay: 0.1 * i }}
          onHoverStart={!isMobile ? () => setHover(i) : () => {}}
          onHoverEnd={!isMobile ? () => setHover(-1) : () => {}}
          onClick={(e) => handleClick(i, e)}
          initial={{ opacity: 0, x: -10 }}
          key={i}
        >
          <motion.div className="flex flex-col lg:flex-row lg:items-center w-full h-full items-center">
            <TimelineCircle section={section} hover={hover} i={i} />
            <TimelineBar i={i} hover={hover} />
          </motion.div>
          <AnimatePresence>
            {hover === i && (
              <motion.div
                variants={childVariants}
                className={styles.description}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3 }}
                onClick={() => setHover(-1)}
              >
                <p>{section.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;