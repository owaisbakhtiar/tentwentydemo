import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Movie {
  id: number;
  title: string;
  genre?: string;
  backdrop_path?: string;
  poster_path?: string;
  // Add other fields as needed
}

interface MoviesState {
  allMovies: Movie[];
  searchQuery: string;
  searchResults: Movie[];
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  allMovies: [],
  searchQuery: "",
  searchResults: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.allMovies = action.payload;
      state.searchResults = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      state.searchResults = state.allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    clearSearch(state) {
      state.searchQuery = "";
      state.searchResults = state.allMovies;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setMovies, setSearchQuery, clearSearch, setLoading, setError } =
  moviesSlice.actions;
export default moviesSlice.reducer;
