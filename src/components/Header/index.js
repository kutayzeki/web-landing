import {
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants/colors";
import { AuthButtons, IconButton, TextButton } from "../Button";
import NavBar from "../NavBar";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("screen").width
  );

  Dimensions.addEventListener("change", ({ window }) => {
    setScreenWidth(window.width);
  });
  const [menuVisible, setMenuVisible] = useState(false);
  const Menu = () => {
    const { t } = useTranslation();
    return (
      <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
        <Modal animationType="none" transparent={true} visible={menuVisible}>
          <View style={styles.modalContainer}>
            <View
              style={{
                position: "absolute",
                top: 20,
                right: 10,
              }}
            >
              <IconButton
                icon="ios-close"
                color={COLORS.TEXT_LIGHT}
                size={30}
                onPress={() => {
                  setMenuVisible(false);
                }}
              />
            </View>
            <View style={{ height: 50 }}></View>
            <View style={{ height: "50%", justifyContent: "space-between" }}>
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
            <AuthButtons />
          </View>
        </Modal>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <View style={styles.header}>
      <View style={styles.itemsContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/logo.png")}
        />
        {screenWidth > 800 ? (
          <>
            <NavBar /> <AuthButtons />
          </>
        ) : (
          <IconButton
            icon="ios-menu"
            size={32}
            color={COLORS.WHITE}
            onPress={() => setMenuVisible(true)}
          />
        )}
        <Menu />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.PRIMARY,
    height: 80,
    zIndex: 999,
  },
  itemsContainer: {
    maxWidth: 1400,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
  },
  image: {
    height: "100%",
    width: 145,
    marginLeft: 10,
    resizeMode: "contain",
  },
  modalContainer: {
    height: "100%",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: COLORS.PRIMARY,
    padding: 20,
    width: 300,
  },
});
