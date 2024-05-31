import React, {useContext} from 'react';
// import images
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
import Image5 from '../img/portfolio/5.png';
import Image6 from '../img/portfolio/6.png';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);

  return (
    <motion.section 
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'>
      <div className='container mx-auto h-full relative'> 
        <div className='flex flex-col lg:flex-row h-full items-center justify-start
        gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}
          <motion.div   
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          initial={{ opacity: 0, y: '-80%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-80%' }}
          transition={transition1}
          className='flex flex-col lg:items-start'>
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm'>
              I've had the pleasure of working on a variety of projects 
              in graphic design and am now expanding my expertise into 
              web design. My portfolio includes designing logos for companies 
              such as Brain Brush, The Allure Spa, EDSOL, Dawn Curtains, and 
              Everest Tech Hub. Each project has allowed me to blend creativity with 
              strategic thinking, crafting visual identities that resonate with their 
              audiences.
            </p>
            <Link to={'/contact'} className='btn mb-[30px] mx-auto 
            lg:mx-0'>
              Hire me
            </Link>
          </motion.div>
          {/* image grid */}
          <div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className='grid grid-cols-2 lg:gap-2'>
            {/* images */}
            <div
            className='max-w-[250px] lg:max-w-[320px] h-[187px] 
            lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
              src={Image1} alt=''/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] 
            lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
              src={Image2} alt=''/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] 
            lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
              src={Image3} alt=''/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] 
            lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
              src={Image4} alt=''/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] 
            lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
              src={Image5} alt=''/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] 
            lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
              src={Image6} alt=''/>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
};

export default Portfolio;
