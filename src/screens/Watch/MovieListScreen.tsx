import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import COLORS from "@constants/colors";
import FONTS from "@constants/fonts";

const DUMMY_MOVIES = [
  {
    id: "1",
    title: "Free Guy",
    image: "https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
  },
  {
    id: "2",
    title: "The King's Man",
    image: "https://image.tmdb.org/t/p/w500/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg",
  },
  {
    id: "3",
    title: "Jojo Rabbit",
    image: "https://image.tmdb.org/t/p/w500/7GsM4mtM0worCtIVeiQt28HieeN.jpg",
  },
];

const MovieListScreen = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Watch</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color={COLORS.darkPurple} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarWrapper}>
        <Ionicons
          name="search"
          size={20}
          color={COLORS.grayText}
          style={{ marginLeft: 12 }}
        />
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor={COLORS.grayText}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Movie List */}
      <FlatList
        data={DUMMY_MOVIES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 16 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <ImageBackground
              source={{ uri: item.image }}
              style={styles.cardImage}
              imageStyle={styles.cardImageStyle}
            >
              <View style={styles.cardOverlay} />
              <Text style={styles.cardTitle}>{item.title}</Text>
            </ImageBackground>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
      />
    </View>
  );
};

export default MovieListScreen;
