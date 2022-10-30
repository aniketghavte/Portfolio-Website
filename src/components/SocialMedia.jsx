import React from 'react'
import {BsTwitter, BsInstagram , BsGithub } from 'react-icons/bs'
import {FaLinkedin } from 'react-icons/fa'

const SocialMedia = () => {

  
  return (
    <div className='app__social'>
       <div>
           <a href='https://github.com/aniketghavte' alt='hh'><BsGithub /></a>
        </div>
        <div>
           <a href='https://twitter.com/aniket_ghavte' alt='hh'><BsTwitter /></a>
        </div>
        <div>
           <a href='https://www.linkedin.com/in/aniketghavte/' alt='hh'><FaLinkedin /></a>
        </div>
        <div>
           <a href='https://www.instagram.com/aniket.ghavte/' alt='hh'><BsInstagram /></a>
        </div>
        

    </div>
  )
}

export default SocialMedia