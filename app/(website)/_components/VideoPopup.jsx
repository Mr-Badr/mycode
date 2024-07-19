"use client";

import React, { useState } from "react";
import "./VideoPopup.css";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";

const VideoPopup = () => {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  let position;
  let direction = "rtl"
  let text = "شاهد الآن"
  let color1 = "#31e99c"
  let color2 = "#ff2075"
  if (direction === "rtl") {
    position = "left: 50px";
  } else {
    position = "right: 50px";
  }



  return (
    <div className="">
      
      <button onClick={openModal} style={{
        border:"none",
        backgroundColor: "white"
      }}>
        <div className="popup-youtube fs-4 text-inherit ms-3"
                //href="https://www.youtube.com/watch?v=0uiIbTBm7Jk"
                //target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center"
                }}>

        <span
          className="rounded-circle bg-primary"
          style={{
            display: "inline-flex",
            width: "40px",
            height: "40px",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <BiLeftArrow className="text-white" />

        </span>
        <span className="mx-2">
                شاهد الآن
</span>
        </div>
        {modal ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                  dir={direction}
                  style={{
                    left: "450px"
                  }}
                />
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      />
                    </div>
                  ) : null}
                  <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src={`https://www.youtube.com/embed/0uiIbTBm7Jk?si=oVNPNRZ2kG-J5GCI`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </button>
    </div>
  );
};

export default VideoPopup;
