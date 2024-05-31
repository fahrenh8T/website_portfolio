import React, {useContext} from 'react';
//import images
import PersonImg from '../img/about/person.png';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  return (
    <motion.section 
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
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
          <motion.div   
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          initial={{ opacity: 0, y: '-80%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-80%' }}
          transition={transition1}
          className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto flex flex-col justify-center
          items-center lg:items-start'>
            <h1 className='h1'>
              About me
            </h1>
            <p className='mb-12 max-w-sm'>
            Every day, I dive into the exciting world of <b>Illustrator,
            Photoshop, UI/UX design, and coding with ReactJS, HTML, and CSS
            as a Frontend Developer. </b>
            Embracing this dynamic journey, I find joy in continuously 
            leveling up and pushing my creative boundaries to new heights.
              <br />
              <br />
              Beyond my professional pursuits, I am passionate about basketball, 
              gaming, and all things tech. Whether I'm on the court, immersed in 
              a virtual world, or exploring the latest technological innovations, 
              these interests fuel my creativity and drive, adding a vibrant balance
              to my life.
            </p>
            <Link to={'/portfolio'} className='btn'>View my work</Link>
          </motion.div>
        </div>
      </div>
      </motion.section>
  );
  };

export default About;
