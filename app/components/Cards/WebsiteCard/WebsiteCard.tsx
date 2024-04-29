"use client";

import React, { useEffect, useState } from "react";
import { useNextSanityImage } from "next-sanity-image";
import { motion } from "framer-motion";
import Image from "next/image";

import { Webiste } from "@/app/lib/types";
import styles from "./WebsiteCard.module.scss";
import { client } from "@/app/lib/sanity";

import { useModal } from "@/app/context/ModalContext";

const WebsiteCard = ({ website, i }: { website: Webiste; i: number }) => {
  const { name, links, image } = website;
  const { src, loader }: any = useNextSanityImage(client, image);
  const [animate, setAnimate] = useState({});
  const [delay, setDelay] = useState(0);
  const { handleModalOpen } = useModal();

  useEffect(() => {
    const cards = document.getElementById("website-cards");

    const card = document.getElementById(`website-card-${i}`)!;

    card!.onmousemove = (e) => handleMouseMove(e);
  }, []);

  useEffect(() => {
    calcAnimation();
  }, [i]);

  const calcAnimation = () => {
    if (i === 0) {
      setAnimate({ y: [-15, 0], x: [-15, 0], opacity: [0, 1] });
      setDelay(0);
    } else if (i === 1) {
      setAnimate({ y: [-15, 0], opacity: [0, 1] });
      setDelay(0.15);
    } else if (i === 2) {
      setAnimate({ y: [-15, 0], x: [15, 0], opacity: [0, 1] });
      setDelay(0.25);
    } else if (i === 3) {
      setAnimate({ y: [15, 0], x: [-15, 0], opacity: [0, 1] });
      setDelay(0.55);
    } else if (i === 4) {
      setAnimate({ y: [15, 0], opacity: [0, 1] });
      setDelay(0.45);
    } else if (i === 5) {
      setAnimate({ y: [15, 0], x: [15, 0], opacity: [0, 1] });
      setDelay(0.35);
    }
  };

  const handleMouseMove = (e: any) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleClick = () => {
    console.log('clicking')
    handleModalOpen("workPreview", { activeWebsite: website })
  }

  return (
    <motion.div
      className={styles.container}
      whileInView={animate}
      transition={{ duration: 0.5, delay: delay }}
      id={`website-card-${i}`}
      onClick={handleClick}
      // whileHover={{ scale: [1, 0.99]}}
    >
      <div className={styles.border}></div>
      <div className={styles.content}>
        <div className={styles.name}>
          <h3>{name}</h3>
          <p>{links.url}</p>
        </div>

        <div className={styles.image}>
          <Image src={src} loader={loader} fill alt={`${name} hero`} />
        </div>
      </div>
    </motion.div>
  );
};

export default WebsiteCard;
