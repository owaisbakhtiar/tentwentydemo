import React from "react";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import { StyleProp, ViewStyle } from "react-native";

type IconType =
  | "Ionicons"
  | "FontAwesome"
  | "AntDesign"
  | "MaterialIcons"
  | "MaterialCommunityIcons"
  | "Feather";

// Get icon name types from each library's glyphMap
type IoniconsNames = keyof typeof Ionicons.glyphMap;
type FontAwesomeNames = keyof typeof FontAwesome.glyphMap;
type AntDesignNames = keyof typeof AntDesign.glyphMap;
type MaterialIconsNames = keyof typeof MaterialIcons.glyphMap;
type MaterialCommunityIconsNames = keyof typeof MaterialCommunityIcons.glyphMap;
type FeatherNames = keyof typeof Feather.glyphMap;

interface IconProps {
  type?: IconType;
  name:
    | IoniconsNames
    | FontAwesomeNames
    | AntDesignNames
    | MaterialIconsNames
    | MaterialCommunityIconsNames
    | FeatherNames;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const Icon: React.FC<IconProps> = ({
  type = "Ionicons",
  name,
  size = 24,
  color = "#000",
  style,
}) => {
  const getIcon = () => {
    switch (type) {
      case "FontAwesome":
        return (
          <FontAwesome
            name={name as FontAwesomeNames}
            size={size}
            color={color}
            style={style}
          />
        );
      case "AntDesign":
        return (
          <AntDesign
            name={name as AntDesignNames}
            size={size}
            color={color}
            style={style}
          />
        );
      case "MaterialIcons":
        return (
          <MaterialIcons
            name={name as MaterialIconsNames}
            size={size}
            color={color}
            style={style}
          />
        );
      case "MaterialCommunityIcons":
        return (
          <MaterialCommunityIcons
            name={name as MaterialCommunityIconsNames}
            size={size}
            color={color}
            style={style}
          />
        );
      case "Feather":
        return (
          <Feather
            name={name as FeatherNames}
            size={size}
            color={color}
            style={style}
          />
        );
      default:
        return (
          <Ionicons
            name={name as IoniconsNames}
            size={size}
            color={color}
            style={style}
          />
        );
    }
  };

  return getIcon();
};

export default Icon;
