'use client'

import React from 'react'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import { client } from '@/app/lib/sanity'

const CarouselItem = ({ image } : { image: any }) => {
  const { src, loader }: any = useNextSanityImage(client, image)
  return (
    <div className='relative h-full w-full min-w-full'>
      <Image src = {src} loader = {loader} fill className='object-cover rounded' alt = 'Photo of Reghardt Pienaar' />
    </div>
  )
}

export default CarouselItem