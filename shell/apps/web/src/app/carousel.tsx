import React, { useState } from "react";
import { LocalizerProps, i18n as t } from '../i18n/localizer';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative mb-6">
      <div className="overflow-hidden relative h-80">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        className="absolute shadow-xl top-1/2 left-0 transform -translate-y-1/2 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500 rounded-full hover:bg-red-300 text-white p-4"
        onClick={prevSlide}
      >
        {t["en-US"].carousel.previousimg}
      </button>

      {/* Next Button */}
      <button
        className="absolute shadow-xl top-1/2 right-3 transform -translate-y-1/2 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500 rounded-full hover:bg-red-300 text-white p-4"
        onClick={nextSlide}
      >
        <span className="text-white" >{t["en-US"].carousel.nextimg}</span>
      </button>
    </div>
  );
};

export default Carousel;