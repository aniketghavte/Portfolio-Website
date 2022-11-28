import React from 'react'


const NavigationDots = (active) => {


  return (
    <div className='app__navigation'>
        {['home', 'about','work', 'skills', 'footer'].map((item,index)=> (
            <>
            <a 
            href={`#${item}`} 
            className='app__navigation-dot'
            style={item === active ? {backgroundColor:'#ffff'} : { }}
            >
             </a>
         
            </>
         ))}
    </div>
  )
}
// <a href={`#${item}`}>{item}</a>
export default NavigationDots