import React from 'react'
import Layout from '../components/Layout/Layout'

import SmoothFollower from '../components/SmoothFollower/SmoothFollower'
  
import HeroSection from '../components/HomePage/HeroSection/HeroSection'
import PreBuildWebsite from '../components/HomePage/Pre-Build-website/PreBuildWebsite'
import CardSection from '../components/HomePage/cardSection/CardSection'
import CounterSection from '../components/HomePage/counterSection/CounterSection'
import OneClickSection from '../components/HomePage/oneClick/OneClickSection'
import TabsComponents from '../components/TabsComponents/TabsComponents'
import EasyIntrectionCard from '../components/HomePage/EasyIntercationCard/EasyIntrectionCard'
import FluidAndResponsive from '../components/HomePage/FluidAndResponsive/FluidAndResponsive'
import PreMadeLayout from '../components/HomePage/PreMadeLayout/PreMadeLayout'
import MoreFeaturesCard from '../components/HomePage/MoreFeaturesCard/MoreFeaturesCard'
import TestimonialSlider from '../components/HomePage/TestimonailSlider/TestimonialSlider'


const Home = () => {
  return (
    <Layout>
      <SmoothFollower/>
        <HeroSection/>
        <PreBuildWebsite/>
        <CardSection/>
        <CounterSection/>
        <OneClickSection/>
        <TabsComponents/>
        <EasyIntrectionCard/>
        <FluidAndResponsive/>
        <PreMadeLayout/>
        <MoreFeaturesCard/>
        <TestimonialSlider/>
    </Layout>
  )
}

export default Home