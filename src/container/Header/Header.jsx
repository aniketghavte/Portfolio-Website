import React from 'react'
import {motion} from 'framer-motion';
import {images} from '../../constants'
import './Header.scss'
import {AppWrap} from '../../wrapper';

const scaleVariants = {
  whileInView:{
    scale: [0,1],
    opacity: [0,4],
    transition : {
      duration:1,
      ease: 'easeInOut'
    }

  }
}
const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div 
        whileInView={{x: [-100,0],opacity: [0,1]}}
        whileHover={{scale:1.05}}
        transition={{duration:1, type:'tween'}}
        className='app__header-info'
      >
        <div  className='app__header-badge'>
          <div className='badge-cmp app__flex'>
              <span>👋</span>
              <div style={{marginLeft:20}}>
                <p className='p-text'>Hello, I'm</p>
                <h1 className='head-text'>Aniket Ghavte</h1>
              </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Software Developer</p>
            <p className='p-text'>React</p>
            <p className='p-text'>UI/UX</p>
            
          </div>
        </div>
      </motion.div>

      {/* ================== */}
      <motion.div
          whileInView={{opacity: [0,1], delayChildren:1}}
          transition={{duration:1}}
          className='app__header-img'
          >
            <img src={images.profile} alt="profile_bg" />
            {/* <motion.img
              whileInView={{scale: [0,1]}}
              transition={{duration:2,ease:'easeInOut'}}
              className='overlay_circle'
              src={images.circle}
              alt='profile_circle'
            >
            </motion.img> */}
        
      </motion.div>
      <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className='app__header-circles'
      >
        
        {[images.node, images.react1, images.git,images.js].map((circle,index) => (
          <div className='circle-cmp app-flex' key={`circle-${index}`}>
              <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');
