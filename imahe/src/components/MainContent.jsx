import React, { useRef } from "react";
import Header from "./Header"; // Import the Header component
import collageImage from "../assets/collageImage.jpg";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const collageImages = [
  "images/imagescollage1.jpg",
  "images/imagescollage2.jpg",
  "images/imagescollage3.jpg",
  "images/imagescollage4.jpg",
  "images/imagescollage5.jpg",
];

function MainContent() {
  const nextSectionRef = useRef(null);

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main
        className="relative flex flex-col md:flex-row items-center justify-between p-8  min-h-screen overflow-hidden bg-cover bg-center h-screen w-full"
        style={{ backgroundImage: "url('/images/film.jpg')" }}
      >
        <div className="md:w-1/2 z-10 p-8 md:p-12 lg:p-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#242525] leading-tight mt-[-100px] mb-4">
            Welcome to <span className="text-[#242525]">Imahe</span>
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-[#F5F5F5] font-semibold leading-snug mb-8">
            Where Every Image Finds Its Place
          </h2>

          <button
            onClick={scrollToNextSection}
            aria-label="Scroll to next section"
            className="flex items-center gap-2 bg-[#525a61] hover:bg-stone-800 text-white px-6 py-3 rounded-lg transition-colors duration-300 text-lg font-medium"
          >
            Sort now!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center items-center p-4 md:p-8">
          <motion.img
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.8, 0.25, 1],
              delay: 0.2,
            }}
            src={collageImage || "/placeholder.svg"}
            alt="Collage of curated images"
            className="w-full max-w-xl rounded-xl shadow-2xl border-4 border-stone-600/20 transition-transform hover:scale-105 duration-500 mt-[-90px]"
          />
        </div>
      </main>
      {/* <section
        ref={nextSectionRef}
        className="min-h-screen bg-[#A9BACD] p-8 md:p-16 flex flex-col items-center"
      >
        next page *
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 pt-20 mb-12 text-center">
            Discover Your Perfect Image Organization
          </h2>

          <div className="bg-[#4D687F] p-8 md:p-12 rounded-2xl shadow-lg">
            <p className="text-stone-100 text-lg leading-relaxed">
              Imahe helps you effortlessly organize, categorize, and rediscover
              your visual memories. Our intelligent sorting system learns your
              preferences to create a personalized gallery that grows with your
              collection.
            </p>
          </div>
        </div>
      </section> */}
      {/*<section
        ref={nextSectionRef}
        className="min-h-screen bg-[#A9BACD] p-8 md:p-16 flex flex-col items-center"
        style={{
          backgroundImage: "linear-gradient(135deg, #1A1A1A, #2A3B4C, #1F2E3D)",
          boxShadow: "inset 0 0 60px rgba(42, 123, 155, 0.15)",
        }}
      >
       This is a NEW SEPARATE div just for the Swiper slider 
        <div className="w-full flex justify-center items-center p-4 md:p-8">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className="w-full max-w-xl rounded-xl shadow-2xl border-4 border-stone-600/20"
          >
            {collageImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="w-full h-[200px] object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>*/}
    </>
  );
}

export default MainContent;
