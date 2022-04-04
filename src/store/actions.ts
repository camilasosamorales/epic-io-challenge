import { VideoData } from '../utils/types';
import { SET_VIDEO, SET_PLAY_PAUSE_VIDEO, SET_VOLUME, VideoActions } from './action-types';

export const setVideo = (video: VideoData): VideoActions => ({
  type: SET_VIDEO,
  payload: video
});

export const setPlayPauseVideo = (play: boolean): VideoActions => ({
  type: SET_PLAY_PAUSE_VIDEO,
  payload: play
});

export const setVolume = (volume: number): VideoActions => ({
  type: SET_VOLUME,
  payload: volume
});
