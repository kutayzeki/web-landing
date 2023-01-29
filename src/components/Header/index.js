import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/colors";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.image}
        source={require("../../../assets/logo.png")}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.PRIMARY,
    height: 50,
    elevation: 1,
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
    justifyContent: "center",
    alignItems: "baseline",
  },
  image: {
    height: 40,
    width: 40,
    marginLeft: 10,
    resizeMode: "contain",
  },
});
