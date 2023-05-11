import React from 'react'
import { Article ,  Brand , CTA ,  Navbar , Feature } from './index'
import { Blog  , Features ,  Footer , Header ,  Possibility , WhatGPT3 } from '../containers/index'
const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default Home