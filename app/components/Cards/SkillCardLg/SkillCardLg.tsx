'use client'

import React from 'react'
import { motion } from 'framer-motion'

import { SkillCardContent } from '@/app/lib/types'

const SkillCardLg = ({ card, i } : { card: SkillCardContent, i: number }) => {
  const { icon, title, text } = card

  return (
    <motion.div 
      className='w-full h-full bg-[var(--color-card)] p-2 lg:p-4 rounded-lg flex flex-col gap-2 hover'
      whileInView={{ opacity: [0,1], x: [20, 0] }}
      transition={{ duration: 1, delay: 0.3*i}}
    >
      <div className='flex gap-2 items-center'>
        {icon}
        <h3 className='font-[600] pb-[2px] border-b-[4px] border-b-[var(--color-yellow)] flex max-w-[100px] text-[14px] lg:text-[16px]'>{title}</h3>
      </div>

      <div>
        <p className='text-[11px] lg:text-[14px] font-[300]'>{text}</p>
      </div>
    </motion.div>
  )
}

export default SkillCardLg