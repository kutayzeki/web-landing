import { Image, Pressable, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const IconButton = ({
  icon = "person",
  color,
  size = 24,
  onPress,
  disabled = false,
}) => {
  return (
    <Pressable
      disabled={disabled}
      hitSlop={8}
      style={({ pressed }) => [{ opacity: pressed || disabled ? 0.5 : 1.0 }]}
      onPress={onPress}
    >
      <Icon name={icon} size={size} color={color} />
    </Pressable>
  );
};

export const EmojiButton = ({ source, count, onPress, pressed }) => (
  <Pressable
    accessibilityRole="button"
    onPress={onPress}
    style={[
      styles.reactionContainer,
      {
        backgroundColor: pressed ? "#6193FB" : null,
      },
    ]}
  >
    <Image style={styles.reactionEmoji} source={source} />
    <Text style={styles.reactionCount}>{count}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  reactionContainer: {
    flexDirection: "row",
    borderWidth: 0,
    borderColor: "#8B9AB7",
    borderWidth: 0.5,
    borderRadius: 30,
    height: 30,
    paddingHorizontal: 5,
    marginRight: 5,
  },
  reactionCount: {
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
    alignSelf: "center",
    marginLeft: 3,
  },
  reactionEmoji: {
    height: 20,
    width: 20,
    alignSelf: "center",
  },
});
