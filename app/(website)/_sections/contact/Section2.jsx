import React from "react";
import "./Section2.module.css";

const Map = async () => {
  /* SBA */
  const map1 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.703440861725!2d-0.6207393!3d35.2138552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7eff142b7e9fbb%3A0x746e72c8cf5c18ba!2sClic%20school%20SBA!5e0!3m2!1sar!2sma!4v1717084726438!5m2!1sar!2sma";
  /* Djelfa */
  const map2 =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13125.57060550397!2d3.2493004!3d34.6700383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1289cfdccedc26c9%3A0x4a9fbba18df6dab!2zQ2xpY2sgU2Nob29sIERqZWxmYSAtINmD2YTZitmDINiz2YPZiNmEINin2YTYrNmE2YHYqQ!5e0!3m2!1sar!2sma!4v1717087082208!5m2!1sar!2sma";
  /* Mohammedia */
  const map3 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.5949198422195!2d3.136773424797911!3d36.73228877152585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e53139082042d%3A0xaaa0a02176fd9740!2zQ2xpY2sgU2Nob29sIEFsZ2VyINmF2K_Ysdiz2Kkg2KfZhNmF2K3Zhdiv2YrYqSDYp9mE2K7Yp9i12Kk!5e0!3m2!1sar!2sma!4v1717087176694!5m2!1sar!2sma";

  return (
    <section className="container my-lg-8 relative md:pt-20 pt-16 text-center">
      <div className="row">
        <div className="col-xl-12 col-md-12 col-12">
          <div className="mb-6 mb-lg-8">
            <h2 className="tajawal-bold tajawal-bold">استكشف مواقعنا</h2>
            <h2 className="tajawal-bold tajawal-bold">
              اكتشف حيث يتواجد
              <u className="text-warning">
                <span className="text-primary mx-2">الإبداع والتعليم</span>
              </u>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Map 1 */}
        <div className="col-lg-12 col-md-12 col-12">
          <div className="card my-1 border">
            <h2 className="text-lg font-semibold my-2 bg-white">
              سيدي بلعباس، الجزائر{" "}
            </h2>
          </div>
          <div
            className="card mb-4 rounded-md overflow-hidden"
            style={{
              outline: "2px solid #47474771",
            }}
          >
            <iframe
              title="Google Map"
              src={map1}
              style={{ border: "0", width: "100%", height: "40vh" }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Map 2 */}
        <div className="col-lg-6 col-md-12 col-12">
          <div className="card my-1 border">
            <h2 className="text-lg font-semibold my-2 bg-white">
              Click School Djelfa - كليك سكول الجلفة
            </h2>
          </div>
          <div
            className="card mb-4 border-light border-gray-300 rounded-md overflow-hidden"
            style={{
              outline: "2px solid #47474771",
            }}
          >
            <iframe
              title="Google Map"
              src={map2}
              style={{ border: "0", width: "100%", height: "40vh" }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Map 3 */}
        <div className="col-lg-6 col-md-12 col-12">
          <div className="card my-1 border">
            <h2 className="text-lg font-semibold my-2 bg-white">
              Click School Alger مدرسة المحمدية الخاصة
            </h2>
          </div>
          <div
            className="card mb-4 rounded-md overflow-hidden"
            style={{
              outline: "2px solid #47474771",
            }}
          >
            <iframe
              title="Google Map"
              src={map3}
              style={{ border: "0", width: "100%", height: "40vh" }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
