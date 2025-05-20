import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "@constants/colors";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
type TicketsHeaderProps = {
  title: string;
  releaseDate?: string;
  subtitle?: string;
};

const TicketsHeader: React.FC<TicketsHeaderProps> = ({
  title,
  releaseDate,
  subtitle,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
      >
        <Ionicons name="arrow-back" size={24} color={COLORS.darkPurple} />
      </TouchableOpacity>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? (
          <Text style={styles.subTitle}>{subtitle}</Text>
        ) : releaseDate ? (
          <Text style={styles.releaseDate}>{releaseDate}</Text>
        ) : null}
      </View>
      <View style={{ width: 40 }} />
    </View>
  );
};

export default TicketsHeader;
