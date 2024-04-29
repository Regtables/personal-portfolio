"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "./NavDots.module.scss";
import { useSection } from "@/app/context/SectionContext";

const NavDots = ({ sections }: { sections: any }) => {
  const { currentSection } = useSection();
  const [hover, setHover] = useState(false);

  const parentVariants = {
    hover: {
      gap: "20px",
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      x: 10,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.aside
      className={`${styles.container}`}
      variants={parentVariants}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      whileHover="hover"
      transition={{ duration: 0.1, delay: 0 }}
      id="nav-dots"
    >
      <motion.a
        href={`#home`}
        whileInView={{ x: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.3, delay: 0 }}
        className={styles.dot_container}
      >
        <motion.p
          variants={childVariants}
          animate={hover ? "visible" : "hidden"}
          transition={{ duration: 0.4, delay: 0 }}
        >
          home
        </motion.p>

        <div
          className={`${styles.dot} ${
            currentSection === "home" ? styles.active : ""
          } hover`}
        />
      </motion.a>
      {sections.map((section: any, i: number) => (
        <motion.a
          href={`#${section.slug}`}
          className={styles.dot_container}
          key={i}
        >
          <motion.p
            variants={childVariants}
            animate={hover ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: 0.1 * i }}
          >
            {section.link}
          </motion.p>

          <div
            className={`${styles.dot} hover ${
              currentSection === section.slug ? styles.active : ""
            }`}
          />
        </motion.a>
      ))}
      <motion.a
        href={`#contact`}
        whileInView={{ x: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className={styles.dot_container}
      >
        <motion.p
          variants={childVariants}
          animate={hover ? "visible" : "hidden"}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          contact
        </motion.p>

        <div
          className={`${styles.dot} ${
            currentSection === "contact" ? styles.active : ""
          } hover`}
        />
      </motion.a>
    </motion.aside>
  );
};

export default NavDots;
