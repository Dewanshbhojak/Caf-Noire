import React, { useState, useEffect } from "react";

const Slideshow = () => {
  const slides = [
    "/image/slideshow1.png",
    "/image/coffee.io-background.jpg",
    "/image/Slideshow2.jpg"
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative rounded-xl shadow-lg overflow-hidden">

      {/* Slide */}
      <div
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{ backgroundImage: `url(${slides[current]})` }}
      ></div>

      {/* Left Button */}
      <button
        onClick={() =>
          setCurrent((current - 1 + slides.length) % slides.length)
        }
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
      >
        ‹
      </button>

      {/* Right Button */}
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              current === index ? "bg-white scale-110" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow
