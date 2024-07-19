import React from "react";
import "@fontsource/tajawal"; // Defaults to weight 400
import Header from "../(website)/_shared/Header";
import Footer from "../(website)/_shared/Footer";
import ScrollToTopButton from "../(website)/_shared/ScrollToTopButton";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  subsets: ["latin", "arabic"], // Include the 'arabic' subset if needed
});

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className={tajawal.className}>
      <Header />
      {children}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default ProtectedLayout;
