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
  },
});

export default styles;
