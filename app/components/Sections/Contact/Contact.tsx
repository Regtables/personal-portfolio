import React from 'react'

import styles from './Contact.module.scss'
import Form from './Form/Form'

const Contact = () => {
  return (
    <div className= {styles.container}>
      <header className= 'heading'>
        <h2 className='text-[38px] font-[800] text-[var(--color-font)]'>Lets talk work</h2>
      </header>

      <div className= {styles.form}>
        <Form />
      </div>

      <footer className='absolute bottom-0 mb-4'>
        <p className='text-[12px]'>Copyright © 2023 Regtables</p>
      </footer>
    </div>
  )
}

export default Contact