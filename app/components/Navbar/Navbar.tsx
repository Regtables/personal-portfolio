"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "./Navbar.module.scss";
import { LINKS } from "../../lib/constants";
import { useSection } from "@/app/context/SectionContext";

const Navbar = () => {
  const { handleNavHover } = useSection();

  const handleHover = (link: string) => {
    handleNavHover(link);
  };

  // const handleLinkClick = (link: { link: string, slug: string }) => {
  //   const home = document.getElementById('home')
  //   const el = document.getElementById(link.link)

  //   if(home && el){
  //     const scrollPosition = home.scrollTop
  //     home!.style.overflow = 'unset'
  
  //     setTimeout(() => {
  //      el?.scrollIntoView()  
  
  //      setTimeout(() => {
  //       home!.style.overflow = 'auto'

  //       requestAnimationFrame(() => {
  //         home.scrollTop = scrollPosition;
  //       });
  //      }, 1000);
  //     }, 100);
  //   }
  // }

  return (
    <nav className={`${styles.container}`}>
      <motion.div className={styles.logo} whileInView={{ x: [-20, 0], opacity: [0,1]}} transition={{ duration: 1.5 }}>
        <h1>Regtables</h1>
      </motion.div>

      <div className={styles.links}>
        {LINKS.map((link, i) => (
          <motion.div
            className={styles.link}
            key={i}
            onMouseEnter={() => handleHover(link.link)}
            onMouseLeave={() => handleHover("")}
            whileInView={{ x: [-400, 0], opacity: [0,1] }}
            transition={{ duration: 0.4, delay: 0.1*i }}
          >
            <a href={`#${link.slug}`}>
              <h3 
                // onClick={() => handleLinkClick(link)}
              >
                {link.link}
              </h3>
            </a>
          </motion.div>
        ))}

        <motion.div
          className={styles.contact}
          whileInView={{ x: [-500, 0], opacity: [0,1] }}
          transition={{ duration: 0.5, easings: ["anticipate", "easeOut"] }}
        >
          <button>connect</button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;