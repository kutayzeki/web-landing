import { useState } from "react";
import { useTranslation } from "react-i18next";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { COLORS } from "../../constants/colors";
import globalStyles from "../../constants/globalStyles";
import { IconButton, TextButton } from "../Button";
export const Footer = () => {
  const { t } = useTranslation();

  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("screen").width
  );

  Dimensions.addEventListener("change", ({ window }) => {
    setScreenWidth(window.width);
  });
  return (
    <View
      style={[
        styles.footer,
        {
          flexDirection: screenWidth > 850 ? "row" : "column",
          marginVertical: 150,
          alignSelf: "center",
        },
      ]}
    >
      <View
        style={{
          flexDirection: "column",
          width: 300,
          margin: 16,
        }}
      >
        <Image
          style={styles.image}
          source={require("../../../assets/logo.png")}
        />
        <Text style={globalStyles.text20Style}>{t("footer.copyright")}</Text>
      </View>
      <View
        style={{
          flexDirection: screenWidth > 850 ? "row" : "column",
          padding: 16,
          justifyContent: "space-between",
          width: screenWidth > 800 ? 500 : 300,
          marginBottom: 16,
          marginTop: 16,
        }}
      >
        <View style={{ marginBottom: 16 }}>
          <Text
            style={[
              globalStyles.text18Style,
              { fontWeight: "bold", marginBottom: 8 },
            ]}
          >
            {t("footer.company")}
          </Text>
          <TextButton
            text={t("footer.aboutUs")}
            textStyle={{
              marginBottom: 8,
              textAlign: "left",
              color: COLORS.TEXT_SECONDARY,
            }}
            onPress={() => console.log("pressed")}
          />
          <TextButton
            text={t("footer.product")}
            textStyle={{
              marginBottom: 8,
              textAlign: "left",
              color: COLORS.TEXT_SECONDARY,
            }}
            onPress={() => console.log("pressed")}
          />
          <TextButton
            text={t("footer.testimonial")}
            textStyle={{
              marginBottom: 8,
              textAlign: "left",
              color: COLORS.TEXT_SECONDARY,
            }}
            onPress={() => console.log("pressed")}
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <Text
            style={[
              globalStyles.text18Style,
              { fontWeight: "bold", marginBottom: 8 },
            ]}
          >
            {t("footer.support")}
          </Text>
          <TextButton
            text={t("footer.faq")}
            textStyle={{
              marginBottom: 8,
              textAlign: "left",
              color: COLORS.TEXT_SECONDARY,
            }}
            onPress={() => console.log("pressed")}
          />
          <TextButton
            text={t("footer.policy")}
            textStyle={{
              marginBottom: 8,
              textAlign: "left",
              color: COLORS.TEXT_SECONDARY,
            }}
            onPress={() => console.log("pressed")}
          />
          <TextButton
            text={t("footer.terms")}
            textStyle={{
              marginBottom: 8,
              textAlign: "left",
              color: COLORS.TEXT_SECONDARY,
            }}
            onPress={() => console.log("pressed")}
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <Text
            style={[
              globalStyles.text18Style,
              { fontWeight: "bold", marginBottom: 8 },
            ]}
          >
            {t("footer.ourWorks")}
          </Text>
          <TextButton
            text={t("footer.pricing")}
            textStyle={{
              marginBottom: 8,
              textAlign: "left",
              color: COLORS.TEXT_SECONDARY,
            }}
            onPress={() => console.log("pressed")}
          />
          <TextButton
            text={t("footer.customer")}
            textStyle={{
              marginBottom: 8,
              textAlign: "left",
              color: COLORS.TEXT_SECONDARY,
            }}
            onPress={() => console.log("pressed")}
          />
          <TextButton
            text={t("footer.product")}
            textStyle={{
              marginBottom: 8,
              textAlign: "left",
              color: COLORS.TEXT_SECONDARY,
            }}
            onPress={() => console.log("pressed")}
          />
        </View>
        <View
          style={{
            flexDirection: screenWidth > 850 ? "column" : "row",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <IconButton
            icon="logo-twitter"
            color={"#00acee"}
            size={36}
            onPress={() => {
              console.log("pressed");
            }}
          />
          <IconButton
            icon="logo-instagram"
            color={COLORS.BLACK}
            size={36}
            onPress={() => {
              console.log("pressed");
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  image: {
    height: 50,
    width: 145,
    resizeMode: "contain",
  },
});
