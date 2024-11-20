import React from 'react';
import FirstSlide from './carousel-heros/FirstSlide';
import SecondSlide from './carousel-heros/SecondSlide';
import ThirdSlide from './carousel-heros/ThirdSlide';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <>
      <div className='carousel w-full' data-aos='fade-up'>
        <div id='slide1' className='carousel-item relative w-full'>
          <div className='w-full'>
            <FirstSlide></FirstSlide>
          </div>
          <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
            <a href='#slide3' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='carousel-item relative w-full'>
          <div className='w-full'>
            <SecondSlide></SecondSlide>
          </div>
          <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide3' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' className='carousel-item relative w-full'>
          <div className='w-full'>
            <ThirdSlide></ThirdSlide>
          </div>
          <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
            <a href='#slide2' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide1' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
