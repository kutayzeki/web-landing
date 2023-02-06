import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import useFetch from "../../services/hooks/useFetch";
import getUniqueID from "../../utils/generateId";
import { styles } from "./styles";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import Hero from "../../components/Hero";

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
      <View
        style={
          screenWidth > 994
            ? { ...styles.container, width: screenWidth }
            : { ...styles.smallContainer, width: screenWidth }
        }
      >
        <Hero />

        {/* Section 1 
        
        //Title
        //Desc

        //Feature 1 
        //Feature 2
        //Feature 3 
        //Feature 4

        */}

        {/* Section 2 
        
        //Title - L
        //Desc - L
        //Subtitle - optional L
        //Action Item - L

        //Visual - R
        
        */}

        {/* Pricing  
        
        //Title - Full View
        //Desc - Full View
        // Annual or Monthly Switch

        //Option 1
        //Option 2
        //Option 3

        //Visual - R
        
        */}

        {/* Testimonial  
        
        //Title

        //Testimonial 1
        //Testimonial 2
        //Testimonial 3
        
        */}
      </View>

      {/*  <Footer /> */}
    </View>
  );
};

export default MainScreen;
