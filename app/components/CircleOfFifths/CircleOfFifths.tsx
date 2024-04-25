import React, { useState } from 'react'

import styles from './CircleOfFifths.module.scss'
import Circle from './Circle'

const QUADRANDTS = [
  {
    major: 'C',
    minor: 'Am',
    // something: 'cool'
  },
  {
    major: 'G',
    minor: 'Em',
    // something: 'cool'
  },
  {
    major: 'D',
    minor: 'Bm',
    // something: 'cool'
  },
  {
    major: 'A',
    minor: 'F#m',
    // something: 'cool'
  },
  {
    major: 'E',
    minor: 'C#m',
    // something: 'cool'
  },
  {
    major: 'B/Cb',
    minor: 'G#m',
    // something: 'cool'
  },
  // {
  //   major: 'Gb/F#',
  //   minor: 'Ebm'
  // },
  // {
  //   major: 'Db/C#',
  //   minor: 'Bbm'
  // },
  // {
  //   major: 'Ab',
  //   minor: 'Fm'
  // },
  // {
  //   major: 'Eb',
  //   minor: 'Cm'
  // },
  // {
  //   major: 'Bb',
  //   minor: 'Gm'
  // },
  // {
  //   major: 'F',
  //   minor: 'Dm'
  // },
]

const CircleOfFifths = () => {
  const [rotationSpeed, setRotationSpeed] = useState(1)

  const handleActivate = () => {
    console.log('activating')
    setRotationSpeed(rotationSpeed * 6)

    setTimeout(() => {
      setRotationSpeed(1)
    }, 4000);
  }

  return (
    <div className= {styles.container} onClick={handleActivate}>
      <Circle quadrandts={QUADRANDTS} rotationSpeed={rotationSpeed} />
    </div>
  )
}

export default CircleOfFifths