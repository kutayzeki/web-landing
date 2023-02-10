import { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { COLORS } from "../../constants/colors";
import globalStyles from "../../constants/globalStyles";
import { IconButton, TextButton } from "../Button";
export const Footer = () => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("screen").width
  );

  Dimensions.addEventListener("change", ({ window }) => {
    setScreenWidth(window.width);
  });
  return (
    <View
      style={[
        styles.footer,
        {
          flexDirection: screenWidth > 850 ? "row" : "column",
          marginVertical: 150,
          alignSelf: "center",
        },
      ]}
    >
      <View
        style={{
          flexDirection: "column",
          width: 300,
          margin: 16,
        }}
      >
        <Image
          style={styles.image}
          source={require("../../../assets/logo.png")}
        />
        <Text style={globalStyles.text20Style}>Copyright 2023</Text>
      </View>
      <View
        style={{
          flexDirection: screenWidth > 850 ? "row" : "column",
          padding: 16,
          justifyContent: "space-between",
          width: screenWidth > 800 ? 500 : 300,
          marginBottom: 16,
          marginTop: 16,
        }}
      >
        <View style={{ marginBottom: 16 }}>
          <Text
            style={[
              globalStyles.text18Style,
              { fontWeight: "bold", marginBottom: 8 },
            ]}
          >
            Company
          </Text>
          <TextButton
            text={"About Us"}
            textStyle={{
              marginBottom: 8,
              textAlign: "left",
              color: COLORS.BLACK_SOFT,
            }}
            onPress={() => console.log("pressed")}
          />
          <TextButton
            text={"Product"}
            textStyle={{
              marginBottom: 8,
              textAlign: "left",
              color: COLORS.BLACK_SOFT,
            }}
            onPress={() => console.log("pressed")}
          />
          <TextButton
            text={"Testimonial"}
            textStyle={{
              marginBottom: 8,
              textAlign: "left",
              color: COLORS.BLACK_SOFT,
            }}
            onPress={() => console.log("pressed")}
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <Text
            style={[
              globalStyles.text18Style,
              { fontWeight: "bold", marginBottom: 8 },
            ]}
          >
            Support
          </Text>
          <TextButton
            text={"FAQ"}
            textStyle={{
              marginBottom: 8,
              textAlign: "left",
              color: COLORS.BLACK_SOFT,
            }}
            onPress={() => console.log("pressed")}
          />
          <TextButton
            text={"Privacy Policy"}
            textStyle={{
              marginBottom: 8,
              textAlign: "left",
              color: COLORS.BLACK_SOFT,
            }}
            onPress={() => console.log("pressed")}
          />
          <TextButton
            text={"Terms of Services"}
            textStyle={{
              marginBottom: 8,
              textAlign: "left",
              color: COLORS.BLACK_SOFT,
            }}
            onPress={() => console.log("pressed")}
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <Text
            style={[
              globalStyles.text18Style,
              { fontWeight: "bold", marginBottom: 8 },
            ]}
          >
            Our Works
          </Text>
          <TextButton
            text={"Pricing"}
            textStyle={{
              marginBottom: 8,
              textAlign: "left",
              color: COLORS.BLACK_SOFT,
            }}
            onPress={() => console.log("pressed")}
          />
          <TextButton
            text={"Customer"}
            textStyle={{
              marginBottom: 8,
              textAlign: "left",
              color: COLORS.BLACK_SOFT,
            }}
            onPress={() => console.log("pressed")}
          />
          <TextButton
            text={"Product"}
            textStyle={{
              marginBottom: 8,
              textAlign: "left",
              color: COLORS.BLACK_SOFT,
            }}
            onPress={() => console.log("pressed")}
          />
        </View>
        <View
          style={{
            flexDirection: screenWidth > 850 ? "column" : "row",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <IconButton
            icon="logo-twitter"
            color={"#00acee"}
            size={36}
            onPress={() => {
              console.log("pressed");
            }}
          />
          <IconButton
            icon="logo-instagram"
            color={COLORS.BLACK}
            size={36}
            onPress={() => {
              console.log("pressed");
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  image: {
    height: 50,
    width: 145,
    resizeMode: "contain",
  },
});
