import { createSelector } from 'reselect';
import reducer, { VideoState } from './reducer';

export type RootState = ReturnType<typeof reducer>;

const getReducer = (state: RootState) => state;

export const volumeSelector = createSelector(
  (state: VideoState) => getReducer(state).volume,
  (volume) => volume
);

export const videoSelector = createSelector(
  (state: VideoState) => getReducer(state),
  (state) => state
);

export const playPauseSelector = createSelector(
  (state: VideoState) => getReducer(state).playPauseVideo,
  (playPauseVideo) => playPauseVideo
);
