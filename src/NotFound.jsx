import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            'url(https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-electricity-socket-wire-error-plug-png-image_4651067.png)',
        }}
        className='lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center bg-no-repeat bg-right flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16'>
        <div className='xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0'>
          <div className='relative'>
            <div className='absolute'>
              <div className=''>
                <h1 className='my-2 text-gray-800 font-bold text-2xl'>
                  Looks like you've found the doorway to the great nothing
                </h1>
                <p className='my-2 text-gray-800'>
                  Sorry about that! Please visit our hompage to get where you
                  need to go.
                </p>
                <Link to={'/'}>
                  <button className='sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-warm text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50'>
                    Take me there!
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <img src='https://i.ibb.co/G9DC8S0/404-2.png' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
