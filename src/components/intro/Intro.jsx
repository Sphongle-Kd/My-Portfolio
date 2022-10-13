import React from 'react'
import './Intro.css';
import Me from '../../image/img.png';

const Intro  = () => {
  return (
    <div className="head-section">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My name is </h2>
                <h1 className='i-name'>Kamal Deopa</h1>
                <div className="i-title">
                  <div className="i-title-wrapper">
                    <div className="i-title-item">Front-End</div>
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">UI/UX Designer</div>
                    <div className="i-title-item">Photographer</div>
                    <div className="i-title-item">Gamer</div>
                  </div>
                </div>
                <div className='i-desc'>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web services and 
                    online stores.
                </div>
            </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className='i-img' />
        </div>
    </div>
  )
}

export default Intro