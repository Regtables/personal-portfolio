'use client'

import { Webiste } from "@/app/lib/types";
import React, { useEffect, useState } from "react";
import { useNextSanityImage } from "next-sanity-image";
import { motion } from 'framer-motion'

import styles from "./WebsiteCard.module.scss";
import { client } from "@/app/lib/sanity";
import Image from "next/image";

const WebsiteCard = ({ website, i }: { website: Webiste, i: number }) => {
  const { name, links, image } = website;
  const { src, loader }: any = useNextSanityImage(client, image)
  const [animate, setAnimate] = useState({})
  const [delay, setDelay] = useState(0)

  useEffect(() => {
    calcAnimation()
  }, [i])

  const calcAnimation = () => {
    if(i === 0){
      setAnimate({ y: [-15, 0], x: [-15, 0], opacity: [0,1]})
      setDelay(0)
    } else if(i === 1){
      setAnimate({ y: [-15, 0], opacity: [0,1]})
      setDelay(0.15)
    } else if(i === 2){
      setAnimate({ y: [-15, 0], x: [15, 0], opacity: [0,1]})
      setDelay(0.25)
    } else if(i === 3){
      setAnimate({ y: [ 15, 0], x: [-15, 0], opacity: [0, 1]})
      setDelay(0.55)
    } else if(i === 4){
      setAnimate({ y: [ 15, 0], opacity: [0, 1]})
      setDelay(0.45)
    } else if(i === 5){
      setAnimate({ y: [ 15, 0], x: [15, 0], opacity: [0, 1]})
      setDelay(0.35)
    }
  } 

  return (
    <motion.div className={styles.container} whileInView ={animate} transition={{ duration: 0.5, delay: delay }}>
      <div className={styles.content}>
        <div className= {styles.name}>
          <h3>{name}</h3>
          <p>{links.url}</p>
        </div>

        <div className= {styles.image}>
          <Image src={src} loader={loader} fill alt = {`${name} hero`}/>
        </div>
      </div>
    </motion.div>
  );
};

export default WebsiteCard;
