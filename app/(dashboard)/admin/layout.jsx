"use client";
import "../../../assets/css/globals.css";
import "../../../app/globals.css";
import "@fontsource/tajawal";
import "../../../assets/fonts/feather/feather.css";
import React, { useState } from "react";
import Sidebar from "../admin/_shared/Sidebar";
import SimpleBar from "simplebar-react";
import Navbar from "../admin/_shared/Navbar";
import SignOutModal from "../_components/SignOutModal";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Layout({ children }) {
  const [isToggled, setIsToggled] = useState(false);
  const [show, setShow] = useState(false);

  const handleToggleClick = (e) => {
    e.preventDefault();
    setIsToggled(!isToggled);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="db-wrapper" className={`${isToggled ? "toggled" : ""}`} dir="rtl">
      <Sidebar />
      <main id="page-content" style={{ marginRight: "0px" }}>
        <div className="header">
          <Navbar handleToggleClick={handleToggleClick} handleShow={handleShow} />
        </div>

        <SimpleBar style={{ maxHeight: "calc(100vh - 60px)", overflowY: "auto" }}>
          {children} {/* Render dynamic content here */}
        </SimpleBar>

      </main>
      <SignOutModal show={show} handleClose={handleClose} />
    </div>
  );
}

export default Layout;
