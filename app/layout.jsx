import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/globals.css";
import "./globals.css";
import { Inter } from "next/font/google";
import "simplebar-react/dist/simplebar.min.css";
import "../assets/fonts/feather/feather.css";
import "@popperjs/core";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer /> {/* Add ToastContainer */}
      </body>
    </html>
  );
}
