import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../constants/colors";
import { useTheme } from "@react-navigation/native";

const InfoText = () => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        padding: 16,
        width: "100%",
        backgroundColor: COLORS.PRIMARY,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
        marginBottom: 10,
      }}
    >
      <Text
        style={{
          color: COLORS.TEXT_LIGHT,
          width: "95%",
        }}
      >
        Welcome to our app! We're glad you're here.
      </Text>
      <Icon
        style={{ position: "absolute", top: 8, right: 8 }}
        name="ios-close"
        size={20}
        color={colors.text}
        onPress={() => console.log("Closed")}
      />
    </View>
  );
};

export default InfoText;

const styles = StyleSheet.create({});
