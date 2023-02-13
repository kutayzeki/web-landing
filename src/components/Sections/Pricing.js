import {
  Dimensions,
  Image,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants/colors";
import globalStyles from "../../constants/globalStyles";
import { HeroAction } from "../Button";
import Icon from "react-native-vector-icons/Ionicons";
import { ExtendedPrice, PremiumPrice, StandartPrice } from "../Card/Price";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();

  const [period, setPeriod] = useState("year");

  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("screen").width
  );

  Dimensions.addEventListener("change", ({ window }) => {
    setScreenWidth(window.width);
  });

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 0 }}>
        {/* Title */}
        <Text
          style={{
            ...globalStyles.titleStyle,
            textAlign: "center",
            fontSize: screenWidth > 1000 ? 64 : 48,
          }}
        >
          {t("pricing.title")}
        </Text>
        {/* Subtitle */}
        <Text
          style={{
            ...globalStyles.subtitleStyle,
            textAlign: "center",
            fontSize: screenWidth > 1000 ? 20 : 16,
          }}
        >
          {t("pricing.subtitle")}
        </Text>
      </View>
      {/* Pricing switch */}
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            ...globalStyles.subtitleStyle,
            fontSize: screenWidth > 1000 ? 20 : 16,
            paddingRight: 10,
            fontWeight: period === "month" && "bold",
          }}
        >
          {t("pricing.monthly")}
        </Text>
        <Switch
          style={{
            transform: [{ scaleX: 2 }, { scaleY: 2 }],
            marginHorizontal: 20,
          }}
          value={period === "year"}
          onValueChange={(value) => setPeriod(value ? "year" : "month")}
        />
        <Text
          style={{
            ...globalStyles.subtitleStyle,
            paddingLeft: 10,
            fontSize: screenWidth > 1000 ? 20 : 16,
            fontWeight: period === "year" && "bold",
          }}
        >
          {t("pricing.annually")}
        </Text>
      </View>
      {/* Cards */}
      <PriceSection period={period} />
    </View>
  );
};

export default Pricing;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    padding: 20,
    paddingVertical: 100,
  },
  featureContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 1200,
    marginTop: 50,
    width: "100%",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  heroMobileContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftContainer: {
    //maxWidth: 600,
    marginBottom: 20,
  },
  rightContainer: {
    justifyContent: "flex-start",
  },
  image: {
    height: 500,
    width: 500,
    resizeMode: "contain",
  },
});

const PriceSection = ({ period }) => {
  //per month
  //TODO get to a config file
  const standartPrice = 10;
  const extendedPrice = 15;
  const premiumPrice = 20;

  const [selectedPlan, setSelectedPlan] = useState(1);

  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("screen").width
  );

  Dimensions.addEventListener("change", ({ window }) => {
    setScreenWidth(window.width);
  });
  return (
    <View
      style={{
        flexDirection: screenWidth > 850 ? "row" : "column",
        width: "100%",
        maxWidth: 1400,
        justifyContent: "space-between",
        alignSelf: "center",
      }}
    >
      <StandartPrice
        type={selectedPlan === 0 ? "SELECTED" : "DEFAULT"}
        price={period === "year" ? standartPrice * 8 : standartPrice}
        per={`/${period}`}
        setSelectedPlan={setSelectedPlan}
      />
      <ExtendedPrice
        type={selectedPlan === 1 ? "SELECTED" : "DEFAULT"}
        price={period === "year" ? extendedPrice * 8 : extendedPrice}
        per={`/${period}`}
        setSelectedPlan={setSelectedPlan}
      />
      <PremiumPrice
        type={selectedPlan === 2 ? "SELECTED" : "DEFAULT"}
        price={period === "year" ? premiumPrice * 8 : premiumPrice}
        per={`/${period}`}
        setSelectedPlan={setSelectedPlan}
      />
    </View>
  );
};
