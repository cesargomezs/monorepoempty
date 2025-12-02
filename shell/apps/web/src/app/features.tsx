import { LocalizerProps, i18n as t } from '../i18n/localizer';
import React, { useState } from 'react';



export const Features: React.FC<LocalizerProps> = ({ locale }) => {

const sectionData=  [
    {
        title: 'cero',
        description: 'cero description',
        image: '/src/assets/images/0.png',
        className: 'py-10 border-b border-slate-700 md:py-0 md:border-r md:border-b-0 md:px-10',
        },
        {
        title: 'uno',
        description: 't[locale].features.feature2.description',
        image: '/src/assets/images/1.png',
        className: 'py-10 border-b border-slate-700 md:py-0 md:border-r md:border-b-0 md:px-10',
        },
        {
        title: 'tres',
        description: 't[locale].features.feature3.description',
        image: '/src/assets/images/3.png',
        className: 'py-10 border-b border-slate-700 md:py-0 md:border-r md:border-b-0 md:px-10',
        }   
    ];

    const images = [
        '/src/assets/images/0.png?text=Slide+0>',
        '/src/assets/images/1.png?text=Slide+1>',
        '/src/assets/images/2.png?text=Slide+2>',
        '/src/assets/images/3.png?text=Slide+3>',
        '/src/assets/images/4.png?text=Slide+4>'
      ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

  return (

<div>
  
    {/*
    <div className="relative overflow-hidden rounded-lg md:h-96">
         
        <div data-carousel-item>
            <img src="/src/assets/images/63293.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div data-carousel-item>
            <img src="/src/assets/images/hero-latino.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>

    </div>*/}

    {/* 
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    </div>

    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-300 dark:bg-amber-400 group-hover:bg-white/50 dark:group-hover:bg-red-300 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-gray-800 dark:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-2 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-300 dark:bg-amber-400 group-hover:bg-white/50 dark:group-hover:bg-red-300 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-gray-800 dark:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
    */}
    

    
      <div className="overflow-hidden relative h-64">
        
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative inset-0 transition-transform transform ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
         <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            <span className='absolute'>
              The Beauty of Nature
            </span>
            <span>
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </span>
          </div>
        ))}
      </div>
        


  
    {/*
      <div className="absolute">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
            <div className="absolute inset-0 grid h-full w-full bg-black/75">
                <div className="h-[440px] lg:h-[720px] xl:max-w-[800px] lg:max-w-[500px] max-w-[768] p-10 flex flex-col top-20">
                    <span className='inline-block text-right text-white lg:text-6xl md:text-5xl text-5xl mb-2 '>
                    The Beauty 
                    </span>
                    <br/>
                    <span className='inline-block align-[2px] text-right text-white lg:text-3xl md:text-2xl text:2xl mb-8 font-light'>
                    It is not so much for its beauty that the forest makes a claim
                    upon men&apos;s hearts, as for that subtle something, that quality
                    of air that emanation from old trees, that so wonderfully changes
                    and renews a weary spirit.
                    </span>
                </div>

                <button
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
                    onClick={prevSlide}
                >
                    Prev
                </button>
                <button
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
                    onClick={nextSlide}
                >
                    Next
                </button>
            </div>
        </div>
        */}
</div>

  );
};



