import React from 'react'

const ButtonPrimary = ({ text, color } : { text: string, color: string }) => {
  return (
    <button className= {`rounded-[20rem] text-[14px] outline-none border-none font-[700] px-[3rem] py-[1rem] relative `} style = {{backgroundColor: color}}>
      {text}
    </button>
  )
}

export default ButtonPrimary