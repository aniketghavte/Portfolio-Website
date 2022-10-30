// import React, {useState ,useEffect} from 'react'
// // import { motion} from 'framer-motion';
// // import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

// import {AppWrap} from '../../wrapper';
// import {urlFor, client} from '../../client'

// import './Testimonials.scss'

// const Testimonials = () => {

//   const [brands, setBrands] = useState([]);
//   const [Testimonials, setTestimonials] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // USED FOR FETCHING DATA FROM SANITY OF SCHEME WORKS
//   useEffect(() => {
//     const query = '*[_type == "experiences"]';
//     const brandsQuery = '*[_type == "skills"]';

//     client.fetch(query)
//     .then((data) => {
//       setTestimonials(data);
//     })
//     client.fetch(brandsQuery)
//     .then((data) => {
//       setBrands(data);
//     })
//   }, [])


//   return (
//     <>
      
//     </>
//   )
// }

// export default AppWrap(Testimonials, 'testmonials')
