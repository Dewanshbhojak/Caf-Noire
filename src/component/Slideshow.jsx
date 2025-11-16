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
  }, []);

  return (
    <div className="  rounded-xl shadow-lg">
      
    
      <div
      className="h-[600px] w-full  bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${slides[current]})` }}
    >
      {/* Content here */}
    </div>
     

      {/* Left Button */}
      <button
        onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
      >
        ‹
      </button>

      {/* Right Button */}
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
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
              current === index ? "bg-white" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
