import React, { useRef } from 'react';

interface AudioPlayerProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioRef }) => {


  return (
    <div>
      {/* JSX audio element with the ref */}
      <audio className='hidden' ref={audioRef} controls>
        <source
          src="/sounds/sound.mp3"
          type="audio/mpeg"
        />
      
      </audio>

    </div>
  );
};

export default AudioPlayer;
