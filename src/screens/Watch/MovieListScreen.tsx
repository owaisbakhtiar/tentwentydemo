import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import COLORS from "@constants/colors";
import FONTS from "@constants/fonts";
import { fetchUpcomingMovies, Movie } from "@services/movies";

const MovieListScreen = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadMovies = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUpcomingMovies();
      setMovies(data);
    } catch (err: any) {
      setError("Failed to load movies. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  const filteredMovies = search
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      )
    : movies;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Watch</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color={COLORS.darkPurple} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarWrapper}>
        <Ionicons
          name="search"
          size={20}
          color={COLORS.grayText}
          style={{ marginLeft: 12 }}
        />
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor={COLORS.grayText}
          value={search}
          onChangeText={setSearch}
        />
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
          <TouchableOpacity onPress={loadMovies} activeOpacity={0.7}>
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
          data={filteredMovies}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingVertical: 16 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
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
          )}
          ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
        />
      )}
    </View>
  );
};

export default MovieListScreen;
