import { Pressable } from "react-native";
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
