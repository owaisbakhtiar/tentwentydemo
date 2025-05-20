import React, { useEffect, useState } from "react";
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
} from "@src/store/moviesSlice";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { WatchStackParamList } from "@navigation/stacks/WatchStackNavigator";

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
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.resultRow}
                onPress={() => handleMoviePress(item.id)}
                activeOpacity={0.7}
              >
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${
                      item.backdrop_path || item.poster_path
                    }`,
                  }}
                  style={styles.resultImage}
                />
                <View style={styles.resultTextContainer}>
                  <Text style={styles.resultTitle}>{item.title}</Text>
                  {item.genre && (
                    <Text style={styles.resultGenre}>{item.genre}</Text>
                  )}
                </View>
                <Icon
                  name="ellipsis-horizontal"
                  size={24}
                  color="#7AC7F6"
                  style={styles.menuIcon}
                />
              </TouchableOpacity>
            )}
            contentContainerStyle={{ paddingBottom: 24 }}
          />
        </View>
      )}
    </View>
  );
};

export default SearchScreen;
