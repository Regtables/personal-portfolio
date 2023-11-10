import React from 'react'

import styles from './CircleOfFifths.module.scss'
import { QuadrantType } from '@/app/lib/types'

import Quadrant from './Quadrant'

const Circle = ({ quadrandts } : { quadrandts: QuadrantType[] }) => {
  return (
    <div className= {styles.circle}>
      {quadrandts.map((quadrandt, i) => (
        <Quadrant quadrandt={quadrandt} i = {i} key={i} />
      ))}
    </div>
  )
}

export default Circle