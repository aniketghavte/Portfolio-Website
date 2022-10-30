import React, {useState} from 'react';

import {images} from '../../constants';
import {AppWrap} from '../../wrapper';
import {client} from '../../client';


import './Footer.scss'

const Footer = () => {

    const [formData, setFormData] = useState({name : '', email:' ', message:''});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const {name, email, message} = formData;

    const handleChangeInput = (e) => {
      const {name , value} = e.target;

      setFormData({...formData, [name]:value});
    }

    const handleSubmit =() => {
        setLoading(true);

        const contact = {
          _type: 'contact',
          name: name,
          email: email,
          message: message,
        }

        client.create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
    }

  return (
    <>
      <h2 className='head-text'> Take  a coffe & chat with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
            <img src={images.email} alt='email'/>
            <a href='mailto:aniketghavte@gmail.com' className='p-text'>aniketghavte@gmail.com</a>
        </div>
        <div className='app__footer-card'>
            <img src={images.mobile} alt='mobile'/>
            <a href='tel:+91 (8805679503)' className='p-text'>+91 8805679503</a>
        </div>
      </div>

      {!isFormSubmitted ? 
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <input className='p-text' type='email' placeholder='Your email' name='email' value={email} onChange={handleChangeInput} />
        </div>

        <div>
          <textarea
            className='p-text'
            
            placeholder="your massage"
            value={message}
            name="message"
            onChange={handleChangeInput}
          >

          </textarea>
        </div>

        <button type='button' className='p-text' onClick={handleSubmit}> {loading? 'Sending' : 'Send Message'}</button>

      </div> 
      : <div>
          <h3>Thank you for getting in touch</h3>
      </div> }

      <div className='copyright-'>
                <p className='p-text'>@2022 Aniket Ghavte</p>
                <p className='p-text'>All Rights are Reserved</p>
            </div>
    </>
  )
}

export default AppWrap(Footer, 'footer')
