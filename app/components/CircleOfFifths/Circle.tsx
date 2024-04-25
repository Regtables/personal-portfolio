import React, { FC } from 'react'

import styles from './CircleOfFifths.module.scss'
import { QuadrantType } from '@/app/lib/types'

import Quadrant from './Quadrant'

interface CircleProps {
  quadrandts: QuadrantType[]
  rotationSpeed: number
}

const Circle:FC<CircleProps> = ({ quadrandts, rotationSpeed }) => {
  return (
    <div className= {styles.circle}>
      {quadrandts.map((quadrandt, i) => (
        <Quadrant quadrandt={quadrandt} i = {i} key={i} rotationSpeed={rotationSpeed} />
      ))}
    </div>
  )
}

export default Circle