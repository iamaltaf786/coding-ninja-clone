import React from "react";

function DropDownItem() {
  return (
    <>
      <div className={` w-[1689px] flex justify-center h-[450px] bg-red-600`}>
        {/* left part */}
        <div className="rounded-bl-[40px] w-1/3 bg-[#FBFAF7]">
          <div className="flex flex-col items-end">
            <p className="px-[10px] py-[15px] pr-[119px]">Category</p>
            <div className="rounded-[8px] px-[10px] py-[15px] hover:bg-gray-100 transition duration-200 cursor-pointer">
              For graduates{" "}
              <i className="fa-solid fa-angle-right pl-[60px]"></i>
            </div>
            <div className="rounded-[8px] px-[10px] py-[15px] hover:bg-gray-100 transition duration-200 cursor-pointer">
              For college students{" "}
              <i className="fa-solid fa-angle-right pl-[15px]"></i>
            </div>
          </div>
        </div>

        {/* right part */}
        <div className="rounded-br-[40px] flex flex-wrap w-2/3 bg-white">
          <div className="flex flex-wrap ml-[40px] mt-[30px] w-[700px] h-1/2">
            {/* 3 cards */}
            <div className="flex justify-between w-1/2 h-[100px]">
              <div className="w-[48px] mt-[15px]">
                <img
                  className="p-[11px] border-[0.001px] border-[#aea6a6] rounded-[10px]"
                  src="https://files.codingninjas.in/frame-2087323803-1731448120.svg"
                  alt="logo"
                />
              </div>
              <div className="w-[290px]">
                <p className="text-sm">E&IC Academy, IIT Guwahati</p>
                <p>PG Certification in Data Analytics with GenAI</p>
              </div>
            </div>

            <div className="flex justify-between w-1/2 h-[100px]">
              <div className="w-[48px] mt-[15px]">
                <img
                  className="p-[11px] border-[0.001px] border-[#aea6a6] rounded-[10px]"
                  src="https://files.codingninjas.in/frame-2087323803-1731448120.svg"
                  alt="logo"
                />
              </div>
              <div className="w-[290px]">
                <p className="text-sm">IITM Pravartak</p>
                <p>
                  Professional Certificate in Full Stack Web Development with
                  Generative AI
                </p>
              </div>
            </div>

            <div className="flex justify-between w-1/2 h-[100px]">
              <div className="w-[48px] mt-[15px]">
                <img
                  className="p-[11px] border-[0.001px] border-[#aea6a6] rounded-[10px]"
                  src="https://files.codingninjas.in/frame-2087323803-1731448120.svg"
                  alt="logo"
                />
              </div>
              <div className="w-[290px]">
                <p className="text-sm">E&IC Academy, IIT Guwahati</p>
                <p>PG Certification in Full Stack Web Development with GenAI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DropDownItem;
