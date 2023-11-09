'use client'

import React from "react";
import { motion } from "framer-motion";

import styles from "./NavDots.module.scss";
import { useSection } from "@/app/context/SectionContext";

const NavDots = ({
  sections
}: {
  sections: any;
}) => {
  const { currentSection } = useSection()
  return (
    <>
    {currentSection !== 'home' && (
      <aside className={styles.container}>
    
        {sections.map((section: any, i: number) => (
          <motion.a href={`#${section.slug}`} key={i} whileInView={{ x: [50, 0], opacity: [0,1] }} transition={{ duration: 0.3, delay: i*0.1 }}>
            <div
              className={`${styles.dot} hover ${
                currentSection === section.slug ? styles.active : ""
              }`}
            />
          </motion.a>
        ))}
        <motion.a href={`#contact`} whileInView={{ x: [50, 0], opacity: [0,1]}} transition={{duration: 0.3, delay: 0.5 }}>
          <div
            className={`${styles.dot} ${
              currentSection === 'contact' ? styles.active : ""
            }`}
          />
        </motion.a>
      </aside>
    )}
    </>
  );
};

export default NavDots;
