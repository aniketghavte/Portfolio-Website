import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion';
import { urlFor, client } from '../../client';

import { AppWrap } from '../../wrapper';

import './About.scss'

// const abouts = [
//   {title: 'web Developer', description:'I am a good web developer', imageUrl:images.about01},
//   {title: 'UI/UX', description:'I am a good web developer', imageUrl:images.about02},
//   {title: 'React Developer', description:'I am a good web developer', imageUrl:images.about03},
//   {title: 'Android Developer', description:'I am a good web developer', imageUrl:images.about04}
// ]



const About = () => {
// ================================Data is being fetch from sanity databases
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
    .then((data) => setAbouts(data))

  }, [])
  
  return (
    <div className='abouthome'>
      <h2 className='head-text'> I Know that <span>Good Products</span><br/> means <span>Good Business</span></h2>

      <div className='app_profiles'>
          {abouts.map((about,index)=> (
            <motion.div
            whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.5, type:'tween'}}
            className='app_profile-item'
            key={about.title + index}
            >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop:20}}>{about.description}</p>
            </motion.div>
          ))}

      </div>

    </div>
  )
}

export default AppWrap(About , 'about');