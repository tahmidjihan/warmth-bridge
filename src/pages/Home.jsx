import React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/contact';
import About from '../components/About';
import Gallery from './../components/Gallery';
import WhyMatters from './../components/WhyMatters';

function Home() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <WhyMatters></WhyMatters>
      <Gallery></Gallery>
      <Contact></Contact>
    </>
  );
}

export default Home;
