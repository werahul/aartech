import React, { useState } from 'react';
import { investerVideo } from '../../assets/videos';// Update the path to your video file
import { play } from '../../assets/invester'; // Update the path to your play button image

const VideoComponent = () => {
   
    const [isPlaying, setIsPlaying] = useState(false);

  ;

  const togglePlay = () => {
    var video = document.getElementById('investerVideo');
    var playButton = document.getElementById('playPause');
    
    if (video.paused) {
      video.play();
      video.muted = false; // Unmute the video
      setIsPlaying(true);
      playButton.classList.add('hide');
    } else {
      video.pause();
      setIsPlaying(false);
      playButton.classList.remove('hide');
    }
  };

    return (
        <div className="lg:w-[843px] lg:h-[474px] h-[200px] flex justify-center items-center cursor-pointer relative bg-zinc-300 lg:mt-9 mt-6">
            <video
                src={investerVideo}
                className="lg:h-[474px] h-[200px] w-full object-cover"
                muted="false"
                controls={isPlaying}
                id='investerVideo'
                
            ></video>
            <img src={play} alt="Play" onClick={togglePlay} className="absolute top-auto" id='playPause' />
            
        </div>
    );
}

export default VideoComponent;
