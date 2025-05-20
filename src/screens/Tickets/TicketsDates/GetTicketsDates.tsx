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
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styles from "./style";
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

const GetTicketsDatesScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<WatchStackParamList>>();
  const route = useRoute<GetTicketsRouteProp>();
  const { title, releaseDate } = route.params;
  const [selectedDate, setSelectedDate] = useState(mockDates[0]);
  const [selectedShowtime, setSelectedShowtime] = useState<number | null>(null);

  const handleSelectSeats = (show?: (typeof mockShowtimes)[0]) => {
    const showtime =
      show || mockShowtimes.find((s) => s.id === selectedShowtime);
    if (!showtime) return;
    navigation.navigate("SelectSeats", {
      movieId: route.params.movieId,
      title: route.params.title,
      date: selectedDate,
      time: showtime.time,
      hall: showtime.hall,
      price: showtime.price,
    });
  };

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
              onPress={() => {
                setSelectedShowtime(show.id);
                handleSelectSeats(show);
              }}
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
          onPress={() => handleSelectSeats()}
        >
          <Text style={styles.selectSeatsText}>Select Seats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GetTicketsDatesScreen;
