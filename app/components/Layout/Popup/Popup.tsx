'use client'

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./Popup.module.scss";

const Popup = ({
  children,
  toggle,
  handleToggle,
  alert
}: {
  children: any;
  toggle: boolean;
  handleToggle?: any;
  alert?: boolean
}) => {
  const content: any = useRef(null);

  const handleClickOutside = (e: any) => {
    if (handleToggle && content.current && !content.current.contains(e.target) && !alert) {
      handleToggle(false);
    }
  };

  return (
    <>
      {toggle && (
        <motion.div
          className={styles.container}
          onClick={handleClickOutside}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.2 }}
          initial={{ opacity: 0 }}
          id = {alert ? styles.alert : ''}
        >
       
            <div className={styles.content} ref={content}>
              {children}
            </div>
 
        </motion.div>
      )}
    </>
  );
};

export default Popup;
