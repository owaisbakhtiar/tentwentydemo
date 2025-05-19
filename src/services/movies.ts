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

export interface MovieVideo {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official?: boolean;
}

export interface MovieVideosResponse {
  results: MovieVideo[];
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

export const fetchMovieTrailerKey = async (
  movieId: number
): Promise<string | null> => {
  const response = await api.get<MovieVideosResponse>(
    `movie/${movieId}/videos`
  );
  // 1. Try to find an official YouTube trailer
  let trailer = response.data.results.find(
    (video) =>
      video.site === "YouTube" && video.type === "Trailer" && video.official
  );
  // 2. Fallback: any YouTube trailer
  if (!trailer) {
    trailer = response.data.results.find(
      (video) => video.site === "YouTube" && video.type === "Trailer"
    );
  }
  // 3. Fallback: any YouTube teaser
  if (!trailer) {
    trailer = response.data.results.find(
      (video) => video.site === "YouTube" && video.type === "Teaser"
    );
  }
  // 4. Fallback: any YouTube video
  if (!trailer) {
    trailer = response.data.results.find((video) => video.site === "YouTube");
  }
  console.log("trailer is", JSON.stringify(trailer));
  return trailer ? trailer.key : null;
};
