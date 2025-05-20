import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import COLORS from "@constants/colors";
import FONTS from "@constants/fonts";
import { fetchUpcomingMovies } from "@services/movies";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { WatchStackParamList } from "@navigation/stacks/WatchStackNavigator";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@src/store";
import { setMovies, setLoading, setError } from "@src/store/moviesSlice";

const MovieListScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<WatchStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();
  const { allMovies, loading, error } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    const loadMovies = async () => {
      dispatch(setLoading(true));
      dispatch(setError(null));
      try {
        const data = await fetchUpcomingMovies();
        dispatch(setMovies(data));
      } catch (err: any) {
        dispatch(setError("Failed to load movies. Please try again."));
      } finally {
        dispatch(setLoading(false));
      }
    };
    loadMovies();
  }, [dispatch]);

  const handleMoviePress = (movieId: number) => {
    navigation.navigate("MovieDetails", { movieId });
  };

  return (
    <View style={styles.container}>
      {/* Header  Search Bar  */}
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Watch</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SearchScreen" as any)}
        >
          <Ionicons name="search" size={24} color={COLORS.darkPurple} />
        </TouchableOpacity>
      </View>

      {/* Loading/Error State */}
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
          data={allMovies}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingVertical: 16 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleMoviePress(item.id)}
              activeOpacity={0.8}
            >
              <View style={styles.cardWrapper}>
                <ImageBackground
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
                  }}
                  style={styles.cardImage}
                  imageStyle={styles.cardImageStyle}
                >
                  <View style={styles.cardOverlay} />
                  <Text style={styles.cardTitle}>{item.title}</Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
        />
      )}
    </View>
  );
};

export default MovieListScreen;
