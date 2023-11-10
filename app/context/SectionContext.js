"use client";

import React, { useState, useContext, createContext } from "react";

const SectionContext = createContext();

export const SectionProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState("hero");
  const [bannerColor, setBannerColor] = useState();

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
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  return useContext(SectionContext);
};
