import ReactPlayer from 'react-player';
import LanguageSelector from './languaje';
import ThemeSwitcher from '../components/themeSwitcher';

export const Background = () => {
  return (
    <>
      <div>
        <ReactPlayer
          src="https://player.vimeo.com/video/950018738?h=6d8edaba23"
          controls={false}
          muted={true}
          loop={true}
          playing={true}
          width={'110vw'}
          height={'100vh'}
          className="z-0 fixed mx-auto"
        />
      </div>
      <div className="z-1 fixed mx-auto w-[100vw] h-[100vh] bg-[#272554b0]"></div>
      <div className='absolute'>
        <ThemeSwitcher /> 
      </div>
        <LanguageSelector />
    </>
  );
};
