import { Box, Divider, IconButton } from '@mui/material';
import React from 'react';
import { VideoData } from '../../utils/types';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './styles.css';
import { useDispatch } from 'react-redux';
import { setPlayPauseVideo, setVideo } from '../../store/actions';

interface Props {
  video: VideoData;
}

const VideoDetail: React.FC<Props> = ({ video }) => {
  const dispatch = useDispatch();

  const handleOnClickPlay = () => {
    dispatch(setVideo(video));
    dispatch(setPlayPauseVideo(true));
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <h3 className={'title'}>{video.title}</h3>
          <IconButton
            color="inherit"
            aria-label="play video"
            component="span"
            onClick={handleOnClickPlay}
          >
            <PlayArrowIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '5px' }}>
          <img
            src={video.thumb || ''}
            style={{ maxWidth: '300px', marginRight: '10px' }}
            alt={video.title}
          />
          <p className={'description'}>{video.description}</p>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default VideoDetail;
