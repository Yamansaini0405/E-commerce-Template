import React, { useState, useEffect } from "react";

const Slider = () => {
  const images = [
    "https://media.istockphoto.com/id/1446098147/photo/shopping-happy-and-portrait-of-customer-with-bag-after-shopping-spree-buying-retail-fashion.jpg?s=612x612&w=0&k=20&c=OFL3OPm9SPaaUveM_z3-0DaFcvorK4H_wK4KnmSY0Og=",
    "https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?cs=srgb&dl=pexels-olly-1050244.jpg&fm=jpg",
    "https://www.shutterstock.com/image-photo/buyers-couple-shopping-using-cellphone-600nw-2116844222.jpg",
    "https://www.shutterstock.com/image-photo/fashion-woman-shopping-bags-walking-260nw-2479593051.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoplayInterval = 3000; // 4 seconds

  useEffect(() => {
    let autoplayTimer;

    if (isAutoPlaying) {
      autoplayTimer = setInterval(() => {
        goToNext();
      }, autoplayInterval);
    }

    return () => clearInterval(autoplayTimer);
  }, [isAutoPlaying, currentIndex, autoplayInterval]);

  const goToPrevious = () => {
    // setIsAutoPlaying(false);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    // setIsAutoPlaying(false);
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-[80%] h-[400px] md:h-[500px] lg:h-[400px] m-auto rounded-2xl mt-10">
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10 rounded-2xl">
        <button onClick={goToPrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white bg-red-600 rounded-full opacity-[0.6]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10">
        <button onClick={goToNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white bg-red-600 rounded-full opacity-[0.6]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="w-full h-full overflow-hidden rounded-2xl">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute rounded-2xl w-full h-full bg-cover object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10 rounded-2xl">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-2 rounded-xl cursor-pointer transition-all duration-300 ${
              index === currentIndex
                ? "bg-red-600 scale-125"
                : "bg-red-300 hover:bg-red-500"
            }`}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
