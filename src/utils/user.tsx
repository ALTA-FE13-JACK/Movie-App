export interface MoviesData {
  vote_average: string;
  poster_path: string;
  title: string;
  id: number;
}

export interface DetailMovie extends MoviesData {
  backdrop_path: string;
  release_date: string;
  popularity: string;
  overview: string;
  runtime: string;
  tagline: string;
  status: string;
  genres: string[];
  videos: number[];
  homepage: string;
}
export interface VideosData {
  id: string;
  name: string;
  type: string;
}
