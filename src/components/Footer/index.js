import { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { COLORS } from "../../constants/colors";
import globalStyles from "../../constants/globalStyles";
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
        { flexDirection: screenWidth > 850 ? "row" : "column" },
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
        <Text style={globalStyles.text20Style}>
          Copyright 2023 © Şeffaf Maaş
        </Text>
      </View>
      <View
        style={{
          flexDirection: screenWidth > 850 ? "row" : "column",
          padding: 16,
          justifyContent: "space-between",
          width: screenWidth > 800 ? 500 : 400,
          marginBottom: 16,
          marginTop: 16,
          marginRight: 16,
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
          <Text style={[globalStyles.text16Style, { marginBottom: 8 }]}>
            About Us
          </Text>
          <Text style={[globalStyles.text16Style, { marginBottom: 8 }]}>
            Product
          </Text>
          <Text style={[globalStyles.text16Style, { marginBottom: 8 }]}>
            Testimonial
          </Text>
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
          <Text style={[globalStyles.text16Style, { marginBottom: 8 }]}>
            FAQ
          </Text>
          <Text style={[globalStyles.text16Style, { marginBottom: 8 }]}>
            Privacy Policy
          </Text>
          <Text style={[globalStyles.text16Style, { marginBottom: 8 }]}>
            Terms of Services
          </Text>
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
          <Text style={[globalStyles.text16Style, { marginBottom: 8 }]}>
            Pricing
          </Text>
          <Text style={[globalStyles.text16Style, { marginBottom: 8 }]}>
            Customer
          </Text>
          <Text style={[globalStyles.text16Style, { marginBottom: 8 }]}>
            Product
          </Text>
        </View>
        <View
          style={{
            flexDirection: screenWidth > 850 ? "column" : "row",
          }}
        >
          <Text
            style={[
              globalStyles.text16Style,
              { marginBottom: 8, marginRight: 8, fontWeight: "bold" },
            ]}
          >
            Twitter
          </Text>
          <Text
            style={[
              globalStyles.text16Style,
              { marginBottom: 8, marginRight: 8, fontWeight: "bold" },
            ]}
          >
            Instagram
          </Text>
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
    paddingHorizontal: 150,
    marginVertical: 150,
  },
  image: {
    height: 50,
    width: 145,
    resizeMode: "contain",
  },
});
