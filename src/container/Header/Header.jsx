import React from 'react'
import {useState , useEffect} from 'react'
import {motion} from 'framer-motion';
import {images} from '../../constants'
import './Header.scss'
import {AppWrap} from '../../wrapper';

import Typewriter from 'typewriter-effect';

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

  // some other desings
  // const [loopNum , setLoopNum] = useState(0);
  // const [isDeleting, setIsDeleting]= useState(false);          
  // const toRotate = ["Software Developer", "React Developer","UI/UX Developer"];
  // const [text, setText] = useState(300 - Math.random() * 100 );
  // const [delta , setDelta] = useState()
  // const period = 200;

  // useEffect ( () => {
  //     let ticker = setInterval(() => {
  //         tick();
  //     }, delta);

  //     return () => {clearInterval(ticker)};
  // },[text])

  // const tick = () => {
  //     let i = loopNum % toRotate.length;
  //     let fullText = toRotate[i];
  //     let updateText = isDeleting ? fullText.substring(0, text.length-1):fullText.substring(0,text.length+1);

  //     setText(updateText);
  //     if(isDeleting){
  //         setDelta(prevDelta => prevDelta/2);
  //     }

  //     if (!isDeleting && updateText === fullText){
  //         setIsDeleting(true);
  //         setDelta(period);
  //     }else if (isDeleting && updateText === ''){
  //         setIsDeleting(false);
  //         setLoopNum(loopNum +1);
  //         setDelta(200);
  //     }
  // }

  return (
    <div id='home' className='app__header app__flex'>
      <motion.div 
        whileInView={{x: [-100,0],opacity: [0,1]}}
        whileHover={{scale:1}}
        transition={{duration:1, type:'tween'}}
        className='app__header-info'
      >
        <div  className='app__header-badge'>
          <div className='badge-cmp app__flex'>
              <span>👋</span>
              <div style={{marginLeft:20}}>
                <p className='p-text'>Hello, I'm</p>
                <h1 className='head-text'>Aniket Ghavte </h1>
              </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Software Developer</p>
            <p className='p-text'> React </p>
            <p className='p-text'> UI/UX </p>
            
            
          </div>

          <div className='badge-cmp-last app__flex'>
              
              <div className='p-text'>
              <Typewriter
                    options={{
                      strings: ['ReactJs', 'Android', 'UI/UX' , 'React Native', 'NodeJs', 'Java', 'JavaScript', 'MonogoDB', 'Express'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
              </div>
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
        
        {[images.mongodb, images.react1, images.git,images.js].map((circle,index) => (
          <div className='circle-cmp app-flex' key={`circle-${index}`}>
              <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');
