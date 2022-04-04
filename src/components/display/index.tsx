import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { playPauseSelector, videoSelector, volumeSelector } from '../../store/selectors';
import React, { useEffect, useRef } from 'react';
import { setPlayPauseVideo } from '../../store/actions';

const Display = () => {
  const currentVideo = useSelector(videoSelector);
  const currentVolume = useSelector(volumeSelector);
  const currentVideoState = useSelector(playPauseSelector);
  const videoRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (videoRef.current) {
      const videoState = videoRef.current as unknown as HTMLVideoElement;
      videoState.volume = currentVolume / 100;
    }
  }, [currentVolume]);

  useEffect(() => {
    if (videoRef.current) {
      const videoState = videoRef.current as unknown as HTMLVideoElement;
      currentVideoState ? videoState.play() : videoState.pause();
    }
  }, [currentVideoState, currentVideo]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {currentVideo && <h3>{currentVideo.video.title}</h3>}
      <video
        height="400px"
        ref={videoRef}
        src={currentVideo.video.source || ''}
        controls
        onEnded={() => {
          dispatch(setPlayPauseVideo(false));
        }}
      />
    </Box>
  );
};

export default Display;
