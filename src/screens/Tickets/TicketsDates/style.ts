import { StyleSheet, Dimensions } from "react-native";
import COLORS from "@constants/colors";
import FONTS from "@constants/fonts";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBackground,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: COLORS.background,
  },
  backBtn: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 22,
    color: COLORS.darkPurple,
    textAlign: "center",
  },
  releaseDate: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLORS.skyBlue,
    textAlign: "center",
    marginTop: 2,
  },
  section: {
    paddingHorizontal: 16,
    marginTop: 50,
  },
  sectionTitle: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.darkPurple,
  },
  dateBtn: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: COLORS.partialWhite,
    marginRight: 12,
  },
  dateBtnSelected: {
    backgroundColor: COLORS.skyBlue,
  },
  dateBtnText: {
    fontFamily: FONTS.medium,
    fontSize: 15,
    color: COLORS.darkPurple,
  },
  dateBtnTextSelected: {
    color: COLORS.white,
  },
  hallsScrollStyle: {
    maxHeight: 250,
    marginTop: 20,
    backgroundColor: "red",
  },
  showtimeCard: {
    width: width * 0.6,
    height: 160,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.gray,
    padding: 12,
    alignItems: "center",
    marginBottom: 8,
  },
  showtimeCardSelected: {
    borderColor: COLORS.skyBlue,
    shadowColor: COLORS.skyBlue,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 2,
  },
  timeTitleCont: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  showtimeTime: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: COLORS.darkPurple,
    // marginBottom: 2,
  },
  showtimeHall: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    color: COLORS.gray,
    marginLeft: 10,
    // marginBottom: 8,
  },
  seatMapImg: {
    width: "100%",
    height: "100%",
    marginBottom: 8,
  },
  priceText: {
    fontFamily: FONTS.medium,
    fontSize: 13,
    color: COLORS.gray,
    marginTop: 2,
  },
  priceBold: {
    fontFamily: FONTS.bold,
    color: COLORS.darkPurple,
  },
  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 75,
    backgroundColor: COLORS.background,
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: COLORS.darkPurple,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 8,
  },
  selectSeatsBtn: {
    backgroundColor: COLORS.skyBlue,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    opacity: 1,
  },
  selectSeatsText: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.white,
  },
});

export default styles;
