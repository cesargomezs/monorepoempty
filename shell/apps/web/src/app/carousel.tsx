import React, { useState } from "react";
import { LocalizerProps, i18n as t } from '../i18n/localizer';


interface CarouselProps {
  images: string[];

}


const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const titlescarousel: {[key: number]: string} = {
    1: t["en-US"].carousel.titlecarousel1,
    2: t["en-US"].carousel.titlecarousel2,
    3: t["en-US"].carousel.titlecarousel3,
    4: t["en-US"].carousel.titlecarousel4,
    5: t["en-US"].carousel.titlecarousel5,
  };
  const descriptioncarousel: {[key: number]: string} = {
    1: t["en-US"].carousel.descriptioncarousel1,
    2: t["en-US"].carousel.descriptioncarousel2,
    3: t["en-US"].carousel.descriptioncarousel3,
    4: t["en-US"].carousel.descriptioncarousel4,
    5: t["en-US"].carousel.descriptioncarousel5,
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative overflow-x: hidden; mb-6 h-full w-full">
      <div className="overflow-hidden h-dvh overflow-x: hidden;">
        {images.map((image, index) => (
          
          <div
            key={index}
            className={`absolute inset-0  overflow-x: hidden; transition-transform transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-full" 
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover overflow-x: hidden;"
            />
            <div className="absolute h-full w-full bottom-0 bg-black bg-opacity-60 overflow-x: hidden;">
              <div className="absolute top-1/4 left-1/3 transform -translate-x-1/3 -translate-y-1/3 overflow-x: hidden;">
                <span className="text-orange-600 text-left lg:text-6xl md:text-5xl text-5xl mb-8"> {titlescarousel[index + 1]}</span>
                <span className="inline-block align-[2px] text-left text-stone-300 lg:text-3xl md:text-2xl text:2xl mb-7 font-light'">{descriptioncarousel[index+1]}</span>
              </div>
            </div>


          </div>
        ))}
      
        
      </div>

      {/* Prev Button */}
      <button
        className="absolute overflow-x: hidden; shadow-xl top-1/2 left-0 transform -translate-y-1/2 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500 rounded-full hover:bg-red-300 text-white p-4"
        onClick={prevSlide}
      >
        {t["en-US"].carousel.previousimg}
      </button>

      {/* Next Button */}
      <button
        className="absolute overflow-x: hidden; shadow-xl top-1/2 right-3 transform -translate-y-1/2 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500 rounded-full hover:bg-red-300 text-white p-4"
        onClick={nextSlide}
      >
        <span className="text-white" >{t["en-US"].carousel.nextimg}</span>
      </button>
    </div>
  );
};

export default Carousel;