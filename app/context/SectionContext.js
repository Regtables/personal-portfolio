"use client";

import React, { useState, useContext, createContext } from "react";
import styles from '../components/Sections/Hero/Hero.module.scss'

const SectionContext = createContext();

export const SectionProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState("hero");
  const [bannerColor, setBannerColor] = useState();
  const [toggleForm, setToggleForm] = useState(false)

  const handleBannerColorChange = (section) => {
    const body = document.getElementById("body");
    
    if (section === "home") {
      setBannerColor("var(--color-red");
      body.style.backgroundColor = "var(--color-body)";
    } else if (section === "work") {
      setBannerColor("var(--color-lilac");
      body.style.backgroundColor = "var(--color-body)";
    } else if (section === "skills") {
      setBannerColor("var(--color-blue");
      body.style.backgroundColor = "var(--color-body)";
    } else if (section === "about") {
      setBannerColor("var(--color-green)");
      body.style.backgroundColor = "var(--color-body)";
    } else if (section === "contact") {
      setBannerColor("var(--color-yellow)");
      body.style.backgroundColor = "var(--color-lilac)";
    }
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

  const handleSectionChange = (section) => {
    setCurrentSection(section);
    handleBannerColorChange(section);
  };

  const handleNavHover = (section) => {
    handleBannerColorChange(section);
  };

  return (
    <SectionContext.Provider
      value={{
        currentSection,
        handleSectionChange,
        bannerColor,
        handleNavHover,
        handleBannerColorChange,
        handleContactClick,
        toggleForm,
        setToggleForm
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  return useContext(SectionContext);
};
