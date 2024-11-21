import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HowCanYouHelp() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  function StepHero(props) {
    return (
      <>
        <div
          className='hero min-h-[65vh]'
          data-aos='fade-up'
          style={{
            backgroundImage: `url(${props.img})`,
          }}>
          <div className='hero-overlay bg-opacity-60'></div>
          <div className='hero-content text-white text-center'>
            <div className='max-w-md'>
              <h1 className='mb-2 p-3 text-5xl font-bold bg-warm '>
                {props.title}
              </h1>
              <p className='mb-5'>{props.des}</p>
            </div>
          </div>
        </div>
        <div class='divider bg-warm margin-0 p-3'>then</div>
      </>
    );
  }
  return (
    <>
      <h1 className='text-5xl font-extrabold text-center py-10 bg-warm'>
        How Can You Help
      </h1>
      <div>
        <StepHero
          title='Step 1: Gather Your Clothes'
          des='Go through your wardrobe and collect clothes that are no longer needed but still in wearable condition. Make sure they are clean, undamaged, and neatly folded. Every donation counts in bringing warmth to someone’s life.'
          img='https://images.pexels.com/photos/6994790/pexels-photo-6994790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />

        <StepHero
          title='Step 2: Select a Campaign'
          des='Browse through our active campaigns and choose where you’d like your donation to go. You can support specific causes or communities in need, making your donation even more impactful.'
          img='https://images.pexels.com/photos/6994938/pexels-photo-6994938.jpeg?auto=compress&cs=tinysrgb&w=600'
        />

        <StepHero
          title='Step 3: Schedule a Pickup'
          des='Pick a date and time that works best for you, and we’ll arrange a pickup. Our team will come directly to your location, so you don’t need to worry about transporting the clothes yourself.'
          img='https://images.pexels.com/photos/4391478/pexels-photo-4391478.jpeg?auto=compress&cs=tinysrgb&w=600'
        />

        <StepHero
          title='Step 4: Bring the Warmth'
          des='Once we pick up your donation, we ensure it reaches the people in rural areas who genuinely need it. Your contribution helps create a lasting impact by providing warmth and comfort to those less fortunate.'
          img='https://images.pexels.com/photos/11736844/pexels-photo-11736844.jpeg?auto=compress&cs=tinysrgb&w=600'
        />
        <h1 className='text-3xl font-extrabold text-center py-10'>
          Thank you for your support !
        </h1>
      </div>
    </>
  );
}

export default HowCanYouHelp;
