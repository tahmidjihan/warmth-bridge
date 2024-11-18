import React from 'react';

function Hero() {
  return (
    <>
      <div
        className='hero min-h-screen'
        style={{
          backgroundImage: 'url(/assets/hero.png)',
        }}>
        <div className='hero-content text-center text-white'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
            <p className='mb-5'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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

export default Hero;
