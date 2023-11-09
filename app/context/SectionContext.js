'use client'

import React, { useState, useContext, createContext } from 'react' 

const SectionContext = createContext()

export const SectionProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState('hero')
  const [bannerColor, setBannerColor] = useState()

  const handleBannerColorChange = (section) => {
    if (section === "home") {
      setBannerColor("var(--color-red");
    } else if (section === "work") {
      setBannerColor("var(--color-lilac");
    } else if(section === 'skills'){
      setBannerColor('var(--color-blue')
    } else if(section === 'about'){
      setBannerColor('var(--color-green)')
    } 
  };

  const handleSectionChange = (section) => {
    setCurrentSection(section)
    handleBannerColorChange(section)
  }

  const handleNavHover = (section) => {
    handleBannerColorChange(section)
  }

  return (
    <SectionContext.Provider value = {{ currentSection, handleSectionChange, bannerColor, handleNavHover }}>
      {children}
    </SectionContext.Provider>
  )
}

export const useSection = () => {
  return useContext(SectionContext)
}

