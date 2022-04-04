import { VideoData } from '../utils/types';
export const SET_PLAY_PAUSE_VIDEO = 'video/set-play-pause';
export const SET_VIDEO = 'video/set-video';
export const SET_VOLUME = 'video/set-volume';

interface setPlayPauseVideo {
  type: typeof SET_PLAY_PAUSE_VIDEO;
  payload: boolean;
}

interface setVideo {
  type: typeof SET_VIDEO;
  payload: VideoData;
}

interface setVolume {
  type: typeof SET_VOLUME;
  payload: number;
}

export type VideoActions = setPlayPauseVideo | setVideo | setVolume;
