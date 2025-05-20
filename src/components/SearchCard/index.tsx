import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "@src/components/Icon";
import COLORS from "@constants/colors";
import FONTS from "@constants/fonts";

interface SearchCardProps {
  item: any;
  onPress: (movieId: number) => void;
  onMenuPress?: (movieId: number) => void;
}

const SearchCard: React.FC<SearchCardProps> = ({
  item,
  onPress,
  onMenuPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.resultRow}
      onPress={() => onPress(item.id)}
      activeOpacity={0.7}
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${
            item.backdrop_path || item.poster_path
          }`,
        }}
        style={styles.resultImage}
      />
      <View style={styles.resultTextContainer}>
        <Text style={styles.resultTitle}>{item.title}</Text>
        {item.genre && <Text style={styles.resultGenre}>{item.genre}</Text>}
      </View>
      <TouchableOpacity
        onPress={() => onMenuPress && onMenuPress(item.id)}
        style={styles.menuIcon}
        activeOpacity={0.6}
      >
        <Icon name="ellipsis-horizontal" size={24} color="#7AC7F6" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  resultRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 8,
    shadowColor: COLORS.darkPurple,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  resultImage: {
    width: 120,
    height: 100,
    borderRadius: 12,
    backgroundColor: COLORS.partialWhite,
    marginRight: 16,
  },
  resultTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  resultTitle: {
    fontFamily: FONTS.medium,
    fontSize: 17,
    color: COLORS.darkPurple,
  },
  resultGenre: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLORS.grayText,
    marginTop: 2,
  },
  menuIcon: {
    marginLeft: 12,
    padding: 4,
  },
});

export default SearchCard;
