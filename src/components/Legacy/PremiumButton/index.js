import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import * as analytics from "expo-firebase-analytics";

const PremiumButton = ({
  textColor = COLORS.TEXT_LIGHT,
  text = "Unlock All Features",
  titleText = "Application Pro",
  rightIconName = "chevron-forward",
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={async () => {
        onPress();
        await analytics.logEvent(`PremiumButtonSettingsPressed`);
      }}
    >
      <LinearGradient
        colors={[COLORS.PRIMARY300, COLORS.PRIMARY600]}
        style={{ flex: 1, height: 88, borderRadius: 10 }}
      >
        <View style={{ ...styles.containerStyle }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                ...styles.text16Style,
                color: textColor,
              }}
            >
              {text}
            </Text>
            <Text
              style={{
                ...styles.text18Style,
                color: textColor,
              }}
            >
              {titleText}
            </Text>
          </View>
          <Icon
            style={{ alignContent: "flex-end" }}
            name={rightIconName}
            size={24}
            color={textColor}
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PremiumButton;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    opacity: 1,
    height: "100%",
  },
  text16Style: {
    fontSize: 16,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  text18Style: {
    fontWeight: "bold",
    fontSize: 18,
    marginHorizontal: 12,
    marginVertical: 4,
  },
});
