import "../../assets/css/globals.css";
import "../../app/globals.css"
import "@fontsource/tajawal";
import "../../assets/fonts/feather/feather.css";
import Script from "next/script";
import React from "react";

export default async function RootLayout({
  children,
}) {
  return <div>{children}
{/*         <Script src="/assets/js/vendors/flatpickr.js" />
 */}
  </div>;
}
