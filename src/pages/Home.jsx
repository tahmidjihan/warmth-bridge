import React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/contact';

function Home() {
  return (
    <>
      <Hero></Hero>
      <section id='about' className='w-10/12 mx-auto py-10'>
        <div className='section-header text-center pu-10 text-5xl font-extrabold'>
          <h1>About WarmthBridge</h1>
        </div>
        <div className='flex py-20 justify-around flex-col md:flex-row'>
          <div className='max-w-md flex flex-col gap-5'>
            <h1 className='text-3xl font-extrabold'>About us</h1>
            <p>
              At WarmthBridge, we connect donors with those in need of winter
              clothing across Bangladesh. Our mission is to provide warmth and
              comfort to vulnerable communities, especially in rural areas,
              through easy and direct donations. Together with our volunteers
              and supporters, we aim to make a lasting impact.
            </p>
            <button className='btn bg-warm rounded-full text-black px-5 border-none md:mx-1'>
              Learn More
            </button>
          </div>
          <div className='max-w-sm flex flex-col gap-5'>
            <h1 className='text-3xl font-extrabold'>Impact of your Donation</h1>
            <p>
              Your donation provides warmth and safety this winter, making a
              difference in Bangladesh.
            </p>
            <img src='./assets/people.png' alt='' />
          </div>
        </div>
      </section>
      <Contact></Contact>
    </>
  );
}

export default Home;
