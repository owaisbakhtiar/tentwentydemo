import { StyleSheet, Dimensions } from "react-native";
import COLORS from "@constants/colors";
import FONTS from "@constants/fonts";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
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
    marginTop: 10,
  },
  subTitle: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLORS.skyBlue,
    textAlign: "center",
    marginTop: 2,
  },
  screenLabel: {
    fontFamily: FONTS.medium,
    fontSize: 13,
    color: COLORS.grayText,
    textAlign: "center",
    marginTop: 8,
  },
  screenCurve: {
    width: width * 0.7,
    height: 20,
    borderTopWidth: 2,
    borderColor: COLORS.gray,
    borderRadius: 100,
    alignSelf: "center",
    marginBottom: 16,
  },
  seatsContainer: {
    alignItems: "center",
    paddingBottom: 2,
    backgroundColor: COLORS.lightBackground,
  },
  seatMapContainer: {
    // backgroundColor:
    borderRadius: 16,
    padding: 8,
    marginBottom: 8,
  },
  seatTouchable: {
    marginHorizontal: 2,
    marginVertical: 1,
  },
  // seatImg: {
  //   width: seatSize,
  //   height: seatSize,
  // },
  legendContainer: {
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  legendRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "35%",
  },
  legendSeatImg: {
    width: 18,
    height: 18,
    marginRight: 12,
  },
  legendText: {
    fontFamily: FONTS.medium,
    fontSize: 13,
    color: COLORS.grayText,
  },
  selectedInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  selectedSeatBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  selectedSeatText: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: COLORS.darkPurple,
    marginRight: 8,
  },
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: COLORS.darkPurple,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 8,
  },
  priceBox: {
    alignItems: "center",
  },
  priceLabel: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: COLORS.grayText,
  },
  priceValue: {
    fontFamily: FONTS.bold,
    fontSize: 22,
    color: COLORS.darkPurple,
  },
  payBtn: {
    backgroundColor: COLORS.skyBlue,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: "center",
  },
  payBtnText: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.white,
  },
});

export default styles;
