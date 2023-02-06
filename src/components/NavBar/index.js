import { View } from "react-native";
import React from "react";
import { TextButton } from "../Button";

const NavBar = ({ style }) => {
  return (
    <View style={[{ flexDirection: "row" }, style]}>
      <TextButton text="Product" onPress={() => console.log("pressed")} />
      <TextButton text="Solution" onPress={() => console.log("pressed")} />
      <TextButton text="Customer" onPress={() => console.log("pressed")} />
      <TextButton text="Pricing" onPress={() => console.log("pressed")} />
      <TextButton text="About us" onPress={() => console.log("pressed")} />
    </View>
  );
};

export default NavBar;
