import { View } from "react-native";
import React from "react";
import { TextButton } from "../Button";
import { useTranslation } from "react-i18next";

const NavBar = ({ style }) => {
  const { t } = useTranslation();

  return (
    <View style={[{ flexDirection: "row" }, style]}>
      <TextButton
        text={t("header.product")}
        onPress={() => console.log("pressed")}
      />
      <TextButton
        text={t("header.solution")}
        onPress={() => console.log("pressed")}
      />
      <TextButton
        text={t("header.customer")}
        onPress={() => console.log("pressed")}
      />
      <TextButton
        text={t("header.pricing")}
        onPress={() => console.log("pressed")}
      />
      <TextButton
        text={t("header.aboutUs")}
        onPress={() => console.log("pressed")}
      />
    </View>
  );
};

export default NavBar;
