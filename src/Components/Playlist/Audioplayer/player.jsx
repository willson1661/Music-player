import AudioPlayer from 'react-h5-audio-player';
import { useState } from 'react';
import 'react-h5-audio-player/lib/styles.css';
import "./player.css"
import Songs from './Songs';


const Player =()=>{

  
  function myPauseFunction() {
    document.getElementById("animation11").style.animationPlayState = "running";
    document.getElementById("animation12").style.animationPlayState = "running";
    document.getElementById("animation13",).style.animationPlayState = "running";
    document.getElementById("animation14").style.animationPlayState = "running";
    document.getElementById("animation15").style.animationPlayState = "running";
  }
  function myPlayFunction() {
    document.getElementById("animation11").style.animationPlayState = "paused";
    document.getElementById("animation12").style.animationPlayState = "paused";
    document.getElementById("animation13",).style.animationPlayState = "paused";
    document.getElementById("animation14").style.animationPlayState = "paused";
    document.getElementById("animation15").style.animationPlayState = "paused";
  }


    const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? Songs.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack <Songs.length - 1 ? currentTrack + 1 : 0
    );
  };

    return(

        <div className="Player">
      <AudioPlayer
        // style={{ width: "300px" }}
        style={{ borderRadius: "1rem" }}
        autoPlay
        // layout="horizontal"
        src={Songs[trackIndex].src}
      
        onEnded={() => setTrackIndex(i => i + 1)}

      
   
        showSkipControls={true}
        showJumpControls={false}
        header={`Now playing: ${Songs[trackIndex].title}`}
      
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}

        onPlay={myPauseFunction}
        onPause={myPlayFunction}
        // other props here
      />
    
        </div>
    );

}

export default Player;