'use client'

import React from 'react'
import { motion } from 'framer-motion'

const SkillCardMd = ({ card, i } : { card: { title: string, points: string[], icon: any }, i: number }) => {
  const { title, points, icon } = card

  return (
    <motion.div 
      className='h-full w-full rounded-lg bg-[var(--color-card)] backdrop-blur-sm p-4 flex flex-col gap-2 hover' 
      whileInView={{ opacity: [0,1] }}
      transition={{ duration: 1, delay: 0.2*i}}
    >
      <div className='flex items-center gap-1'>
        {icon}
        <h4 className='font-[600]'>{title}</h4>
      </div>

      <div>
        {points.map((point, i) => (
          <h5 className='text-[14px] font-[300]'>-{point}</h5>
        ))}
      </div>
    </motion.div>
  )
}

export default SkillCardMd