import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import useFetch from "../../services/hooks/useFetch";
import getUniqueID from "../../utils/generateId";
import { styles } from "./styles";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import Hero from "../../components/Hero";
import Features from "../../components/Sections/Features";
import Pricing from "../../components/Sections/Pricing";
import { useTranslation } from "react-i18next";

const MainScreen = () => {
  const { t } = useTranslation();

  const uniqueID = getUniqueID();

  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("screen").width
  );

  Dimensions.addEventListener("change", ({ window }) => {
    setScreenWidth(window.width);
  });

  return (
    <View style={styles.main}>
      <Header />

      <Hero />

      <Features
        type={"DEFAULT"}
        title={t("features.featureTitle1")}
        subtitle={t("features.featureSubtitle1")}
        order={1}
        imageSource={require("../../../assets/images/solution1.png")}
      />
      <Features
        type={"REVERSE"}
        title={t("features.featureTitle2")}
        subtitle={t("features.featureSubtitle2")}
        order={2}
        imageSource={require("../../../assets/images/solution2.png")}
      />
      <Features
        type={"DEFAULT"}
        title={t("features.featureTitle3")}
        subtitle={t("features.featureSubtitle3")}
        order={3}
        imageSource={require("../../../assets/images/solution3.png")}
      />

      <Pricing />

      {/* Testimonial */}

      <Footer />
    </View>
  );
};

export default MainScreen;
