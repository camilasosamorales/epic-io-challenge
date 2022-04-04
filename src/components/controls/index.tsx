import { Button, Slider } from '@mui/material';
import { Box } from '@mui/system';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import React, { useEffect, useState } from 'react';
import Categories from '../categories';
import { Category } from '../../utils/types';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayPauseVideo, setVolume } from '../../store/actions';
import { playPauseSelector, volumeSelector } from '../../store/selectors';

interface Props {
  categories?: Array<Category>;
}

const Controls: React.FC<Props> = ({ categories }) => {
  const [videoPlay, setVideoPlay] = useState(false);
  const [volume, setVolumeVideo] = useState(50);
  const currentVideoState = useSelector(playPauseSelector);
  const currentVolume = useSelector(volumeSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    setVideoPlay(currentVideoState);
  }, [currentVideoState]);

  useEffect(() => {
    setVolumeVideo(currentVolume);
  }, [currentVolume]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    const volumeValue = newValue as number;
    setVolumeVideo(volumeValue);
    dispatch(setVolume(volumeValue));
  };

  const togglePlayPauseButton = () => {
    setVideoPlay((prevState) => {
      dispatch(setPlayPauseVideo(!prevState));
      return !prevState;
    });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Button
          variant="contained"
          endIcon={!videoPlay ? <PlayArrowIcon /> : <PauseIcon />}
          onClick={togglePlayPauseButton}
        >
          {!videoPlay ? 'Play' : 'Pause'}
        </Button>
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '200px' }}>
          <VolumeDown />
          <Slider aria-label="Volume" value={volume} onChange={handleChange} />
          <VolumeUp />
        </Box>
      </Box>
      <Categories categories={categories} />
    </Box>
  );
};

export default Controls;
