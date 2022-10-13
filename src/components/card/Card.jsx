import React from 'react'
import './Card.css'

const Card = ({emoji, heading, detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span style={{color:'gray',font: '16px'}}>{detail}</span>
        <button className='c-button'>LEARN MORE</button>
    </div>
  )
}

export default Card