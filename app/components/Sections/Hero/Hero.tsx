import React from 'react'
import ButtonPrimary from '../../Buttons/ButtonPrimary'
import CircleOfFifths from '../../CircleOfFifths/CircleOfFifths'

const Hero = () => {
  return (
    <div className='pt-48 flex items-center justify-between w-full'>
      <div className='flex-[0.65]'>
        <h1 className='text-[36px] font-[600]'>Hi, welcome to my developer portofolio.</h1>

        <h3 className='pt-6 font-[500] w-[80%]'>It has been a great pleasure to learn how to code and build modular web applications. This page is intented to showcase that journey, and to demonstrate the passion I have for my craft.</h3>

        <h4 className='pt-6 font-[700]'>Please enjoy, and click everything.</h4>

        <p className='pt-2 font-[500]'>-Reg</p>

        <div className='pt-10'>
          <ButtonPrimary text='lets talk' color='var(--color-purple)'/>
        </div>
      </div>

      <div className='flex-[0.35]'>
        <CircleOfFifths />
      </div>
    </div>
  )
}

export default Hero