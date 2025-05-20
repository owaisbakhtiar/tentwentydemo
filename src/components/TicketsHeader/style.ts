import { StyleSheet, Dimensions } from "react-native";
import COLORS from "@constants/colors";
import FONTS from "@constants/fonts";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    // alignItems: "center",
    //justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: COLORS.white,
  },
  backBtn: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  title: {
    fontFamily: FONTS.medium,
    fontSize: 18,
    color: COLORS.darkPurple,
    textAlign: "center",
    marginTop: 6,
  },
  subTitle: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLORS.skyBlue,
    textAlign: "center",
    marginTop: 2,
  },
  releaseDate: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLORS.skyBlue,
    textAlign: "center",
    marginTop: 2,
  },
});
export default styles;
