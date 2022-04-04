import { client } from './client';
import { VideoData, Category } from '../utils/types';

export const getVideos = (url: string): Promise<Array<Category>> => {
  return client
    .get(url)
    .then((response) => {
      return response.data.categories.map((category: any) => ({
        name: category.name,
        videos: category.videos.map(
          (video: any) =>
            ({
              title: video.title,
              description: video.description,
              source: video.sources[0],
              thumb: video.thumb
            } as VideoData)
        )
      }));
    })
    .catch((error) => {
      throw error;
    });
};
