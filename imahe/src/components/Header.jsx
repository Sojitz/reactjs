import React from "react";
import logo from "../assets/logo.jpg";

const Header = ({ scrollToNextSection }) => {
  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-start sm:justify-between px-6 sm:px-10 py-4 sticky top-0 z-50 border-b border-white/10 gap-4 sm:gap-6"
      style={{
        backgroundImage: "linear-gradient(135deg, #1A1A1A, #2A3B4C, #1F2E3D)",
        boxShadow: "inset 0 0 60px rgba(42, 123, 155, 0.15)",
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full">
        <div
          className="flex items-center gap-3 hover:opacity-50"
          onClick={() => (window.location.href = "/")}
        >
          <div className="w-[50px] h-[50px] bg-white rounded-full overflow-hidden">
            <img
              src={logo || "/placeholder.svg"}
              alt="Imahe Collage"
              className="w-full h-full object-cover rounded-full border border-[#5a3e36]"
            />
          </div>
          <span
            className="text-[24px] sm:text-[30px] text-[#F5F5F5] font-bold tracking-wider cursor-pointer	"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Imahe
          </span>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-10 ml-30">
          <button
            onClick={scrollToNextSection}
            className="bg-transparent text-white text-xl px-4 py-2 rounded-md hover:opacity-50 transition w-full sm:w-auto border-b border-white/10"
          >
            Sort
          </button>
          <button className="bg-transparent text-white px-4 text-xl py-2 rounded-md hover:opacity-50 transition w-full sm:w-auto border-b border-white/10">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
