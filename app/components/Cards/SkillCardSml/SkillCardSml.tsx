'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const SkillCardSml = ({ card, width = 40, height = 40, i } : { card: { skill: string, icon: any }, width?: number, height?: number, i: number }) => {
  const { skill, icon } = card
  return (
    <motion.div 
      className='h-full w-full rounded-lg bg-[var(--color-card)] backdrop-blur-sm flex items-center justify-center hover p-1'
      whileInView={{ opacity: [0,1]}}
      transition={{ duration: 0.5, delay: 0.1*i/2 }}
    >
      <Image src = {icon} height={height} width={width} alt = {`${skill} logo`} /> 
    </motion.div>
  )
}

export default SkillCardSml