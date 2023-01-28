import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import React from "react";

const Walkthrough = ({ setShowWalkthrough }) => {
  return (
    <TouchableWithoutFeedback
      style={{ height: "100%", width: "100%" }}
      onPressIn={() => setShowWalkthrough(false)}
    >
      <View
        style={{
          justifyContent: "center",
          height: Dimensions.get("window").height,
          width: Dimensions.get("window").width,
          alignItems: "center",
          position: "absolute",
          top: 0,
          bottom: 0,
          zIndex: 999,
          backgroundColor: "rgba(52, 52, 52, 0.8)",
        }}
      >
        <Image
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            resizeMode: "contain",
            alignSelf: "center",
            opacity: 1,
          }}
          source={require("../../../assets/walkthroughScreen.png")}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Walkthrough;
