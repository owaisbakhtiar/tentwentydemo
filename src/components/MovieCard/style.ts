import { StyleSheet } from "react-native";
import COLORS from "@constants/colors";
import FONTS from "@constants/fonts";

const styles = StyleSheet.create({
  cardWrapper: {
    borderRadius: 20,
    overflow: "hidden",
  },
  cardImage: {
    height: 180,
    justifyContent: "flex-end",
  },
  cardImageStyle: {
    borderRadius: 20,
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.15)",
    borderRadius: 20,
  },
  cardTitle: {
    color: COLORS.white,
    fontSize: 22,
    fontFamily: FONTS.medium,
    margin: 16,
    marginBottom: 20,
  },
});

export default styles;
