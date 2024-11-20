import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Contact() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <div className=''>
      <h1 className='text-5xl font-bold text-center py-10'>Contact Us</h1>
      <div className='w-10/12 mx-auto flex justify-around  flex-col md:flex-row align-middle'>
        <div
          className='flex flex-col gap-4 max-w-xs py-10'
          data-aos='fade-right'>
          <label className='input input-bordered flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='h-4 w-4 opacity-70'>
              <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
              <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
            </svg>
            <input
              type='text'
              placeholder='Email'
              className='border-none focus:ring-0 grow'
            />
          </label>
          <label className='input input-bordered flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='h-4 w-4 opacity-70'>
              <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
            </svg>
            <input
              type='text'
              placeholder='Username'
              className='border-none focus:ring-0 grow'
            />
          </label>
          <label className=''>
            <textarea
              type='text'
              row={10}
              placeholder='your message'
              className=' input input-bordered w-full max-w-xs grow'></textarea>
          </label>
          <button className='btn bg-warm rounded-full text-black px-5 border-none md:mx-1'>
            Submit
          </button>
        </div>
        <div>
          <div
            className='max-w-md flex flex-col gap-2 py-10'
            data-aos='fade-left'>
            <h1 className='text-4xl mb-4 font-extrabold'>Info:</h1>
            <h2 className='text-2xl font-extrabold'>Location</h2>
            <p>Address: 123 Main Street, City, Country</p>
            <h2 className='text-2xl font-extrabold'>Contact</h2>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Email: 5Ml4b@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
