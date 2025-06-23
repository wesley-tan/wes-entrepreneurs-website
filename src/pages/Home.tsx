import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Programs } from '../components/sections/Programs';
import { Events } from '../components/sections/Events';
import { GetInvolved } from '../components/sections/GetInvolved';
import { Contact } from '../components/sections/Contact';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Events />
      <GetInvolved />
      <Contact />
    </>
  );
}; 