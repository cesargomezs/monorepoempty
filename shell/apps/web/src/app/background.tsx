import ReactPlayer from 'react-player';
import LanguageSelector from './languaje';

export const Background = () => {
  return (
    <>
      <div>
        <ReactPlayer
          src="https://player.vimeo.com/video/676285129?h=761c0f8f99"
          controls={false}
          muted={true}
          loop={true}
          playing={true}
          width={'100%'}
          height={'56vw'}
          className="z-0 fixed mx-auto"
        />
      </div>
      <div className="z-1 fixed mx-auto w-[100vw] h-[100vh] bg-[#272554b0]"></div>
      <LanguageSelector />
    </>
  );
};
