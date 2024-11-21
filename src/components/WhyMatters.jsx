import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhyMatters() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <>
      <section className='py-20' data-aos='fade-up'>
        <h1 className='text-5xl font-extrabold text-center'>
          Why your donation matter?
        </h1>
        <p className='text-center max-w-lg mx-auto mt-3' data-aos='fade-right'>
          Your donation is more than just giving clothes—it’s a meaningful act
          that directly impacts lives. By donating to Warmth Bridge, you help
          provide warmth and dignity to those in need, especially in rural
          communities. Your contributions also promote sustainability by
          reducing textile waste. Each piece of clothing you give brings hope
          and comfort, creating a lasting positive impact on people’s lives.
          Simply put, your donation matters because it makes a real difference.
        </p>
        <div class='diff-container md:w-9/12 w-11/12 mx-auto mt-10 rounded-2xl'>
          <div class='diff aspect-[9/16] md:aspect-[16/9] rounded-xl'>
            <div class='diff-item-1'>
              <img alt='daisy' src='./assets/poverty.png' />
            </div>
            <div class='diff-item-2'>
              <img alt='daisy' src='./assets/stability.png' />
            </div>
            <div class='diff-resizer'></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyMatters;
