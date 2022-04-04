import { VideoData } from '../utils/types';
import { VideoActions, SET_PLAY_PAUSE_VIDEO, SET_VIDEO, SET_VOLUME } from './action-types';

export type VideoState = {
  readonly playPauseVideo: boolean;
  readonly volume: number;
  readonly video: VideoData;
};

const initialState: VideoState = {
  playPauseVideo: false,
  volume: 50,
  video: {
    title: '',
    description: '',
    source: ''
  }
};

const reducer = (state = initialState, action: VideoActions) => {
  switch (action.type) {
    case SET_VOLUME:
      return { ...state, volume: action.payload };
    case SET_PLAY_PAUSE_VIDEO:
      return { ...state, playPauseVideo: action.payload };
    case SET_VIDEO:
      return { ...state, video: action.payload };
    default:
      return state;
  }
};

export default reducer;
