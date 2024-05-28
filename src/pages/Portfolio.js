import React from 'react';
// import images
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
import Image5 from '../img/portfolio/5.png';
import Image6 from '../img/portfolio/6.png';
// import link
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section className='section'>
      <div className='container mx-auto h-full relative'> 
        <div className='flex flex-col lg:flex-row h-full items-center justify-start
        gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}
          <div className='flex flex-col lg:items-start'>
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm'>
              Every day, I strive to master new skills in
              <b> Illustrator, Photoshop, and UI/UX design. </b> 
              I embrace this journey, 
              finding joy in leveling up and 
              pushing my creative boundaries.
              <br />
              <br />
              Every day, I strive to master new skills in Illustrator, 
              Photoshop, and UI/UX design. I embrace this journey, 
              finding joy in leveling up and 
              pushing my creative boundaries.
            </p>
            <Link to={'/contact'} className='btn mb-[30px] mx-auto 
            lg:mx-0'>
              Hire me
            </Link>
          </div>
          {/* image grid */}
          <div className='grid grid-cols-2 lg:gap-2'>
            {/* images */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] 
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
    </section>
  )
};

export default Portfolio;
