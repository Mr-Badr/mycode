import React from 'react'
import { Tajawal } from "next/font/google";
import "@fontsource/tajawal"; // Defaults to weight 400
import Formations from '../../_sections/formations/Formations'

function HomePage() {
  return (
    <main className='bg-white'>
      <Formations />
    </main>
  )
}

export default HomePage