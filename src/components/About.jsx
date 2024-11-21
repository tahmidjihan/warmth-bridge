import React from 'react';
import { PiListMagnifyingGlassBold } from 'react-icons/pi';
import { FaTruckFast } from 'react-icons/fa6';
import { FaHandHoldingHeart } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  function HowCard(props) {
    return (
      <div className='mx-auto my-10 mt-20' data-aos='fade-up'>
        <div className='card bg-base-200 w-[300px] shadow-xl'>
          <figure className='bg-warm absolute rounded-full w-32 h-32 left-1/2 translate-x-[-50%] top-[-20%] overflow-hidden'>
            <h1 className='text-7xl text-center text-white'>{props.icon}</h1>
          </figure>
          <div className='card-body items-center text-center mt-16'>
            <h2 className='card-title'>{props.title}</h2>
            <p>{props.des}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <section id='about' className='w-10/12 mx-auto py-10'>
        <div className='section-header text-center pu-10 text-3xl md:text-5xl font-extrabold'>
          <h1>About WarmthBridge</h1>
        </div>
        <div className='flex py-20 justify-around flex-col gap-10 lg:flex-row'>
          <div className='max-w-md flex flex-col gap-5' data-aos='fade-down'>
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
          <div className='max-w-sm flex flex-col gap-5' data-aos='fade-up'>
            <h1 className='text-3xl font-extrabold'>Impact of your Donation</h1>
            <p>
              Your donation provides warmth and safety this winter, making a
              difference in Bangladesh.
            </p>
            <img src='./assets/people.png' alt='' />
          </div>
        </div>
      </section>
      <section>
        <h1 className='text-4xl font-extrabold text-center pt-10'>
          How it works
        </h1>
        <p className='text-center pb-10'>Just 3 simple steps! And that's it!</p>
        <div class='min-w[70vh] items-center align-middle flex flex-col mx-auto lg:flex-row gap-5 md:max-w-9/12'>
          <HowCard
            title='Choose'
            des='Select the campaign or cause you want to support. Browse our active projects and decide where your donation will make the most impact.'
            icon={<PiListMagnifyingGlassBold />}></HowCard>
          <HowCard
            title='Shipment'
            des='Schedule a convenient time for us to pick up your clothes. We’ll handle the logistics and come directly to your location.'
            icon={<FaTruckFast />}></HowCard>
          <HowCard
            title='Donation'
            des='We ensure your clothes reach those in need. Your contribution will be distributed to rural areas and communities that truly benefit from your generosity.'
            icon={<FaHandHoldingHeart />}></HowCard>
        </div>
      </section>
    </>
  );
}

export default About;
