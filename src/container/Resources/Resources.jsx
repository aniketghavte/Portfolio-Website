import React, {useState ,useEffect} from 'react';

import {urlFor, client} from '../../client'
import {motion} from 'framer-motion';
import {AppWrap} from '../../wrapper';

import './Resources.scss'

const Resources = () => {

  const [activeFilter, setactiveFilter] = useState('All');
  const [animateCard, setanimateCard] = useState({y:0,opacity :1});
  const [resources, setResources] = useState([]);

   // THIS STATE SET CONTENT IN CARDS OF WORK
   const [filterWork, setFilterWork] = useState([])


   // USED FOR FETCHING DATA FROM SANITY OF SCHEME WORKS
   useEffect(() => {
     const query = '*[_type == "resources"]';
 
     client.fetch(query)
     .then((data) => {
       setResources(data);
       setFilterWork(data);
     })
   }, [])

    // THIS FUNCTION HANDLE WHEN TAGS SWITCH MEANS ALL TO UI/UX OR REACT JS OF REACT NATIVE
  const handleWorkFilter = (item) =>{
    setactiveFilter(item);
    setanimateCard([{y:100, opacity:0}]);

    setTimeout(() => {
      setanimateCard([{y:0,opacity:1}])

      if(item === 'All'){
        setFilterWork(resources);

      }else{
        setFilterWork(resources.filter((resources) => resources.tags.includes(item)))
      }
    }, 500);
}




  return (

    <h2>Wait For It....</h2>
    // <>

    //     <h2 className='head-text'> My Creative <span>Portfolio </span>Section</h2>
    //       <div className='app__work-filter'>
    //         {['LinkedList', 'Stack', 'Queue','Array', 'All'].map((item,index) =>(
    //             <div
    //              key={index}
    //              onClick= {()=> handleWorkFilter(item)}
    //              className={`app__work-filter-item  app__flex p-text ${activeFilter === item ? 'item-active' : ' '}`}
    //         >
    //           {item}
    //           </div>
    //       ))}

          
    //     </div>
    //     <motion.div
    //       animate={animateCard}
    //       transition={{duration:0.5, delayChildren: 0.5}}
    //       className="app__work-portfolio"
    //     >
    //       {filterWork.map((work,index) => (
    //         <div className='app__work-item app__flex' key={index}>
    //             <div className='app__work-img app__flex'>

    //             </div>

    //             <div className='app__work-content app__flex'>
    //                   <h4 className='bold-text'>{work.code}</h4>
    //                   <p className='p-text' style={{marginTop:10}}> {work.description}</p>

    //                   <div className='app__work-tag app__flex'>
    //                     <p className='p-text'>{work.tags[0]}</p>
    //                   </div>
    //             </div>
    //         </div>
    //       ))}

    //     </motion.div>
      



      
    // </>
  )
}

export default AppWrap(Resources, 'resources')