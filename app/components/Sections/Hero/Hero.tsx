"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, GitHub, CornerDownLeft } from "react-feather";

import { useSection } from "@/app/context/SectionContext";
import styles from "./Hero.module.scss";

import ButtonPrimary from "../../Buttons/ButtonPrimary";
import CircleOfFifths from "../../CircleOfFifths/CircleOfFifths";
import Form from "../Contact/Form/Form";
import { Linkedin } from "lucide-react";

const Hero = () => {
  const { handleNavHover, handleBannerColorChange, toggleForm, setToggleForm } = useSection();
  // const [toggleForm, setToggleForm] = useState(false);
  const [animateText, setAnimateText] = useState({});

  useEffect(() => {
    onLoadAnimate();
  }, []);

  const variants = {
    inView: {
      x: [-50, 0],
      opacity: [0, 1],
    },
    outOfView: {
      x: -50,
      opacity: [1, 0],
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
    console.log("getting in contact");

    document.getElementById("heading")?.classList.add(styles.exit);

    document.getElementById("circle")?.classList.add(styles.exit_circle);

    setTimeout(() => {
      document.getElementById("text")?.classList.add(styles.exit);
    }, 100);

    setTimeout(() => {
      document.getElementById("sub")?.classList.add(styles.exit);
    }, 200);

    setTimeout(() => {
      document.getElementById("reg")?.classList.add(styles.exit);
    }, 300);

    setTimeout(() => {
      document.getElementById("button")?.classList.add(styles.exit);
    }, 400);

    setTimeout(() => {
      document.getElementById("socials")?.classList.add(styles.exit);
    }, 500);

    document.getElementById("banner")?.classList.add(styles.exit_banner);

    setTimeout(() => {
      setToggleForm(true);
    }, 800);

    setTimeout(() => {
      document.getElementById("form")?.classList.add(styles.enter_form);
    }, 900);

    handleBannerColorChange("contact");

    // setAnimateText({ x: -100, opacity: 0 })
  };

  const handleBackClick = () => {
    //exit form
    document.getElementById('form')?.classList.replace(styles.enter_form, styles.exit_form)

    setTimeout(() => {
      setToggleForm(false)
    }, 700);
  
    setTimeout(() => {
      document.getElementById('banner')?.classList.replace(styles.exit_banner, styles.enter_banner)

      document.getElementById('circle')?.classList.replace(styles.exit_circle, styles.enter_circle)

      document.getElementById('heading')?.classList.replace(styles.exit, styles.enter)
      onLoadAnimate()
    }, 800);
    //toggleForm

    //enter content
  }

  const onLoadAnimate = () => {
    document.getElementById("heading")?.classList.add(styles.enter);

    // document.getElementById('banner')?.classList.add(styles.enter_banner)

    setTimeout(() => {
      document.getElementById("text")?.classList.add(styles.enter);
    }, 100);

    setTimeout(() => {
      document.getElementById("sub")?.classList.add(styles.enter);
    }, 200);

    setTimeout(() => {
      document.getElementById("reg")?.classList.add(styles.enter);
    }, 300);

    setTimeout(() => {
      document.getElementById("button")?.classList.add(styles.enter);
    }, 400);

    setTimeout(() => {
      document.getElementById("socials")?.classList.add(styles.enter);
    }, 500);

  };

  return (
    <>
      {!toggleForm ? (
        <div className= {styles.container}>
          <div className={styles.left}>
            <h1 id="heading">Hi, welcome to my developer portofolio.</h1>

            <h3 id="text">
              It has been a great pleasure to learn how to code and build
              modular web applications. This page is intented to showcase that
              journey, and to demonstrate the passion I have for my craft.
            </h3>

            <h4 id="sub">
              Please enjoy, <span>and click everything.</span>
            </h4>

            <p id="reg">-Reg</p>

            <div
              onMouseEnter={() => handleNavHover("contact")}
              onMouseLeave={() => handleNavHover("home")}
              onClick={handleContactClick}
              className={styles.button}
              id="button"
            >
              <ButtonPrimary text="lets talk" color="var(--color-purple)" />
            </div>

            <div className={styles.socials} id="socials">
              <a href="https://www.instagram.com/eat.your.regtables/" target = '_blank' rel = 'noreferer'>
                <Instagram {...iconProps} />
              </a>

              <a href="https://github.com/Regtables" target = '_blank' rel = 'noreferer'>
               <GitHub {...iconProps} />
              </a>

              <a href="https://www.linkedin.com/in/reghardt-pienaar-617329a7/" target = '_blank' rel = 'noreferer'>
                <Linkedin {...iconProps} />
              </a>
            </div>
          </div>

          <div className={styles.right} id="circle">
            <CircleOfFifths />
          </div>
        </div>
      ) : (
        <div className={styles.form} id="form">
          <h1>What do you have in mind?</h1>

          <Form />

          <button onClick={handleBackClick}>
            back home
            <CornerDownLeft />
          </button>
        </div>
      )}
    </>
  );
};

export default Hero;
