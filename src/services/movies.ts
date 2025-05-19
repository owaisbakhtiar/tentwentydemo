import api from "./api";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
}

export interface MoviesResponse {
  results: Movie[];
}

export const fetchUpcomingMovies = async (): Promise<Movie[]> => {
  const response = await api.get<MoviesResponse>("movie/upcoming");
  return response.data.results;
};
