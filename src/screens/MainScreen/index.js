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

const MainScreen = () => {
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
        order={1}
        imageSource={require("../../../assets/images/solution1.png")}
      />
      <Features
        type={"REVERSE"}
        order={2}
        imageSource={require("../../../assets/images/solution2.png")}
      />
      <Features
        type={"DEFAULT"}
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
