import React from "react";
import logo from "../assets/logo.jpg";

const Header = ({ scrollToNextSection }) => {
  return (
    <div
      className="flex items-center justify-end p-2"
      style={{ backgroundImage: "url('/images/header.jpg')" }}
    >
      <div
        className="flex items-center gap-3 hover:opacity-50 cursor-pointer"
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
          className="text-[24px] sm:text-[30px] text-[#F5F5F5] font-bold tracking-wider"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          IMAHE
        </span>
      </div>
    </div>
  );
};

export default Header;
