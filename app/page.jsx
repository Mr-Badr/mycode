import "../assets/css/globals.css"
import "./globals.css";
import React from "react";
import HomePage from "./(website)/(pages)/home/page";
import Header from "./(website)/_shared/Header";
import Footer from "./(website)/_shared/Footer";

import { Tajawal } from "next/font/google";
import "@fontsource/tajawal"; // Defaults to weight 400


const tajawal = Tajawal({
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  subsets: ['latin', 'arabic'], // Include the 'arabic' subset if needed
});

export default function Home() {
  return (
    <>
    <Header />
      <HomePage className={tajawal.className}/>
      <Footer />
    </>
  );
}
