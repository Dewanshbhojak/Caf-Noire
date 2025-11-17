import React from "react";
import Navbar from "./navbar";
import "../index.css";

const About = () => {
  return (
    <div className="block bg-fixed text-center bg-[#2E2A26] w-screen">
      <Navbar />

      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#ffdd] underline decoration-2 mt-16 mb-10">
        About Us
      </h2>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:mr-10">
        <p className="w-[90%] sm:w-[80%] lg:w-[60%] m-5 sm:m-10 px-5 sm:px-10 py-8 text-[#ffdd] rounded-3xl shadow-2xl text-base sm:text-lg">
          Café Noire, a part of Coffee Day Global Limited, is India’s favourite
          hangout for coffee and conversations. We strive to provide the best
          experience to our guests. Our coffees are sourced from thousands of
          small coffee planters who made us who we are today and we're glad to
          be a part of their lives...
        </p>

        <div className="opacity-70 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-[url('/image/espresso.jpg')] bg-cover bg-center shadow-2xl mt-5 lg:mt-0"></div>
      </div>

      <hr className="text-center mt-10 w-[80%] mx-auto border-[#ffdd]" />

      <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#ffdd] font-extrabold py-10">
        Beans To Cup
      </h2>

      {/* Beans to Cup Section */}
      <div className="flex flex-col lg:flex-row justify-between py-10">
        <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-[url('/image/about.jpg')] bg-cover bg-center mx-auto lg:ml-20 bg-fixed bg-no-repeat shadow-2xl"></div>

        <p className="w-[90%] sm:w-[80%] lg:w-[60%] m-5 sm:m-10 px-5 sm:px-10 py-8 text-[#ffdd] rounded-3xl shadow-2xl text-base sm:text-lg mt-5 lg:mt-0">
          Coffee making starts with fresh beans, which are carefully roasted to
          bring out their aroma and flavor. The roasted beans are then ground to
          the right consistency depending on the brewing method...
        </p>
      </div>

      <footer className="px-10 py-6 text-center border-t bg-stone-800 border-[#ffdd] text-gray-400">
        © {new Date().getFullYear()} Café Noire All Rights Reserved.
      </footer>
    </div>
  );
};

export default About;
