import HeroSection from '../../_sections/home/HeroSection'
import Section1 from '../../_sections/home/Section1'
import Steps1 from '../../_sections/home/Steps1'
import Steps2 from '../../_sections/home/Steps2'
import Lives from '../../_sections/home/Lives'
import Courses from '../../_sections/home/Courses'
import Section3About from '../../_sections/about/Section3'
import ReviewSection from '../../_sections/home/ReviewSection'
import Section4 from '../../_sections/home/Section4'
import Teachers from '../../_sections/home/Teachers'
import CTA from '../../_sections/home/CTA'
import React from 'react'
import { Tajawal } from "next/font/google";
import "@fontsource/tajawal"; // Defaults to weight 400

function HomePage() {
  return (
    <main>
      <HeroSection />
      <Section3About />
      <Section1 />
      <Teachers />
      <ReviewSection />
      <Courses />
      <Lives />
      <Steps2 />
      <CTA />
      {/* <Steps1 /> */}
    </main>
  )
}

export default HomePage