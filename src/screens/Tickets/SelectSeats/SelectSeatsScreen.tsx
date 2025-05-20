import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { WatchStackParamList } from "@navigation/stacks/WatchStackNavigator";
import COLORS from "@constants/colors";
import FONTS from "@constants/fonts";
import { Ionicons, AntDesign } from "@expo/vector-icons";
// import AntDesign from '@expo/vector-icons/AntDesign';
import IMAGES from "@constants/images";
import styles from "./style";
const { width } = Dimensions.get("window");

type SelectSeatsRouteProp = RouteProp<WatchStackParamList, "SelectSeats">;

type SeatType = "regular" | "vip" | "selected" | "unavailable";

type Seat = {
  row: number;
  col: number;
  type: SeatType;
};

// Mock seat map: 10 rows x 18 cols
const seatMap: Seat[][] = Array.from({ length: 10 }, (_, row) =>
  Array.from({ length: 18 }, (_, col) => {
    let type: SeatType = "regular";
    if (row === 9) type = "vip";
    if ((row === 4 && col === 8) || (row === 5 && col === 12))
      type = "unavailable";
    return { row: row + 1, col: col + 1, type };
  })
);

const seatPrices = {
  regular: 50,
  vip: 150,
};

const SelectSeatsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<SelectSeatsRouteProp>();
  const { title, date, time, hall, price } = route.params;
  const [selected, setSelected] = useState<
    { row: number; col: number; type: SeatType }[]
  >([]);

  const handleSelect = (seat: Seat) => {
    if (seat.type === "unavailable") return;
    const exists = selected.find(
      (s) => s.row === seat.row && s.col === seat.col
    );
    if (exists) {
      setSelected(
        selected.filter((s) => !(s.row === seat.row && s.col === seat.col))
      );
    } else {
      setSelected([...selected, { ...seat, type: seat.type }]);
    }
  };

  const getSeatColor = (type: SeatType, isSelected: boolean) => {
    if (isSelected) return COLORS.gold;
    if (type === "vip") return COLORS.purple;
    if (type === "regular") return COLORS.skyBlue;
    if (type === "unavailable") return COLORS.gray;
    return COLORS.gray;
  };

  const totalPrice = selected.reduce(
    (sum, seat) => sum + seatPrices[seat.type === "vip" ? "vip" : "regular"],
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <AntDesign name="left" size={24} color={COLORS.darkPurple} />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>
            {date} | {time} {hall}
          </Text>
        </View>
        <View style={{ width: 40 }} />
      </View>

      {/* Seat Map */}
      <ScrollView contentContainerStyle={styles.seatsContainer}>
        <Text style={styles.screenLabel}>SCREEN</Text>
        <View style={styles.screenCurve} />
        <View style={styles.seatMapContainer}>
          {seatMap.map((row, rowIdx) => (
            <View
              key={rowIdx}
              style={{ flexDirection: "row", marginBottom: 8 }}
            >
              {row.map((seat, colIdx) => {
                const isSelected = selected.some(
                  (s) => s.row === seat.row && s.col === seat.col
                );
                return (
                  <TouchableOpacity
                    key={colIdx}
                    style={styles.seatTouchable}
                    onPress={() => handleSelect(seat)}
                    activeOpacity={seat.type === "unavailable" ? 1 : 0.7}
                  >
                    <Image
                      source={IMAGES.seat}
                      style={[
                        // styles.seatImg,
                        {
                          width: seatSize,
                          height: seatSize,
                          tintColor: getSeatColor(seat.type, isSelected),
                        },
                      ]}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Legend & Info */}
      <View style={styles.legendContainer}>
        <View style={styles.legendRow}>
          <View style={styles.legendItem}>
            <Image
              source={IMAGES.seat}
              style={[styles.legendSeatImg, { tintColor: COLORS.gold }]}
              resizeMode="contain"
            />
            <Text style={styles.legendText}>Selected</Text>
          </View>
          <View style={styles.legendItem}>
            <Image
              source={IMAGES.seat}
              style={[styles.legendSeatImg, { tintColor: COLORS.gray }]}
              resizeMode="contain"
            />
            <Text style={styles.legendText}>Not available</Text>
          </View>
        </View>
        <View style={styles.legendRow}>
          <View style={styles.legendItem}>
            <Image
              source={IMAGES.seat}
              style={[styles.legendSeatImg, { tintColor: COLORS.purple }]}
              resizeMode="contain"
            />
            <Text style={styles.legendText}>VIP (150$)</Text>
          </View>
          <View style={styles.legendItem}>
            <Image
              source={IMAGES.seat}
              style={[styles.legendSeatImg, { tintColor: COLORS.skyBlue }]}
              resizeMode="contain"
            />
            <Text style={styles.legendText}>Regular (50 $)</Text>
          </View>
        </View>
      </View>

      {/* Selected Seat Info & Actions */}
      <View style={styles.selectedInfoRow}>
        {selected.length > 0 ? (
          <View style={styles.selectedSeatBox}>
            <Text style={styles.selectedSeatText}>
              {selected.map((s) => `${s.col} / ${s.row} row`).join(", ")}
            </Text>
            <TouchableOpacity onPress={() => setSelected([])}>
              <Ionicons name="close" size={18} color={COLORS.gray} />
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.selectedSeatText}>No seat selected</Text>
        )}
      </View>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.priceBox}>
          <Text style={styles.priceLabel}>Total Price</Text>
          <Text style={styles.priceValue}>${totalPrice}</Text>
        </View>
        <TouchableOpacity
          style={[styles.payBtn, { opacity: selected.length === 0 ? 0.5 : 1 }]}
          disabled={selected.length === 0}
          onPress={() => {
            // TODO: Proceed to pay
          }}
        >
          <Text style={styles.payBtnText}>Proceed to pay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const seatSize = Math.floor((width - 32) / 20);

export default SelectSeatsScreen;
