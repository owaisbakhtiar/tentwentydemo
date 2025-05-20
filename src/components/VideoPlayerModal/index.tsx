import React from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { WebView } from "react-native-webview";
import COLORS from "@constants/colors";
import FONTS from "@constants/fonts";

const { width, height } = Dimensions.get("window");

interface VideoPlayerModalProps {
  visible: boolean;
  videoId: string | null;
  onClose: () => void;
}

const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  visible,
  videoId,
  onClose,
}) => {
  const getYouTubeEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=0&modestbranding=1&rel=0&showinfo=0&fs=1&controls=1`;
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      presentationStyle="fullScreen"
    >
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onClose}
          style={styles.doneBtn}
          activeOpacity={0.8}
        >
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
        {videoId ? (
          <View style={styles.playerWrapper}>
            <WebView
              source={{ uri: getYouTubeEmbedUrl(videoId) }}
              style={styles.webview}
              allowsFullscreenVideo={true}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              startInLoadingState={true}
              renderLoading={() => (
                <ActivityIndicator
                  size="large"
                  color={COLORS.darkPurple}
                  style={styles.loader}
                />
              )}
            />
          </View>
        ) : (
          <ActivityIndicator
            size="large"
            color={COLORS.darkPurple}
            style={{ flex: 1 }}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  doneBtn: {
    position: "absolute",
    top: 48,
    right: 24,
    zIndex: 10,
    backgroundColor: COLORS.gray,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  doneText: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: 16,
  },
  playerWrapper: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  webview: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -20 }, { translateY: -20 }],
  },
});

export default VideoPlayerModal;
