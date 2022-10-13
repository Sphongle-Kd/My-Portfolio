import React from 'react'
import './Skills.css'
import HeartEmoji from '../../image/heartemoji.png'
import Glasses from '../../image/glasses.png'
import Resume from './resume.pdf'
import humble from '../../image/humble.png'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import Card from '../card/Card'


const Skills = () => {
  const transition ={duration: 1, type: 'spring'}
  return (
    <div className="s-wrapper" id='Skills'>
      <div className="s-left">
        <div className="s-title">
        <span >My Awesome </span>
        <br/>
        <span style={{color: '#59b256',font: '60px'}}>Skills</span>
        </div>
        <span className='s-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br/>
          Quis deserunt aspernatur dolorem reprehenderit quia.
        </span>
        <a href={Resume} download>
        <button className='button s-button'>Download CV</button>
        </a>
        <div className="blur s-blur" style = {{background : "#ABF1FF94"}}></div>
      </div>

      <div className="s-right">

             {/* { First Card} */}

        < motion.div
        whileInView={{left:'14rem'}}
        initial={{left:'25rem'}}
        transition={transition}
         style={{left: '14rem'}}>
          <Card
          emoji = {HeartEmoji}
          heading ={'Design'}
          detail ={ "Figma , Canva , Bootstrap , Material UI "}
          />
        </motion.div>
              {/* {Second Card} */}

        <motion.div 
        whileInView={{right:'14rem'}}
        initial={{right:'25rem'}}
        transition={transition}
        style={{ top: "12rem", left: "-4rem"}}>
          <Card
          emoji ={Glasses}
          heading = {'Developer'}
          detail ={'HTML, CSS, JavaScript, React.js,Redux'}
          />
        </motion.div>

            {/* {Third Card} */}

        <motion.div 
        whileInView={{left:'14rem'}}
        initial={{left:'25rem'}}
        transition={transition}
        style={{ top: "19rem", left:"12rem"}}>
          <Card
          emoji={humble}
          heading={"UI/UX"}
          detail={"lorem ajafh ahsdaid adjanda adhajd"}
          />
        </motion.div>
        
      </div>
    </div>
  )
}

export default Skills;