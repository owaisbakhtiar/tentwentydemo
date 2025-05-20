import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "@src/components/Icon";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@src/store";
import {
  setSearchQuery,
  clearSearch,
  fetchSearchResults,
  Movie,
} from "@src/store/moviesSlice";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { WatchStackParamList } from "@navigation/stacks/WatchStackNavigator";
import SearchCard from "@src/components/SearchCard";

const SearchScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<WatchStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();
  const { searchQuery, searchResults, loading } = useSelector(
    (state: RootState) => state.movies
  );
  const [localQuery, setLocalQuery] = useState(searchQuery);

  // Debounce search
  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setSearchQuery(localQuery));
      if (localQuery.trim()) {
        dispatch(fetchSearchResults(localQuery));
      }
    }, 400);
    return () => clearTimeout(handler);
  }, [localQuery, dispatch]);

  const handleMoviePress = (movieId: number) => {
    navigation.navigate("MovieDetails", { movieId });
  };

  const renderItem = useCallback(
    ({ item }: { item: Movie }) => (
      <SearchCard item={item} onPress={handleMoviePress} />
    ),
    [handleMoviePress]
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBarWrapper}>
        <Icon name="search" size={20} color="#888" style={{ marginLeft: 12 }} />
        <TextInput
          style={[styles.searchBar, { flex: 1 }]}
          placeholder="TV shows, movies and more"
          placeholderTextColor="#888"
          value={localQuery}
          onChangeText={setLocalQuery}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginRight: 12 }}
        >
          <Icon name="close" size={22} color="#888" />
        </TouchableOpacity>
      </View>
      {localQuery.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.placeholderText}>Start typing to search...</Text>
        </View>
      ) : loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.placeholderText}>Searching...</Text>
        </View>
      ) : searchResults.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.placeholderText}>No results found.</Text>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Text style={styles.sectionTitle}>Top Results</Text>
          <View style={styles.divider} />
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 24 }}
          />
        </View>
      )}
    </View>
  );
};

export default SearchScreen;
