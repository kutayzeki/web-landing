import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import globalStyles from "../../constants/globalStyles";
import { ActionButton, HeroAction } from "../Button";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("screen").width
  );

  Dimensions.addEventListener("change", ({ window }) => {
    setScreenWidth(window.width);
  });

  return (
    <View style={styles.container}>
      {/* Hero  
        
        //Title - L

        //Description - L 

        //Visual - R


        //Email - L 

        //Action Item - L
        

        //Social Proof - Full View
        */}

      <View
        style={
          screenWidth > 800 ? styles.heroContainer : styles.heroMobileContainer
        }
      >
        <View
          style={{
            ...styles.leftContainer,
            width: screenWidth > 800 ? screenWidth * 0.4 : screenWidth * 0.9,
          }}
        >
          <Text
            style={{
              ...globalStyles.titleStyle,
              textAlign: screenWidth > 800 ? "left" : "center",
              fontSize: screenWidth > 1000 ? 64 : 48,
            }}
          >
            The best products start with Figma
          </Text>
          <Text
            style={{
              ...globalStyles.subtitleStyle,
              textAlign: screenWidth > 800 ? "left" : "center",
              fontSize: screenWidth > 1000 ? 20 : 16,
            }}
          >
            We provide many features that you can use cheaply and easily. Try it
            now and get an interesting promo
          </Text>
          {/* Email & Action Button */}
          <View>
            <TextInput
              style={{
                ...styles.input,
                fontSize: screenWidth > 1000 ? 24 : 16,
                alignSelf: screenWidth > 800 ? "baseline" : "center",
                zIndex: 9999,
              }}
              placeholder="Your email"
              maxLength={100}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <HeroAction
              title="Try for free"
              backgroundColor={COLORS.SECONDARY}
              textColor={COLORS.TEXT_SECONDARY}
              style={{
                height: 56,
                width: "100%",
                maxWidth: 350,
                backgroundColor: COLORS.SECONDARY,
                alignSelf: screenWidth > 800 ? "baseline" : "center",
                marginBottom: 20,
              }}
            />
          </View>
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
            source={require("../../../assets/icon.png")}
          />
          {/* Visual */}
        </View>
      </View>
      <View>{/* Social Proof */}</View>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    padding: 20,
    paddingVertical: 50,
  },
  heroContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 1400,
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
    maxWidth: 600,
  },
  rightContainer: {
    justifyContent: "flex-start",
  },
  image: {
    height: 500,
    width: 500,
    resizeMode: "contain",
  },
  input: {
    height: 56,
    backgroundColor: "#8A57F9",
    maxWidth: 350,
    width: "100%",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: COLORS.BORDER,
    padding: 20,
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 12,
  },
});
