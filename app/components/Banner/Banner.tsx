'use client'

import React, { useEffect, useState } from 'react'

import { useSection } from '@/app/context/SectionContext'

import styles from './Banner.module.scss'

const Banner = ({ left } : { left: boolean }) => {
  const { bannerColor } = useSection()

  return (
    <div className= {styles.container} id = {left ? styles.left : ''} style={{background: `${bannerColor}`}} />
  )
}

export default Banner