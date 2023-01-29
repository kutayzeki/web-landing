import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={{ color: "black", fontSize: 12 }}>
        Copyright 2023 © Şeffaf Maaş
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: "baseline",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },
});
