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
    <div className="App overflow-y-hidden">
      <header className="App-header">
        <h1 className="text-4xl font-bold text-center my-6">
        {t[locale].carousel.title}
        </h1>
      </header>

      <main className=" bg-slate-900">
        <Carousel images={images} locale={locale} />
      </main>
    </div>
  );
};

export default ImagesCarousel;