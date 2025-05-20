import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { searchMovies } from "@services/movies";

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

export const fetchSearchResults = createAsyncThunk(
  "movies/fetchSearchResults",
  async (query: string, { rejectWithValue }) => {
    try {
      return await searchMovies(query);
    } catch (err: any) {
      return rejectWithValue(err.message || "Search failed");
    }
  }
);

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
      // searchResults will be set by the async thunk
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Search failed";
      });
  },
});

export const { setMovies, setSearchQuery, clearSearch, setLoading, setError } =
  moviesSlice.actions;
export default moviesSlice.reducer;
