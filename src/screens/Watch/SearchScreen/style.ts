import { StyleSheet } from "react-native";
import COLORS from "@constants/colors";
import FONTS from "@constants/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBackground,
  },
  searchBarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.partialWhite,
    borderRadius: 16,
    margin: 16,
    paddingVertical: 6,
    paddingHorizontal: 0,
  },
  searchBar: {
    flex: 1,
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: COLORS.darkPurple,
    backgroundColor: "transparent",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  placeholderText: {
    color: COLORS.grayText,
    fontSize: 18,
    textAlign: "center",
    marginTop: 32,
    fontFamily: FONTS.medium,
  },
  sectionTitle: {
    fontFamily: FONTS.bold,
    fontSize: 17,
    color: COLORS.darkPurple,
    marginTop: 8,
    marginLeft: 20,
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.partialWhite,
    marginHorizontal: 16,
    marginBottom: 8,
  },
});

export default styles;
