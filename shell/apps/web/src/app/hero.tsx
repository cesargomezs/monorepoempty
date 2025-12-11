import React from 'react';
import { LocalizerProps, i18n as t  } from '../i18n/localizer';
import LanguageSelector from './languaje';

export const Hero: React.FC<LocalizerProps> = ({ locale }) => {
  const handleOnClick = () => {
    window.location.href = 'monorepoempty/#about';
  };

  //console.log('Rendering Hero component with locale:', locale);
  return (
    <section>
      
      <h1 className="text-white text-center text-2xl py-4">
        {t[locale].title}
        <span className="text-white"> {t[locale].title2}</span>
      </h1>
      <hr className="mx-10 border-0 h-[1.2px] bg-zinc-400" />
      <div className="h-[440px] lg:h-[720px] xl:max-w-[800px] lg:max-w-[500px] max-w-[768] p-10 flex flex-col items-left justify-center">
        <h2 className="text-white text-left lg:text-6xl md:text-5xl text-5xl mb-2">
          {t[locale].subtitle}
          <span className=" text-orange-600 text-left lg:text-6xl md:text-5xl text-5xl mb-2"> {t[locale].subtitle2 }</span>
          
        </h2>
      
        <h3 className="text-white text-left lg:text-3xl md:text-2xl text:2xl mb-8 font-light">
          {t[locale].slogan}
        </h3>
        <button
          onClick={handleOnClick}
          className="w-[250px] py-2 card shadow-xl shadow-gray-900 text-white bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500 rounded-full hover:bg-red-300"
        >
          {t[locale].joinUs}
        </button>
      </div>
    </section>
  );
};
