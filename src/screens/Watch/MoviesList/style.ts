import { StyleSheet, Platform } from "react-native";
import COLORS from "@constants/colors";
import FONTS from "@constants/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBackground,
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "android" ? 16 : 0,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.darkPurple,
  },
  searchBarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 16,
    marginBottom: 16,
    height: 44,
    shadowColor: COLORS.black,
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  searchBar: {
    flex: 1,
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.darkPurple,
    marginLeft: 8,
    marginRight: 12,
  },
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
    // textShadowColor: "rgba(0,0,0,0.3)",
    // textShadowOffset: { width: 0, height: 2 },
    // textShadowRadius: 6,
  },
});

export default styles;
