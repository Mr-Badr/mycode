"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiChevronRight } from "react-icons/bi"; // Importing icons
import styles from "./CardList.module.css";
import DatePicker from "../_components/DatePicker";

const CardList = ({ params, data }) => {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = async (slugPart) => {
    setIsAnimating(true);
    const newSlug = params.slug ? [...params.slug, slugPart] : [slugPart];
    await router.push(`/student/levels/${newSlug.join("/")}`);
    setIsAnimating(false);
  };

  const handlePrevious = () => {
    router.back();
  };

  // Static titles and subtitles in Arabic
  const header = "استعراض المسارات الدراسية";
  const paragraph = "تصفح المسارات حسب السنة الدراسية";
  
  return (
    <>
      {/* Static header section */}
      {/* <section className="bg-primary">
        <div className="container">
          <div className="align-items-center row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="py-4 py-lg-6">
                <h1 className="mb-1 text-white display-4">{header}</h1>
                <p className="text-white mb-0 lead">{paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
      <section className="py-6">
  <div className="">
    <div className="d-flex justify-content-between align-items-center">
      <div className="left-content">
        <h4 className="mb-3 mb-md-0">المجموع 19 مستوى</h4>
      </div>
      <div className="right-content">
        <div className="mb-3">
          <DatePicker />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Card list section */}
      <section className="">
        <div className="row">
          {data.map((item) => (
            <div
              key={item.slug}
              className="col-xl-6 col-lg-4 col-md-6 col-sm-12 mb-4"
            >
              <div
                className={`${styles.card} card-hover`}
                onClick={() => handleClick(item.slug)}
              >
                <div className="d-flex justify-content-between align-items-center p-4">
                  <div className="d-flex">
                    <img
                      src={
                        item.image
                          ? `/static/media/${item.image}.svg`
                          : "https://geeks-react.netlify.app/static/media/path-react.37d09638eeae2c328a22de718d160374.svg"
                      }
                      alt=""
                      className="avatar-md"
                    />
                    <div className={`${styles.ms3} ms-3`}>
                      <h4 className={`${styles.mb1} mb-1`}>{item.name}</h4>
                      <p className={`${styles.fs6} mb-0 fs-6`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next and Previous Buttons */}
      <section className="bg-light py-4">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-auto">
              <button className="btn btn-primary" onClick={handlePrevious} disabled={!params.slug}>
                <BiChevronRight size={24} />
                السابق
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardList;
