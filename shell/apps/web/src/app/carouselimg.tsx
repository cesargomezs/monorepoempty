import React from "react";
import Carousel from "./carousel";
import { LocalizerProps, i18n as t } from '../i18n/localizer';


const ImagesCarousel: React.FC<LocalizerProps> = ({ locale })  => {

  const images: string[] = [
    "https://raw.githubusercontent.com/cesargomezs/monorepoempty/refs/heads/main/shell/apps/web/src/assets/images/0.png",
    "https://raw.githubusercontent.com/cesargomezs/monorepoempty/refs/heads/main/shell/apps/web/src/assets/images/1.png",
    "https://raw.githubusercontent.com/cesargomezs/monorepoempty/refs/heads/main/shell/apps/web/src/assets/images/2.png",
    "https://raw.githubusercontent.com/cesargomezs/monorepoempty/refs/heads/main/shell/apps/web/src/assets/images/3.png",
    "https://raw.githubusercontent.com/cesargomezs/monorepoempty/refs/heads/main/shell/apps/web/src/assets/images/4.png",
    
  ];

  return (
    <div className="App overflow-y-hidden">
      <header className="App-header">
        <h2 className="lg:text-3xl md:text-2xl text-1xl dark:text-slate-200 text-blue-900 font-bold text-center my-6">
        {t[locale].carousel.title}
        </h2>
      </header>

      <main className=" bg-slate-900">
        <Carousel images={images} locale={locale} />
      </main>
    </div>
  );
};

export default ImagesCarousel;