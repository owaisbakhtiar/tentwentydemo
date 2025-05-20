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
import TicketsHeader from "@src/components/TicketsHeader";
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
    <View style={styles.container}>
      {/* Header */}

      <TicketsHeader title={title} releaseDate={`In Theaters ${releaseDate}`} />

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
        horizontal
        // style={styles.hallsScrollStyle}
        contentContainerStyle={styles.hallsScrollStyle}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 16,
            // marginTop: 16,
            paddingHorizontal: 16,
          }}
        >
          {mockShowtimes.map((show) => (
            <View key={show.id}>
              <View style={styles.timeTitleCont}>
                <Text style={styles.showtimeTime}>{show.time}</Text>
                <Text style={styles.showtimeHall}>{show.hall}</Text>
              </View>

              <TouchableOpacity
                style={[
                  styles.showtimeCard,
                  selectedShowtime === show.id && styles.showtimeCardSelected,
                ]}
                onPress={() => {
                  setSelectedShowtime(show.id);
                }}
                activeOpacity={0.8}
              >
                <Image
                  source={show.seatMap}
                  style={styles.seatMapImg}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.priceText}>
                From <Text style={styles.priceBold}>${show.price}</Text> or{" "}
                <Text style={styles.priceBold}>{show.bonus} bonus</Text>
              </Text>
            </View>
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
    </View>
  );
};

export default GetTicketsDatesScreen;
