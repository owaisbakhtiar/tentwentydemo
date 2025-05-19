import { StyleSheet, Dimensions } from "react-native";
import COLORS from "@constants/colors";
import FONTS from "@constants/fonts";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBackground,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightBackground,
  },
  backdrop: {
    width: "100%",
    height: width * 0.8,
    justifyContent: "flex-end",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    overflow: "hidden",
  },
  backdropOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  headerRow: {
    position: "absolute",
    top: 48,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 2,
    paddingHorizontal: 16,
  },
  backBtn: {
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 20,
    padding: 4,
    marginRight: 12,
  },
  headerTitle: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: 20,
  },
  backdropContent: {
    alignItems: "center",
    paddingBottom: 24,
    zIndex: 1,
  },
  movieTitle: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 28,
    marginBottom: 8,
    textAlign: "center",
  },
  releaseDate: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
  },
  ticketsBtn: {
    backgroundColor: COLORS.skyBlue,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 12,
  },
  ticketsBtnText: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: 18,
  },
  trailerBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLORS.skyBlue,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 32,
  },
  trailerBtnText: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: 18,
  },
  section: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontFamily: FONTS.semiBold,
    fontSize: 18,
    color: COLORS.darkPurple,
    marginBottom: 12,
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
  overview: {
    fontFamily: FONTS.regular,
    fontSize: 15,
    color: COLORS.grayText,
    marginTop: 4,
    lineHeight: 22,
  },
});

export default styles;
