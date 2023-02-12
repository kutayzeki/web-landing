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
import { HeroAction } from "../Button";
import Icon from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";

export const StandartPrice = ({ type, price, per }) => {
  const { t } = useTranslation();

  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("screen").width
  );

  Dimensions.addEventListener("change", ({ window }) => {
    setScreenWidth(window.width);
  });
  return (
    <View
      style={{
        width: screenWidth > 850 ? "32%" : "100%",
        maxWidth: 500,
        padding: 16,
        paddingVertical: 30,
        borderRadius: 12,
        marginBottom: 20,
        alignSelf: "center",
        backgroundColor: type === "DEFAULT" ? COLORS.WHITE : COLORS.SECONDARY,
      }}
    >
      {/* title */}
      <Text
        style={{
          textAlign: "center",
          fontSize: screenWidth > 1000 ? 32 : 24,
          marginBottom: 12,
          color: COLORS.TEXT_SECONDARY,
        }}
      >
        {t("pricing.standart")}
      </Text>
      {/* Subtitle */}
      <Text
        style={{
          textAlign: "center",
          fontSize: screenWidth > 1000 ? 20 : 16,
          marginBottom: 12,
          color: COLORS.TEXT_SECONDARY,
        }}
      >
        {t("pricing.standartSubtext")}
      </Text>
      {/* Price */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: screenWidth > 1000 ? 40 : 32,
            marginBottom: 12,
            color: COLORS.TEXT_SECONDARY,
          }}
        >
          {price}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: screenWidth > 1000 ? 20 : 16,
            color: COLORS.TEXT_SECONDARY,
          }}
        >
          {` $ /${per === "/month" ? t("pricing.month") : t("pricing.year")}`}
        </Text>
      </View>
      <HeroAction
        title={t("pricing.selectPlan")}
        onPress={() => console.log("Plan selected")}
        style={{
          backgroundColor: type === "DEFAULT" ? COLORS.SECONDARY : COLORS.WHITE,
          borderRadius: 8,
          height: 60,
          width: "50%",
          alignSelf: "center",
          marginBottom: 20,
        }}
        textColor={
          type === "DEFAULT" ? COLORS.TEXT_PRIMARY : COLORS.TEXT_SECONDARY
        }
      />
      <Benefits type={"DEFAULT"} text={t("pricing.benefit1")} />
      <Benefits type={"DEFAULT"} text={t("pricing.benefit2")} />
      <Benefits type={"DEFAULT"} text={t("pricing.benefit3")} />
      <Benefits type={"NOTINCLUDED"} text={t("pricing.benefit4")} />
      <Benefits type={"NOTINCLUDED"} text={t("pricing.benefit5")} />
      <Benefits type={"NOTINCLUDED"} text={t("pricing.benefit6")} />
      <Benefits type={"NOTINCLUDED"} text={t("pricing.benefit7")} />
    </View>
  );
};
export const ExtendedPrice = ({ type, price, per }) => {
  const { t } = useTranslation();

  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("screen").width
  );

  Dimensions.addEventListener("change", ({ window }) => {
    setScreenWidth(window.width);
  });
  return (
    <View
      style={{
        width: screenWidth > 850 ? "32%" : "100%",
        maxWidth: 500,
        padding: 16,
        paddingVertical: 30,
        borderRadius: 12,
        marginBottom: 20,
        alignSelf: "center",
        backgroundColor: type === "DEFAULT" ? COLORS.WHITE : COLORS.SECONDARY,
      }}
    >
      {/* title */}
      <Text
        style={{
          textAlign: "center",
          fontSize: screenWidth > 1000 ? 32 : 24,
          marginBottom: 12,
          color: COLORS.TEXT_SECONDARY,
        }}
      >
        {t("pricing.extended")}
      </Text>
      {/* discount */}
      {per === "/year" && (
        <View
          style={{
            backgroundColor: COLORS.SUCCESS,
            position: "absolute",
            top: 5,
            right: 5,
            paddingHorizontal: 15,
            borderRadius: 20,
            shadowColor: COLORS.BLACK,
            shadowOffset: { width: 2, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 24,

              color: COLORS.TEXT_PRIMARY,
            }}
          >
            -33%
          </Text>
        </View>
      )}
      {/* Subtitle */}
      <Text
        style={{
          textAlign: "center",
          fontSize: screenWidth > 1000 ? 20 : 16,
          marginBottom: 12,
          color: COLORS.TEXT_SECONDARY,
        }}
      >
        {t("pricing.extendedSubtext")}
      </Text>
      {/* Price */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: screenWidth > 1000 ? 40 : 32,
            marginBottom: 12,
            color: COLORS.TEXT_SECONDARY,
          }}
        >
          {price}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: screenWidth > 1000 ? 20 : 16,
            color: COLORS.TEXT_SECONDARY,
          }}
        >
          {` $ /${per === "/month" ? t("pricing.month") : t("pricing.year")}`}
        </Text>
      </View>
      <HeroAction
        title={t("pricing.selectPlan")}
        onPress={() => console.log("Plan selected")}
        style={{
          backgroundColor: type === "DEFAULT" ? COLORS.SECONDARY : COLORS.WHITE,
          borderRadius: 8,
          height: 60,
          width: "50%",
          alignSelf: "center",
          marginBottom: 20,
        }}
        textColor={
          type === "DEFAULT" ? COLORS.TEXT_PRIMARY : COLORS.TEXT_SECONDARY
        }
      />
      <Benefits type={"DEFAULT"} text={t("pricing.benefit1")} />
      <Benefits type={"DEFAULT"} text={t("pricing.benefit2")} />
      <Benefits type={"DEFAULT"} text={t("pricing.benefit3")} />
      <Benefits type={"DEFAULT"} text={t("pricing.benefit4")} />
      <Benefits type={"DEFAULT"} text={t("pricing.benefit5")} />
      <Benefits type={"NOTINCLUDED"} text={t("pricing.benefit6")} />
      <Benefits type={"NOTINCLUDED"} text={t("pricing.benefit7")} />
    </View>
  );
};
export const PremiumPrice = ({ type, price, per }) => {
  const { t } = useTranslation();

  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("screen").width
  );

  Dimensions.addEventListener("change", ({ window }) => {
    setScreenWidth(window.width);
  });
  return (
    <View
      style={{
        width: screenWidth > 850 ? "32%" : "100%",
        maxWidth: 500,
        padding: 16,
        paddingVertical: 30,
        borderRadius: 12,
        marginBottom: 20,
        alignSelf: "center",
        backgroundColor: type === "DEFAULT" ? COLORS.WHITE : COLORS.SECONDARY,
      }}
    >
      {/* title */}
      <Text
        style={{
          textAlign: "center",
          fontSize: screenWidth > 1000 ? 32 : 24,
          marginBottom: 12,
          color: COLORS.TEXT_SECONDARY,
        }}
      >
        {t("pricing.premium")}
      </Text>
      {/* Subtitle */}
      <Text
        style={{
          textAlign: "center",
          fontSize: screenWidth > 1000 ? 20 : 16,
          marginBottom: 12,
          color: COLORS.TEXT_SECONDARY,
        }}
      >
        {t("pricing.premiumSubtext")}
      </Text>
      {/* Price */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: screenWidth > 1000 ? 40 : 32,
            marginBottom: 12,
            color: COLORS.TEXT_SECONDARY,
          }}
        >
          {price}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: screenWidth > 1000 ? 20 : 16,
            color: COLORS.TEXT_SECONDARY,
          }}
        >
          {` $ /${per === "/month" ? t("pricing.month") : t("pricing.year")}`}
        </Text>
      </View>
      <HeroAction
        title={t("pricing.selectPlan")}
        onPress={() => console.log("Plan selected")}
        style={{
          backgroundColor: type === "DEFAULT" ? COLORS.SECONDARY : COLORS.WHITE,
          borderRadius: 8,
          height: 60,
          width: "50%",
          alignSelf: "center",
          marginBottom: 20,
        }}
        textColor={
          type === "DEFAULT" ? COLORS.TEXT_PRIMARY : COLORS.TEXT_SECONDARY
        }
      />
      <Benefits type={"DEFAULT"} text={t("pricing.benefit1")} />
      <Benefits type={"DEFAULT"} text={t("pricing.benefit2")} />
      <Benefits type={"DEFAULT"} text={t("pricing.benefit3")} />
      <Benefits type={"DEFAULT"} text={t("pricing.benefit4")} />
      <Benefits type={"DEFAULT"} text={t("pricing.benefit5")} />
      <Benefits type={"DEFAULT"} text={t("pricing.benefit6")} />
      <Benefits type={"DEFAULT"} text={t("pricing.benefit7")} />
    </View>
  );
};
const Benefits = ({ type, text }) => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("screen").width
  );

  Dimensions.addEventListener("change", ({ window }) => {
    setScreenWidth(window.width);
  });
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        width: "90%",
        alignSelf: "center",
        marginVertical: 12,
      }}
    >
      <Icon
        name={"ios-checkmark-circle"}
        size={24}
        color={type === "DEFAULT" ? COLORS.PRIMARY : COLORS.GREY_DARK}
        style={{ alignSelf: "center", marginRight: 3 }}
      />
      <Text
        style={{
          fontSize: screenWidth > 1000 ? 24 : 20,
          color: COLORS.TEXT_SECONDARY,
        }}
      >
        {text}
      </Text>
    </View>
  );
};
