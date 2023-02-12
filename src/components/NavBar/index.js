import { View } from "react-native";
import React from "react";
import { TextButton } from "../Button";
import { useTranslation } from "react-i18next";

const NavBar = ({ style, productRef, pricingRef, aboutRef }) => {
  const { t } = useTranslation();

  return (
    <View style={[{ flexDirection: "row" }, style]}>
      <TextButton text={t("header.product")} onPress={productRef} />
      <TextButton text={t("header.solution")} onPress={productRef} />
      <TextButton text={t("header.customer")} onPress={productRef} />
      <TextButton text={t("header.pricing")} onPress={pricingRef} />
      <TextButton text={t("header.aboutUs")} onPress={aboutRef} />
    </View>
  );
};

export default NavBar;
