import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { WatchStackParamList } from "@navigation/stacks/WatchStackNavigator";
import COLORS from "@constants/colors";
import FONTS from "@constants/fonts";
import { Ionicons } from "@expo/vector-icons";
import IMAGES from "@constants/images";

const { width } = Dimensions.get("window");

type GetTicketsRouteProp = RouteProp<WatchStackParamList, "GetTickets">;

const mockDates = ["5 Mar", "6 Mar", "7 Mar", "8 Mar", "9 Mar", "10 Mar"];

const mockShowtimes = [
  {
    id: 1,
    time: "12:30",
    hall: "Cinetech + Hall 1",
    price: 50,
    bonus: 2500,
    seatMap: IMAGES.seatMap,
  },
  {
    id: 2,
    time: "13:30",
    hall: "Cinetech + Hall 1",
    price: 75,
    bonus: 3000,
    seatMap: IMAGES.seatMap,
  },
];

const GetTicketsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<GetTicketsRouteProp>();
  const { title, releaseDate } = route.params;
  const [selectedDate, setSelectedDate] = useState(mockDates[0]);
  const [selectedShowtime, setSelectedShowtime] = useState<number | null>(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Ionicons name="arrow-back" size={24} color={COLORS.darkPurple} />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.releaseDate}>In Theaters {releaseDate}</Text>
        </View>
        <View style={{ width: 40 }} />
      </View>

      {/* Date Selector */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Date</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 12 }}
        >
          {mockDates.map((date) => (
            <TouchableOpacity
              key={date}
              style={[
                styles.dateBtn,
                selectedDate === date && styles.dateBtnSelected,
              ]}
              onPress={() => setSelectedDate(date)}
            >
              <Text
                style={[
                  styles.dateBtnText,
                  selectedDate === date && styles.dateBtnTextSelected,
                ]}
              >
                {date}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Showtimes */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 16,
            marginTop: 16,
            paddingHorizontal: 16,
          }}
        >
          {mockShowtimes.map((show) => (
            <TouchableOpacity
              key={show.id}
              style={[
                styles.showtimeCard,
                selectedShowtime === show.id && styles.showtimeCardSelected,
              ]}
              onPress={() => setSelectedShowtime(show.id)}
              activeOpacity={0.8}
            >
              <Text style={styles.showtimeTime}>{show.time}</Text>
              <Text style={styles.showtimeHall}>{show.hall}</Text>
              <Image
                source={show.seatMap}
                style={styles.seatMapImg}
                resizeMode="contain"
              />
              <Text style={styles.priceText}>
                From <Text style={styles.priceBold}>${show.price}</Text> or{" "}
                <Text style={styles.priceBold}>{show.bonus} bonus</Text>
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Select Seats Button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.selectSeatsBtn}
          disabled={selectedShowtime === null}
          onPress={() => {
            // TODO: Navigate to seat selection screen
          }}
        >
          <Text style={styles.selectSeatsText}>Select Seats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 8,
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
    backgroundColor: COLORS.gray,
    marginRight: 12,
  },
  dateBtnSelected: {
    backgroundColor: COLORS.skyBlue,
  },
  dateBtnText: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: COLORS.darkPurple,
  },
  dateBtnTextSelected: {
    color: COLORS.white,
  },
  showtimeCard: {
    width: width * 0.42,
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
  showtimeTime: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.darkPurple,
    marginBottom: 2,
  },
  showtimeHall: {
    fontFamily: FONTS.medium,
    fontSize: 13,
    color: COLORS.gray,
    marginBottom: 8,
  },
  seatMapImg: {
    width: "100%",
    height: 70,
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
    bottom: 0,
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

export default GetTicketsScreen;
