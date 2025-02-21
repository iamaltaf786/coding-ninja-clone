import React from "react";

function Home() {
  return (
    <>
      {/* Parent div with dots + gradient overlay */}
      <div className="relative flex justify-center bg-[#15181a]">
        {/* Dots Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10px_10px,_white_2px,_transparent_1px)] bg-[size:1cm_1cm]"></div>

        {/* Gradient Overlay to Blur Corners */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(21,24,26,0.9)_5%,rgba(21,24,26,0.7)_30%,rgba(21,24,26,0.5)_60%,rgba(21,24,26,0)_90%)]"></div>

        {/* Content Section */}
        <div className="relative w-[80%] h-[1000px] mt-[100px] flex flex-col items-center">
          <p className="text-[#01a3ff] text-xl font-[700]">
            Restricted by opportunities?
          </p>
          <p className="w-[600px] text-white mt-[20px] font-bold text-6xl">
            Get the tech career you deserve. Faster.
          </p>
          <p className="mt-[30px] text-[#838485]">
            Structured coding courses that get you there faster with confidence.
          </p>
          <button className="font-medium text-xl bg-[#f66c3b] mt-[50px] px-[24px] py-[12px] rounded-[5px] text-white">
            Explore offerings{" "}
            <i className="fa-solid fa-angles-down ml-[5px]"></i>{" "}
          </button>

          {/* Video Section */}
          <div className="w-[900px] rounded-[8px] mt-[100px]">
            <video
              className="rounded-[8px]"
              src="https://files.codingninjas.com/episodic-promo_7-sec-1728388305.mp4"
              controls
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
