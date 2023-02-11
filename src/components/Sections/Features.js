import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants/colors";
import globalStyles from "../../constants/globalStyles";

const Features = ({
  type = "DEFAULT",
  order = 1,
  imageSource = require("../../../assets/images/solution1.png"),
}) => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("screen").width
  );

  Dimensions.addEventListener("change", ({ window }) => {
    setScreenWidth(window.width);
  });

  return (
    <View style={styles.container}>
      {order === 1 && (
        <View style={{ marginBottom: 50 }}>
          <Text
            style={{
              ...globalStyles.titleStyle,
              textAlign: "center",
              fontSize: screenWidth > 1000 ? 64 : 48,
            }}
          >
            Our Solution for your business
          </Text>
          <Text
            style={{
              ...globalStyles.subtitleStyle,
              textAlign: "center",
              fontSize: screenWidth > 1000 ? 20 : 16,
            }}
          >
            We make it easy for users to use our platform, that's why we provide
            this benefit.
          </Text>
        </View>
      )}
      <View
        style={[
          styles.featureContainer,
          {
            flexDirection:
              screenWidth <= 800
                ? "column"
                : type == "DEFAULT"
                ? "row"
                : "row-reverse",
          },
        ]}
      >
        <View
          style={[
            styles.leftContainer,
            { width: screenWidth > 800 ? "50%" : "100%" },
          ]}
        >
          <Text
            style={{
              ...globalStyles.titleStyle,
              textAlign: screenWidth > 800 ? "left" : "center",
              fontSize: screenWidth > 1000 ? 64 : 48,
            }}
          >
            Our Solution for your business
          </Text>
          <Text
            style={{
              ...globalStyles.subtitleStyle,
              textAlign: screenWidth > 800 ? "left" : "center",
              fontSize: screenWidth > 1000 ? 20 : 16,
            }}
          >
            We make it easy for users to use our platform, that's why we provide
            this benefit.
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <Image
            style={{
              ...styles.image,
              width:
                screenWidth > 1400
                  ? 500
                  : screenWidth > 1100
                  ? 480
                  : screenWidth > 800
                  ? 400
                  : screenWidth * 0.9,
              maxHeight: screenWidth <= 800 && 400,
            }}
            source={imageSource}
          />
          {/* Visual */}
        </View>
      </View>
    </View>
  );
};

export default Features;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    padding: 20,
    paddingVertical: 100,
  },
  featureContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 1200,
    marginTop: 50,
    width: "100%",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  heroMobileContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftContainer: {
    //maxWidth: 600,
    marginBottom: 20,
  },
  rightContainer: {
    justifyContent: "flex-start",
  },
  image: {
    height: 500,
    width: 500,
    resizeMode: "contain",
  },
});
