import React from 'react'
import { Instagram, Mail, Phone } from 'react-feather'
// import { MdOutlineMail, MdPhoneAndroid } from 'react-icons/md'
// import { RxInstagramLogo } from 'react-icons/rx'

import styles from './Form.module.scss'
import DetailCard from './DetailCard/DetailCard'

const iconProps = {
  size: 20
}

const EMAIL = {
  icon: <Mail { ...iconProps } />,
  info: 'reghardt7@gmail.com'
}

const INSTAGRAM = {
  icon: <Instagram { ...iconProps } />,
  info: '@eat.your.regtables'
}

const PHONE = {
  icon: <Phone { ...iconProps } />,
  info: '0764548241'
}

const Form = () => {
  return (
    <div className= {styles.container}>
      <div className= {styles.contact}>
        <DetailCard item = {EMAIL} />
        <DetailCard item = {INSTAGRAM} />
        <DetailCard item = {PHONE} />
      </div>

      <form>
        <div className= {styles.details}>
          <input 
            name = 'name'
            placeholder='name'
            className= 'hover'
          />
          <input
            placeholder='email'
            className='hover'
          />
        </div>

        <textarea placeholder= 'your message' className='hover'/>

        <button type = 'submit' className='hover'>
          send
        </button>
      </form>
    </div>
  )
}

export default Form