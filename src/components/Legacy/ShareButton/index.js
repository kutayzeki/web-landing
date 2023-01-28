import { StyleSheet, Pressable, Share } from "react-native";
import globalStyles from "../../constants/globalStyles";
import * as analytics from "expo-firebase-analytics";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "@react-navigation/native";
import * as Haptics from "expo-haptics";

export const ShareButton = ({
  icon = "share-outline",
  color,
  size = 24,
  props,
}) => {
  const { colors } = useTheme();

  const appLink = "https://apps.apple.com/app/apple-store/id1665263815";

  const onShare = async () => {
    await analytics.logEvent("sharePressed", {
      name: "sharePressed",
    });
    try {
      const result = await Share.share({
        message: props + "\n" + "\n" + "Browse more: " + appLink,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Pressable
      hitSlop={8}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
      onPress={() => {
        onShare();
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }}
    >
      <Icon name={icon} size={size} color={colors.text} />
    </Pressable>
  );
};
