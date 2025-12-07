import React from 'react';

import { LocalizerProps, i18n as t } from '../i18n/localizer';


export const About: React.FC<LocalizerProps> = ({ locale }) => {

  return (
    <section className="py-4 px-6" id="about">
      <div className="py-8">
      
        <h2 className="text-center lg:text-5xl md:text-4xl text-3xl mb-6 dark:text-slate-200 text-blue-900">
        {t[locale].about.title}
        </h2>

        <div className="flex gap-[40px] flex-wrap justify-center items-center content-center">

          <div className="card shadow-xl shadow-gray-900 mx-auto max-w-sm items-center rounded-xl bg-sky-200 p-11 outline-black/5 dark:bg-amber-400">
            <p className="p-6 hover:shadow-warm transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-border/50">
              {t[locale].about.destiny1}
            </p>
            
          </div>
          
          <div className="card shadow-xl shadow-gray-900 mx-auto max-w-sm items-center rounded-xl bg-sky-200 p-11 outline-black/5 dark:bg-amber-400">
            <p className="p-6 hover:shadow-warm transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-border/50">
              {t[locale].about.destiny2}
            </p>
          </div>

          <div className="card shadow-xl shadow-gray-900 mx-auto max-w-sm items-center rounded-xl bg-sky-200 p-11 outline-black/5 dark:bg-amber-400">
            <p className="p-6 hover:shadow-warm transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-border/50">
              {t[locale].about.destiny3}
            </p>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="flex gap-[40px] top-40 flex-wrap justify-center items-center  ">
          
          <div className="card shadow-xl shadow-gray-900 mx-auto max-w-sm items-center rounded-xl bg-white p-11 outline-black/5 dark:bg-white">
            <img  src="/src/assets/images/logoVision.png" className="w-32 h-29 mb-1"/>
            <h2 className="text-center lg:text-2xl md:text-4xl text-3xl mb-6 text-blue-900">
            {t[locale].about.vision}
            </h2>
            <p className="text-center lg:text-xl md:text-lg text-md mb-4 text-zinc-700 max-w-[800px] mx-auto">
              {t[locale].about.visiondesc}
            </p>
          </div>

          <div className="card shadow-xl shadow-gray-900 mx-auto max-w-sm items-center rounded-xl bg-white p-11 outline-black/5 dark:bg-white">
          <img src="/src/assets/images/logoMision.png" className="w-32 h-29 mb-0 items-center"/>
            <h2 className="text-center lg:text-2xl md:text-4xl text-3xl mb-6 text-blue-900">
            {t[locale].about.mission}
            </h2>
            <p className="text-center lg:text-xl md:text-lg text-md mb-4 text-zinc-700 max-w-[800px] mx-auto">
              {t[locale].about.missiondesc}
            </p>
          </div>

        </div>
      </div>
    </section>
    
  );
};

