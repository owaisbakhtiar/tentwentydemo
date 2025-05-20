import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../MoviesList/style";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  // Placeholder data for now
  const [results, setResults] = useState([]);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.searchBarWrapper}>
        <Ionicons
          name="search"
          size={20}
          color="#888"
          style={{ marginLeft: 12 }}
        />
        <TextInput
          style={[styles.searchBar, { flex: 1 }]}
          placeholder="TV shows, movies and more"
          placeholderTextColor="#888"
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginRight: 12 }}
        >
          <Ionicons name="close" size={22} color="#888" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "#888", fontSize: 18 }}>
          Start typing to search...
        </Text>
      </View>
    </View>
  );
};

export default SearchScreen;
