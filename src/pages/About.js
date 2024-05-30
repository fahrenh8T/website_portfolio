import React from 'react';
//import images
import PersonImg from '../img/about/person.png';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions';

const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
    >
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center
        justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/* image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={PersonImg} alt='' />
          </div>
          {/* text */}
          <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto flex flex-col justify-center
          items-center lg:items-start'>
            <h1 className='h1'>
              About me
            </h1>
            <p className='mb-12 max-w-sm'>
              Every day, I strive to master new skills in Illustrator, 
              Photoshop, and UI/UX design. I embrace this journey, 
              finding joy in leveling up and 
              pushing my creative boundaries.
              <b>Raymond Wairegi Maina</b>
              <br />
              <br />
              Every day, I strive to master new skills in Illustrator, 
              Photoshop, and UI/UX design. I embrace this journey, 
              finding joy in leveling up and 
              pushing my creative boundaries.
            </p>
            <Link to={'/portfolio'} className='btn'>View my work</Link>
          </div>
        </div>
      </div>
      </motion.section>
  );
  };

export default About;
