import { View, Text } from "react-native";
import React from "react";
import globalStyles from "../../constants/globalStyles";
import { COLORS } from "../../constants/colors";

const HelperText = ({ text, type = "info" }) => {
  let color;
  let fontWeight;
  let opacity;
  if (type === "info") {
    color = COLORS.GREY_DARK;
  } else if (type === "promotional") {
    // onboarding paywall
    color = COLORS.GREY_SOFT;
  } else if (type === "promotionalBold") {
    //onboarding paywall
    color = COLORS.GREY_SOFT;
    fontWeight = "bold";
  } else if (type === "error") {
    color = COLORS.ERROR;
  } else if (type === "warning") {
    color = COLORS.WARNING;
  } else if (type === "bold") {
    color = COLORS.BLACK;
    fontWeight = "bold";
    opacity = 1;
  } else {
    color = COLORS.BLACK;
    opacity = 1;
  }

  return (
    <View style={{ width: "90%" }}>
      <Text
        style={{ ...globalStyles.helperTextStyle, color, fontWeight, opacity }}
      >
        {text}
      </Text>
    </View>
  );
};

export default HelperText;
