import React from 'react';

function FirstSlide() {
  return (
    <>
      <div
        className='hero min-h-screen'
        style={{
          backgroundImage: 'url(/assets/hero.png)',
        }}>
        <div className='hero-content text-center text-white'>
          <div className='md:max-w-lg max-w-[300px]'>
            <h1 className='mb-5 text-5xl md:text-7xl font-extrabold'>
              Spread warmth with Warmth Bridge <br /> - Dhaka
            </h1>
            <p className='mb-5'>
              Spread warmth with WarmthBridge. You might have some old cloths or
              some money to donate. we donate cloths to the that person or
              families need the cloths. Winter Is almost there. You can donate
              your old winter warm cloths to the persons that are in need.
              Spread warmth; remember, charity is never waste of anything.
            </p>
            <div className=''>
              <button className='btn bg-warm rounded-full text-black px-5 border-none md:mx-1'>
                Get Started
              </button>
              <button className='btn border-warm rounded-full bg-transparent text-warm px-5 border-1 md:mx-1'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstSlide;
