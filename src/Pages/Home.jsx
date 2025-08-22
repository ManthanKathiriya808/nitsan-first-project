import React from 'react'
import Layout from '../components/Layout/Layout'

import SmoothFollower from '../components/SmoothFollower/SmoothFollower'
import PreBuildWebsite from '../components/HomePage/HeroSection/Pre-Build-website/PreBuildWebsite'
import HeroSection from '../components/HomePage/HeroSection/HeroSection'


const Home = () => {
  return (
    <Layout>
      <SmoothFollower/>
        <HeroSection/>
        <PreBuildWebsite/>
    </Layout>
  )
}

export default Home