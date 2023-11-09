'use client'

import React, { useState } from 'react'

import styles from './Carousel.module.scss'
import CarouselItem from './CarouselItem/CarouselItem'

const Carousel = ({ images } : { images: any[] }) => {
  const [index, setIndex] = useState(0)

  return (
    <div className= {styles.container}>
      <div className= {styles.inner} style = {{transform: `translateX(-${index*100}%)`}}>
        {images.map((image, i) => (
          <CarouselItem image = {image} key = {i} />
        ))}
      </div>

    </div>
  )
}

export default Carousel