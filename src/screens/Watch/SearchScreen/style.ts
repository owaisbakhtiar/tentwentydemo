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
    shadowColor: COLORS.darkPurple,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
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
});

export default styles;
