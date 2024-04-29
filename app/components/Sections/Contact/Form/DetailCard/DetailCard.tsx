import React from 'react'

import styles from './DetailCard.module.scss'

const DetailCard = ({ item } : { item: any}) => {
  const { info,  icon, url } = item 
  return (
    <a href = {url} target='_blank' rel = 'noreferrer' className= {`${styles.container} hover`}>
      {icon}

      <h4>{info}</h4>
    </a>
  )
}

export default DetailCard