import React from 'react'
import Layout from '../components/Layout/Layout'
import HeroSection from '../components/HomePage/HeroSection'
import SmoothFollower from '../components/SmoothFollower/SmoothFollower'


const Home = () => {
  return (
    <Layout>
      <SmoothFollower/>
        <HeroSection/>
       
    </Layout>
  )
}

export default Home