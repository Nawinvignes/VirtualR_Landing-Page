import React from 'react'
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import FeatureSection from './component/FeatureSection';
import Workflow from './component/Workflow';
import Pricing from './component/Pricing';
import Footer from './component/Footer';
export const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <HeroSection></HeroSection>
        <FeatureSection></FeatureSection>
        <Workflow></Workflow>
        <Pricing></Pricing>
        <Footer></Footer>
      </div>
    </div>
  )
};
export default App;