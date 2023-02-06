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

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("screen").width
  );

  Dimensions.addEventListener("change", ({ window }) => {
    setScreenWidth(window.width);
  });
  const [menuVisible, setMenuVisible] = useState(false);
  const Menu = () => {
    return (
      <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
        <Modal animationType="slide" transparent={true} visible={menuVisible}>
          <View style={styles.modalContainer}>
            <View style={{ position: "absolute", top: 10, right: 10 }}>
              <IconButton
                icon="ios-close"
                size={30}
                onPress={() => {
                  setMenuVisible(false);
                }}
              />
            </View>
            <View style={{ height: 50 }}></View>
            <TextButton text="Product" onPress={() => console.log("pressed")} />
            <TextButton
              text="Solution"
              onPress={() => console.log("pressed")}
            />
            <TextButton
              text="Customer"
              onPress={() => console.log("pressed")}
            />
            <TextButton text="Pricing" onPress={() => console.log("pressed")} />
            <TextButton
              text="About us"
              onPress={() => console.log("pressed")}
            />
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
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: COLORS.PRIMARY,
    padding: 20,
    width: 300,
  },
});
