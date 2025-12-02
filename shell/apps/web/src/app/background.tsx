import ReactPlayer from 'react-player';

export const Background = () => {
  return (
    <>
      <div>
        {/*-- Vimeo video as background 
        <ReactPlayer
          src="https://vimeo.com/1126438352"
          controls={false}
          muted={true}
          loop={true}
          playing={true}
          width={'100%'}
          height={'188vw'}
          className="z-0 fixed mx-auto"

          <iframe title="vimeo-player" src="https://player.vimeo.com/video/275710138?h=360c4b50e6" width="640" height="360" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   allowfullscreen></iframe>
        https://vimeo.com/97078294?fl=pl&fe=sh

        <iframe title="vimeo-player" src="https://player.vimeo.com/video/215334862?h=26ca22ca83" width="640" height="360" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   allowfullscreen></iframe>
        

        <iframe title="vimeo-player" src="https://player.vimeo.com/video/676285129?h=761c0f8f99" width="640" height="360" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   allowfullscreen></iframe>
          />
        --*/}
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
    </>
  );
};
