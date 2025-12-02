import React from "react";
import Carousel from "./carousel";
import { LocalizerProps, i18n as t } from '../i18n/localizer';


const ImagesCarousel: React.FC<LocalizerProps> = ({ locale })  => {
  const images: string[] = [
    "/src/assets/images/0.png",
    "/src/assets/images/1.png",
    "/src/assets/images/2.png",
    "/src/assets/images/3.png",
    "/src/assets/images/4.png",
    
  ];

  return (
    <div className="App h-full w-full">
      <header className="App-header">
        <h1 className="text-4xl font-bold text-center my-6">
        {t[locale].carousel.title}
        </h1>
      </header>

      <main className="items-center bg-slate-900">
        <span className="text-white text-center mb-4">Strengthening local economies by connecting residents with businesses and services in their neighborhood, promoting local consumption and facilitating an ecosystem of exchange and collaboration.</span>
        <Carousel images={images} />
      </main>
    </div>
  );
};

export default ImagesCarousel;