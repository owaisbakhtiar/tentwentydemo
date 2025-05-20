import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import styles from "./style";

type Movie = {
  id: number;
  title: string;
  backdrop_path?: string;
};

interface MovieCardProps {
  item: Movie;
  onPress: () => void;
}

const MovieCard = ({ item, onPress }: MovieCardProps) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
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
);

export default MovieCard;
