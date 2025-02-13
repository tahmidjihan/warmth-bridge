import React from 'react';

function FirstSlide() {
  return (
    <>
      <div
        className='hero min-h-screen'
        style={{
          backgroundImage:
            'url(https://live.staticflickr.com/4039/4284845441_de97ff60f9_b.jpg)',
        }}>
        <div className='hero-overlay bg-opacity-50 bg-black'></div>
        <div className='hero-content text-center text-white'>
          <div className='max-w-lg'>
            <h1 className='mb-5 md:text-7xl text-5xl font-extrabold'>
              Reduce their struggle on this winter. <br />
              <span className='text-3xl'>-Chittagong</span>
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
