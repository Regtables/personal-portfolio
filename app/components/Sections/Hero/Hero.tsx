"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, GitHub } from "react-feather";

import { useSection } from "@/app/context/SectionContext";
import styles from './Hero.module.scss'

import ButtonPrimary from "../../Buttons/ButtonPrimary";
import CircleOfFifths from "../../CircleOfFifths/CircleOfFifths";

const Hero = () => {
  const { handleNavHover } = useSection();
  const [toggleForm, setToggleForm] = useState(false)
  const [animateText, setAnimateText] = useState({})

  const variants = {
    inView: {
      x: [-50, 0],
      opacity: [0,1],
    },
    outOfView: {
      x: -50,
      opacity: [1, 0]
    },
  };

  const inViewVariants = {
    x: [-50, 0],
    opacity: [0, 1],
  };

  const outOfViewVariants = {
    x: -50,
    opacity: [1, 0],
  };

  const onClickVariants = {
    outOfView: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const iconProps = {
    size: 20,
    className: "cursor-pointer",
  };

  const handleContactClick = () => {
    console.log('getting in contact')
    setToggleForm(true)

    const heading = document.getElementById('heading')

    heading?.classList.add(styles.exit)
    console.log(heading)


    // setAnimateText({ x: -100, opacity: 0 })
  }

  return (
    <div className="pt-48 flex items-center justify-between w-full h-full">
      <div className="flex-[0.65]">
        <motion.h1
          variants={variants}
          // // initial = 'inView'
          // animate = {animateText}
          whileInView={'inView'}
          // className="text-[36px] font-[600]"
          className= {styles.heading}
          transition={{ duration: 0.5, delay: 0 }}
          id = 'heading'
          initial = {{opacity: 0, x: -50 }}
        >
          Hi, welcome to my developer portofolio.
        </motion.h1>

        <motion.h3
          className="pt-6 font-[500] w-[80%]"
          animate = {toggleForm && 'outOfView'}
          variants={variants}
          whileInView={"inView"}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          It has been a great pleasure to learn how to code and build modular
          web applications. This page is intented to showcase that journey, and
          to demonstrate the passion I have for my craft.
        </motion.h3>

        <motion.h4
          className="pt-6 font-[700]"
          animate = {toggleForm ? 'outOfView' : 'inView'}
          variants={variants}
          whileInView={"inView"}
          transition={{ duration: 0.3, delay: 0.25 }}
        >
          Please enjoy, and click everything.
        </motion.h4>

        <motion.p
          className="pt-2 font-[500]"
          animate = {toggleForm ? 'outOfView' : 'inView'}
          variants={variants}
          whileInView={"inView"}
          transition={{ duration: 0.3, delay: 0.35 }}
        >
          -Reg
        </motion.p>

        <motion.div
          className="pt-10"
          animate = {toggleForm ? 'outOfView' : 'inView'}
          onMouseEnter={() => handleNavHover("contact")}
          onMouseLeave={() => handleNavHover("home")}
          variants={variants}
          whileInView={"inView"}
          transition={{ duration: 0.3, delay: 0.45 }}
          onClick={handleContactClick}
        >
          <ButtonPrimary text="lets talk" color="var(--color-purple)" />
        </motion.div>

        <motion.div
          className="pt-6 flex gap-3"
          variants={variants}
          animate = {toggleForm ? 'outOfView' : 'inView'}
          whileInView={"inView"}
          transition={{ duration: 0.3, delay: 0.55 }}
        >
          <Instagram {...iconProps} />

          <GitHub {...iconProps} />
        </motion.div>
      </div>

      <div className="flex-[0.35]">
        <CircleOfFifths />
      </div>
    </div>
  );
};

export default Hero;
