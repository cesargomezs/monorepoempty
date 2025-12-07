import { About } from "./about";
import { Background } from "./background";
import ImagesCarousel from "./carouselimg";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { useAppSelector } from '../redux/hooks';


export function App() {
  const locale = useAppSelector((state) => state.localizer.locale);
  
  return (
    <div>
      <main className="relative">
        <Background/>  
      <div className="absolute z-20 h-full" >
        <Hero locale={locale} />    
        <div className="bg-white dark:bg-slate-900 w-[100vw]">
              <About locale={locale} />
              <ImagesCarousel locale={locale}/>
              <Footer locale={locale} />
        </div>
      
      </div>
      </main>
    </div>
  );
}

export default App;


