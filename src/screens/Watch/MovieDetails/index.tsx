import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import Icon from "@src/components/Icon";
import GenreSection from "@src/components/GenreSection";
import VideoPlayerModal from "@src/components/VideoPlayerModal";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { WatchStackParamList } from "@navigation/stacks/WatchStackNavigator";
import {
  fetchMovieDetails,
  fetchMovieImages,
  fetchMovieTrailerKey,
  MovieDetails,
  MovieImagesResponse,
} from "@services/movies";
import COLORS from "@constants/colors";
import FONTS from "@constants/fonts";
import styles from "./style";

const { width, height } = Dimensions.get("window");

type MovieDetailsRouteProp = RouteProp<WatchStackParamList, "MovieDetails">;

const MovieDetailsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<WatchStackParamList>>();
  const route = useRoute<MovieDetailsRouteProp>();
  const { movieId } = route.params;

  const [details, setDetails] = useState<MovieDetails | null>(null);
  const [images, setImages] = useState<MovieImagesResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [trailerVisible, setTrailerVisible] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [trailerLoading, setTrailerLoading] = useState(false);
  const [trailerError, setTrailerError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const [detailsData, imagesData] = await Promise.all([
          fetchMovieDetails(movieId),
          fetchMovieImages(movieId),
        ]);
        setDetails(detailsData);
        setImages(imagesData);
      } catch (err) {
        setError("Failed to load movie details. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [movieId]);

  const handleWatchTrailer = async () => {
    setTrailerLoading(true);
    setTrailerError(null);
    try {
      const key = await fetchMovieTrailerKey(movieId);
      if (key) {
        setTrailerKey(key);
        setTrailerVisible(true);
      } else {
        setTrailerError("Trailer not available.");
      }
    } catch (err) {
      setTrailerError("Failed to load trailer.");
    } finally {
      setTrailerLoading(false);
    }
  };

  const handleTrailerClose = () => {
    setTrailerVisible(false);
    setTrailerKey(null);
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={COLORS.darkPurple} />
      </View>
    );
  }

  if (error || !details) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: COLORS.pink, fontFamily: FONTS.medium }}>
          {error || "No details found."}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginTop: 16 }}
        >
          <Text style={{ color: COLORS.skyBlue, fontFamily: FONTS.medium }}>
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const backdropUrl = details.backdrop_path
    ? `https://image.tmdb.org/t/p/w780${details.backdrop_path}`
    : undefined;

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        {/* Backdrop and header */}
        <ImageBackground
          source={backdropUrl ? { uri: backdropUrl } : undefined}
          style={styles.backdrop}
          // imageStyle={{
          //   borderBottomLeftRadius: 32,
          //   borderBottomRightRadius: 32,
          // }}
        >
          <View style={styles.headerRow}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backBtn}
            >
              <Icon
                type="AntDesign"
                name="left"
                size={28}
                color={COLORS.white}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Watch</Text>
          </View>
          <View style={styles.backdropOverlay} />
          <View style={styles.backdropContent}>
            {/* <Text style={styles.movieTitle}>{details.title}</Text> */}
            <Text style={styles.releaseDate}>
              In Theaters {details.release_date}
            </Text>
            {/* Buttons */}
            <TouchableOpacity
              style={styles.ticketsBtn}
              onPress={() =>
                navigation.navigate("GetTickets", {
                  movieId: details.id,
                  title: details.title,
                  releaseDate: details.release_date,
                })
              }
            >
              <Text style={styles.ticketsBtnText}>Get Tickets</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.trailerBtn}
              onPress={handleWatchTrailer}
            >
              <Icon
                name="play"
                size={20}
                color={COLORS.white}
                style={{ marginRight: 8 }}
              />
              <Text style={styles.trailerBtnText}>Watch Trailer</Text>
            </TouchableOpacity>
            {trailerLoading && (
              <ActivityIndicator
                size="small"
                color={COLORS.white}
                style={{ marginTop: 8 }}
              />
            )}
            {trailerError && (
              <Text style={{ color: COLORS.pink, marginTop: 8 }}>
                {trailerError}
              </Text>
            )}
          </View>
        </ImageBackground>

        {/* Genres */}
        <GenreSection genres={details.genres} />

        {/* Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.overview}>{details.overview}</Text>
        </View>
      </ScrollView>

      <VideoPlayerModal
        visible={trailerVisible}
        videoId={trailerKey}
        onClose={handleTrailerClose}
      />
    </>
  );
};

export default MovieDetailsScreen;
