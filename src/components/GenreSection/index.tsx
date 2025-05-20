import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "@constants/colors";
import FONTS from "@constants/fonts";

interface Genre {
  id: number;
  name: string;
}

interface GenreSectionProps {
  genres: Genre[];
}

const GenreSection = ({ genres }: GenreSectionProps) => {
  const genreColor = (name: string) => {
    switch (name.toLowerCase()) {
      case "action":
        return COLORS.teal;
      case "thriller":
        return COLORS.pink;
      case "science":
        return COLORS.purple;
      case "fiction":
        return COLORS.gold;
      default:
        return COLORS.gray;
    }
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Genres</Text>
      <View style={styles.genresRow}>
        {genres.map((genre) => (
          <View
            key={genre.id}
            style={[
              styles.genrePill,
              { backgroundColor: genreColor(genre.name) },
            ]}
          >
            <Text style={styles.genreText}>{genre.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    color: COLORS.darkPurple,
    fontFamily: FONTS.medium,
    marginBottom: 16,
  },
  genresRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  genrePill: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  genreText: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: 15,
  },
});

export default GenreSection;
