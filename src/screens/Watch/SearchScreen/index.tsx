import React from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@src/store";
import { setSearchQuery, clearSearch } from "@src/store/moviesSlice";

const SearchScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const { searchQuery, searchResults } = useSelector(
    (state: RootState) => state.movies
  );

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
          value={searchQuery}
          onChangeText={(text) => dispatch(setSearchQuery(text))}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginRight: 12 }}
        >
          <Ionicons name="close" size={22} color="#888" />
        </TouchableOpacity>
      </View>
      {searchQuery.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.placeholderText}>Start typing to search...</Text>
        </View>
      ) : searchResults.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.placeholderText}>No results found.</Text>
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ padding: 16 }}>
              <Text style={{ fontSize: 16, color: "#222", fontWeight: "bold" }}>
                {item.title}
              </Text>
              {item.genre && (
                <Text style={{ color: "#888", fontSize: 13 }}>
                  {item.genre}
                </Text>
              )}
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default SearchScreen;
