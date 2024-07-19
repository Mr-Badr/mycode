"use client"
import React, { useState, useEffect  } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const images = [
  "../../../assets/images/clic/1.jpg",
  "../../../assets/images/clic/2.jpg",
  "../../../assets/images/clic/3.jpg",
  "../../../assets/images/clic/4.jpg",
  "../../../assets/images/clic/5.jpg",
  "../../../assets/images/clic/6.jpg",
  "../../../assets/images/clic/7.jpg",
  "../../../assets/images/clic/8.jpg",
  "../../../assets/images/clic/9.jpg",
  "../../../assets/images/clic/10.jpg",
  "../../../assets/images/clic/11.jpg",
  "../../../assets/images/clic/12.jpg",
  "../../../assets/images/clic/13.jpg",
  "../../../assets/images/clic/14.jpg",
  "../../../assets/images/clic/15.jpg",
  "../../../assets/images/clic/16.jpg",
  "../../../assets/images/clic/17.jpg",
  "../../../assets/images/clic/18.jpg",
  "../../../assets/images/clic/19.jpg",
  "../../../assets/images/clic/20.jpg",
  "../../../assets/images/clic/21.jpg",
  "../../../assets/images/clic/23.jpg",
  "../../../assets/images/clic/25.jpg",
  //"../../../assets/images/clic/22.jpg",
];

const MasonryGallery = () => {
  const [data, setData] = useState({ image: "", i: 0 });

  // Function to view image in full-screen
  const viewImage = (image, i) => {
    setData({ image, i });
  };

  // Function to close full-screen image view
  const closeImage = () => {
    setData({ image: "", i: 0 });
  };

  // Function to navigate to next or previous image
  const imgAction = (action) => {
    let i = data.i;

    if (action === "next-img" && i < images.length - 1) {
      setData({ image: images[i + 1], i: i + 1 });
    }

    if (action === "previous-img" && i > 0) {
      setData({ image: images[i - 1], i: i - 1 });
    }
  };

  // Keyboard event listener for left and right arrows
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      imgAction("previous-img");
    } else if (event.key === "ArrowRight") {
      imgAction("next-img");
    } else if (event.key === "Escape") {
      closeImage();
    }
  };

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("keydown", handleKeyDown);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [data]); // Dependency array ensures the effect runs only when `data` changes

  return (
    <section className="py-lg-8 py-6 bg-white">
      <div className="container my-lg-8">
        {/* Full-screen image display */}
        {data.image && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.9)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <button
              className="btn btn-outline-dark rounded-circle"
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                color: "#fff",
                fontSize: 30,
                cursor: "pointer",
              }}
              onClick={closeImage}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <IoIosArrowBack
              onClick={() => imgAction("previous-img")}
              style={{
                position: "absolute",
                top: "50%",
                left: 20,
                transform: "translateY(-50%)",
                color: "#fff",
                fontSize: 40,
                cursor: "pointer",
                zIndex: 10000,
              }}
            />
            <IoIosArrowForward
              onClick={() => imgAction("next-img")}
              style={{
                position: "absolute",
                top: "50%",
                right: 20,
                transform: "translateY(-50%)",
                color: "#fff",
                fontSize: 40,
                cursor: "pointer",
                zIndex: 10000,
              }}
            />
            <img
              src={data.image}
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                objectFit: "contain",
              }}
              alt="img"
            />
          </div>
        )}

        {/* Gallery grid */}
        <div className="row" dir="rtl">
          <div className="col-xl-7 offset-xl-3 col-md-12 col-12">
            <div className="text-center mb-lg-8 mb-6">
              <h1 className="tajawal-bold">
                <p style={{ display: "inline" }}>

                اكتشف
                </p>
                  
                  <u className="text-warning mx-2">
                    <span className="text-primary">
                    CLIC SCHOOL
                    </span>
                  </u>
                  <p style={{ display: "inline" }}>

                من خلال معرض الصور
                  </p>
              </h1>
              <p className="lead mb-0">
                استمتعوا بمشاهدة بيئة التعليم المتميزة الذي يجعل مدرستنا الخيار الأفضل لأبنائكم
              </p>
            </div>
          </div>
        </div>

        {/* Masonry grid */}
        <div className="row">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
          >
            <Masonry gutter="20px">
              {images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  style={{
                    width: "100%",
                    display: "block",
                    cursor: "pointer",
                    margin: "5px",
                    borderRadius: "10px",
                  }}
                  alt=""
                  onClick={() => viewImage(image, i)}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};

export default MasonryGallery;