"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./Popup.module.scss";

const Popup = ({
  children,
  toggle,
  handleToggle,
  alert,
}: {
  children: any;
  toggle: boolean;
  handleToggle?: any;
  alert?: boolean;
}) => {
  const content: any = useRef(null);

  console.log(toggle)

  const handleClickOutside = (e: any) => {
    if (
      handleToggle &&
      content.current &&
      !content.current.contains(e.target) &&
      !alert
    ) {
      handleToggle(false);
    }
  };

  return (
    <AnimatePresence>
      {toggle && (
        <motion.div
          className={styles.container}
          onClick={handleClickOutside}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
          id={alert ? styles.alert : ""}
          exit={{ opacity: 0 }}
        >
          <motion.div whileInView={{ opacity: [0,1], y: [10, 0]}} transition = {{ duration: 0.5 }} exit={{ y: 10, opacity: 0 }} className={styles.content} ref={content}>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
