export type VideoData = {
  title: string;
  description: string;
  source: string;
  thumb?: string;
};

export type Category = {
  name: string;
  videos: Array<VideoData>;
};
