import React, { useCallback, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { Movie, setMovies, setLoading, setError } from "@src/store/moviesSlice";
import Icon from "@src/components/Icon";
import MovieCard from "@src/components/MovieCard";
import styles from "./style";
import COLORS from "@constants/colors";
import { fetchUpcomingMovies } from "@services/movies";
import FONTS from "@constants/fonts";

type WatchStackParamList = {
  MovieDetails: { movieId: number };
  SearchScreen: undefined;
};

type NavigationProp = NativeStackNavigationProp<WatchStackParamList>;

const MoviesListScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();
  const {
    allMovies: movies,
    loading,
    error,
  } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    const loadMovies = async () => {
      dispatch(setLoading(true));
      dispatch(setError(null));
      try {
        const data = await fetchUpcomingMovies();
        dispatch(setMovies(data));
      } catch (err: any) {
        dispatch(setError(err.message || "Failed to load movies"));
      } finally {
        dispatch(setLoading(false));
      }
    };
    loadMovies();
  }, [dispatch]);

  const handleMoviePress = (movieId: number) => {
    navigation.navigate("MovieDetails", { movieId });
  };

  const renderItem = useCallback(
    ({ item }: { item: Movie }) => (
      <MovieCard item={item} onPress={() => handleMoviePress(item.id)} />
    ),
    [handleMoviePress]
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Movies</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
          <Icon name="search" size={24} color={COLORS.darkPurple} />
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator
          size="large"
          color={COLORS.darkPurple}
          style={{ marginTop: 40 }}
        />
      ) : error ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            onPress={() => dispatch(setError(null))}
            activeOpacity={0.7}
          >
            <Text
              style={{
                color: COLORS.pink,
                textAlign: "center",
                fontFamily: FONTS.medium,
                fontSize: 16,
              }}
            >
              {error}
            </Text>
            <Text
              style={{
                color: COLORS.skyBlue,
                textAlign: "center",
                marginTop: 8,
                fontFamily: FONTS.medium,
              }}
            >
              Tap to retry
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingVertical: 16 }}
          ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default MoviesListScreen;
