'use client'

import React from 'react'
import { motion } from 'framer-motion'

import styles from './Profile.module.scss'
import { ProfileType } from '@/app/lib/types'

import ButtonPrimary from '../Buttons/ButtonPrimary'
import Carousel from '../Carousel/Carousel'

import Instagram from '../../../public/instagram.svg'

const Profile = ({ profile } : { profile: ProfileType }) => {
  const { metrics: { name, nationality, residence, age }, bio, images } = profile

  return (
    <div className= {styles.container}>
      <motion.div className= {styles.carousel} whileInView={{ x: [-20, 0], opacity: [0,1]}} transition={{ duration: 1.5 }}>
        <Carousel images={images} />
      </motion.div>

      <motion.div className= {styles.information} whileInView={{ x: [20, 0], opacity: [0,1]}} transition={{ duration: 1.5 }}>
        <h3 className='font-[700] text-[20px]'>Profile</h3>

        <div className= {styles.bio}>
          {bio.map((para, i) => (
            <p>{para.children[0].text}</p>
          ))}
        </div>

        <div className= {styles.metrics}>
          <div className= {styles.item}>
            <p>Name</p>
            <h3>{name}</h3>
          </div>

          <div className= {styles.item}>
            <p>Nationality</p>
            <h3>{nationality}</h3>
          </div>

          <div className= {styles.item}>
            <p>Residence</p>
            <h3>{residence}</h3>
          </div>

          <div className= {styles.item}>
            <p>Age</p>
            <h3>{age}</h3>
          </div>
          
          <div className= {styles.item}>
            <p>Phone</p>
            <h3>0764548241</h3>
          </div>
          
          <div className= {styles.item}>
            <p>Email</p>
            <h3>reghardt7@gmail.com</h3>
          </div>
        </div>

        <div className= {styles.socials}>
          <img src = {Instagram.src} />
        </div>

        <div className= {styles.button}>
          <ButtonPrimary text= 'download cv' color='var(--color-lilac)' />
        </div>
      </motion.div>
    </div>
  )
}

export default Profile