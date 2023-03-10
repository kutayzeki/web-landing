import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
import globalStyles from "../../constants/globalStyles";
import { COLORS } from "../../constants/colors";
import { useTranslation } from "react-i18next";

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
export const AuthButtons = () => {
  const { t } = useTranslation();

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <ActionButtonInverse
        title={t("header.login")}
        onPress={() => console.log("pressed")}
      />
      <ActionButton
        title={t("header.signUp")}
        onPress={() => console.log("pressed")}
      />
    </View>
  );
};
export const HeroAction = ({
  textColor = COLORS.PRIMARY,
  title = "..",
  onPress,
  style,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[globalStyles.actionButton, style]}
      onPress={async () => {
        onPress();
      }}
      disabled={disabled}
    >
      <Text style={{ ...globalStyles.actionButtonText, color: textColor }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export const ActionButton = ({
  backgroundColor = "white",
  textColor = COLORS.PRIMARY,
  title = "..",
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{ ...globalStyles.actionButton, backgroundColor: backgroundColor }}
      onPress={async () => {
        onPress();
        /* await analytics.logEvent(`${title.replace(/[^\w]/gi, "")}`, {
          name: { title },
        });
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); */
      }}
    >
      <Text style={{ ...globalStyles.actionButtonText, color: textColor }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const ActionButtonInverse = ({
  backgroundColor = "transparent",
  textColor = COLORS.TEXT_PRIMARY,
  title = "Login",
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...globalStyles.actionButton,
        backgroundColor: backgroundColor,
        borderWidth: 1,
        borderColor: COLORS.WHITE,
      }}
      onPress={async () => {
        onPress();
        /*  await analytics.logEvent(`${title.replace(/[^\w]/gi, "")}`, {
          name: { title },
        });
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); */
      }}
    >
      <Text style={{ ...globalStyles.actionButtonText, color: textColor }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export const TextButton = ({ text = "..", onPress, textStyle }) => {
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1.0 }]}
      onPress={async () => {
        onPress();
        /*  await analytics.logEvent(`${text.replace(/[^\w]/gi, "")}`, {
          name: { text },
        });
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); */
      }}
    >
      <View>
        <Text style={[globalStyles.textButton, textStyle]}>{text}</Text>
      </View>
    </Pressable>
  );
};
