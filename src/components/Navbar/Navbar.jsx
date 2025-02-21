import React, { useState } from "react";
import DropDownItem from "./DropDownItem";

function Navbar() {
  const [showDropDown, setShowDropDown] = useState(false);
  let dropdownTimer;

  return (
    <div className="h-[70px] relative flex justify-around items-center shadow-md bg-white">
      <div className="flex justify-center gap-[35px]">
        <img
          src="https://files.codingninjas.com/new-cn-logos-1-1733819445.svg"
          alt="Coding Ninja's Logo"
          className="w-[140px]"
        />
        <button className="h-[44px] px-[20px] font-medium rounded-[8px] hover:bg-gray-100 transition duration-200 cursor-pointer">
          Job Bootcamps <i className="fa-solid fa-angle-down"></i>
        </button>

        {/* Dropdown Wrapper */}
        <div
          className="relative"
          onMouseEnter={() => {
            clearTimeout(dropdownTimer);
            setShowDropDown(true);
          }}
          onMouseLeave={() => {
            dropdownTimer = setTimeout(() => setShowDropDown(false), 200);
          }}
        >
          <button className="h-[44px] px-[20px] font-medium rounded-[8px] hover:bg-gray-100 transition duration-200 cursor-pointer">
            IIT Certifications <i className="fa-solid fa-angle-down"></i>
          </button>

          {/* Show Dropdown Only When Needed */}
          {showDropDown && (
            <div className="w-full absolute left-[-770px] mt-[13px] top-full bg-red-950 shadow-lg z-50">
              <DropDownItem />
            </div>
          )}
        </div>
      </div>

      {/* Login Button */}
      <div className="flex justify-center">
        <button className="h-[44px] text-white rounded-[8px] px-[20px] py-[10px] bg-amber-600 hover:bg-amber-400 transition duration-200 cursor-pointer">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
