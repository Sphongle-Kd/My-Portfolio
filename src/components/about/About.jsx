import React from 'react';
import './About.css'
import You from '../../image/img1.jpg';

const about = () => {
  return (
    <div className="a" id='About'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={You} alt="" className='a-img'/>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About</h1>
        <p className="a-sub">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere repellat rerum temporibus voluptates expedita</p>
        <p className="a-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
         Veniam expedita nostrum laborum sequi beatae esse facere,
         laudantium incidunt, et nisi exercitationem obcaecati qui magnam 
         quasi dolorum eligendi tempore at eius.</p>
      </div>
    </div>
  )
}

export default about