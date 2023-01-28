import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Pressable,
  View,
} from "react-native";
import globalStyles from "../../constants/globalStyles";
import * as analytics from "expo-firebase-analytics";
import Icon from "react-native-vector-icons/Ionicons";
import * as Haptics from "expo-haptics";

const Button = ({
  backgroundColor = "black",
  textColor = "white",
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{ ...styles.buttonStyle, backgroundColor: backgroundColor }}
      onPress={onPress}
    >
      <Text style={{ ...styles.buttonTextStyle, color: textColor }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const ActionButton = ({
  backgroundColor = "black",
  textColor = "white",
  title = "..",
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{ ...globalStyles.actionButton, backgroundColor: backgroundColor }}
      onPress={async () => {
        onPress();
        await analytics.logEvent(`${title.replace(/[^\w]/gi, "")}`, {
          name: { title },
        });
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }}
    >
      <Text style={{ ...globalStyles.actionButtonText, color: textColor }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;

export const TextButton = ({ text = "..", onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1.0, marginTop: 12 }]}
      onPress={async () => {
        onPress();
        await analytics.logEvent(`${text.replace(/[^\w]/gi, "")}`, {
          name: { text },
        });
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }}
    >
      <View>
        <Text style={globalStyles.textButton}>{text}</Text>
      </View>
    </Pressable>
  );
};

export const IconButton = ({ icon = "person", color, size = 24, onPress }) => {
  return (
    <Pressable
      hitSlop={8}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
      onPress={onPress}
    >
      <Icon name={icon} size={size} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 24,
    backgroundColor: "black",
  },
  buttonTextStyle: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    alignSelf: "center",
  },
});
