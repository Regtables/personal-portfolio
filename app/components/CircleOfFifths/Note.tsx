import React from 'react'
import { motion } from 'framer-motion'

import styles from './CircleOfFifths.module.scss'

const Note = ({ note, i } : { note: string, i: number }) => {
  return (
    <div className= {styles.note}>
      {/* {`<3`} */}
    </div>
  )
}

export default Note