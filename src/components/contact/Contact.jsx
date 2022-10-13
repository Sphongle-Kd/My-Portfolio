import React, { useRef ,useState} from 'react'
import './Contact.css';
import Phone from "../../image/phone.png";
import Address from "../../image/address.png"
import Email from "../../image/email.png";
import emailjs from 'emailjs-com';
import { useContext } from 'react';
import { themeContext } from '../../Conext'


const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit =(e) =>{
    e.preventDefault();
    emailjs.sendForm('service_olzbifg', 'template_a5cc16m', formRef.current, '5ETjYsegor6mfnh9N')
    .then((result) => {
        console.log(result.text);
        setDone(true);
    }, (error) => {
        console.log(error.text);
    });
  };
  return (
    <div className='c' id='Contact'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <div className="c-title">
                <span >Let's Discuss </span>
                <br/>
                <span style={{color: '#59b256',font: '60px'}}>Contact Me</span>
                </div>
                <div className="c-info">
                  <div className="c-info-item">
                    <img src={Phone} alt='' className='c-icon'/>
                    7668484148
                  </div>
                  <div className="c-info-item">
                    <img src={Email} alt='' className='c-icon'/>
                    kamaldeopa56@gmail.com
                  </div>
                  <div className="c-info-item">
                    <img src={Address} alt='' className='c-icon'/>
                    BTM 2nd Stage,Banglore
                  </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story?</b> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta itaque voluptatibus eum iusto illo, quo esse bla
                    nditiis repellendus sed eaque. 
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" className='user'/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" className='user' />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" className='user' />
                    <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" className='user' />
                    <button className='button c-button'>Submit</button>
                    <span>{done && "Thanks for contacting me!" }</span>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact