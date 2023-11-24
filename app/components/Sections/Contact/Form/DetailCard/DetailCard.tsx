import React from 'react'

import styles from './DetailCard.module.scss'

const DetailCard = ({ item } : { item: any}) => {
  const { info,  icon } = item 
  return (
    <div className= {`${styles.container} hover`}>
      {icon}

      <h4>{info}</h4>
    </div>
  )
}

export default DetailCard