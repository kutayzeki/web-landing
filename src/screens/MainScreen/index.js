import React, { useRef, useState } from "react";
import { View, Dimensions, ScrollView } from "react-native";
import useFetch from "../../services/hooks/useFetch";
import getUniqueID from "../../utils/generateId";
import { styles } from "./styles";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import Hero from "../../components/Hero";
import Features from "../../components/Sections/Features";
import Pricing from "../../components/Sections/Pricing";
import { useTranslation } from "react-i18next";
import { TextButton } from "../../components/Button";

const MainScreen = () => {
  const productRef = useRef(null);
  const pricingRef = useRef(null);
  const aboutRef = useRef(null);

  const handleProductPress = () => {
    if (productRef && productRef.current) {
      productRef.current.scrollIntoView();
    }
  };
  const handlePricingPress = () => {
    if (pricingRef && pricingRef.current) {
      pricingRef.current.scrollIntoView();
    }
  };
  const handleAboutPress = () => {
    if (aboutRef && aboutRef.current) {
      aboutRef.current.scrollIntoView();
    }
  };

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
      <Header
        productRef={handleProductPress}
        pricingRef={handlePricingPress}
        aboutRef={handleAboutPress}
      />

      <Hero />
      <ScrollView ref={productRef}>
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
      </ScrollView>

      <ScrollView ref={pricingRef}>
        <Pricing />
      </ScrollView>

      {/* Testimonial */}
      <ScrollView ref={aboutRef}>
        <Footer
          productRef={handleProductPress}
          pricingRef={handlePricingPress}
          aboutRef={handleAboutPress}
        />
      </ScrollView>
    </View>
  );
};

export default MainScreen;
