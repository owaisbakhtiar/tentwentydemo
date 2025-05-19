import api from "./api";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  genres?: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface MoviesResponse {
  results: Movie[];
}

export interface MovieDetails extends Movie {
  genres: Genre[];
  homepage?: string;
  // Add more fields as needed
}

export interface MovieImagesResponse {
  backdrops: { file_path: string }[];
  posters: { file_path: string }[];
}

export const fetchUpcomingMovies = async (): Promise<Movie[]> => {
  const response = await api.get<MoviesResponse>("movie/upcoming");
  return response.data.results;
};

export const fetchMovieDetails = async (
  movieId: number
): Promise<MovieDetails> => {
  const response = await api.get<MovieDetails>(`movie/${movieId}`);
  return response.data;
};

export const fetchMovieImages = async (
  movieId: number
): Promise<MovieImagesResponse> => {
  const response = await api.get<MovieImagesResponse>(
    `movie/${movieId}/images`
  );
  return response.data;
};
