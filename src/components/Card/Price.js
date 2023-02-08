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

export const StandartPrice = ({ type, price, per }) => {
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
        }}
      >
        Standart
      </Text>
      {/* Subtitle */}
      <Text
        style={{
          textAlign: "center",
          fontSize: screenWidth > 1000 ? 20 : 16,
          marginBottom: 12,
        }}
      >
        The national average cost of buying coin easy.
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
          }}
        >
          {price}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: screenWidth > 1000 ? 20 : 16,
          }}
        >
          {per}
        </Text>
      </View>
      <HeroAction
        title="Select Plan"
        onPress={() => console.log("Plan selected")}
        style={{
          backgroundColor: type === "DEFAULT" ? COLORS.SECONDARY : COLORS.WHITE,
          borderRadius: 8,
          height: 60,
          width: "50%",
          alignSelf: "center",
          marginBottom: 20,
        }}
        textColor={type === "DEFAULT" ? COLORS.WHITE : COLORS.BLACK}
      />
      <Benefits type={"DEFAULT"} text={"5 collections"} />
      <Benefits type={"DEFAULT"} text={"Worldwide accessibility "} />
      <Benefits type={"DEFAULT"} text={"25 automation actions"} />
      <Benefits type={"DEFAULT"} text={"Access all features"} />
      <Benefits type={"DEFAULT"} text={"24 hours support"} />
      <Benefits type={"NOTINCLUDED"} text={"Sync accross devices"} />
      <Benefits type={"NOTINCLUDED"} text={"Share with more 5 users"} />
    </View>
  );
};
export const ExtendedPrice = ({ type, price, per }) => {
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
        }}
      >
        Extended
      </Text>
      {/* Subtitle */}
      <Text
        style={{
          textAlign: "center",
          fontSize: screenWidth > 1000 ? 20 : 16,
          marginBottom: 12,
        }}
      >
        The national average cost of buying coin easy.
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
          }}
        >
          {price}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: screenWidth > 1000 ? 20 : 16,
          }}
        >
          {per}
        </Text>
      </View>
      <HeroAction
        title="Select Plan"
        onPress={() => console.log("Plan selected")}
        style={{
          backgroundColor: type === "DEFAULT" ? COLORS.SECONDARY : COLORS.WHITE,
          borderRadius: 8,
          height: 60,
          width: "50%",
          alignSelf: "center",
          marginBottom: 20,
        }}
        textColor={type === "DEFAULT" ? COLORS.WHITE : COLORS.BLACK}
      />
      <Benefits type={"DEFAULT"} text={"5 collections"} />
      <Benefits type={"DEFAULT"} text={"Worldwide accessibility "} />
      <Benefits type={"DEFAULT"} text={"25 automation actions"} />
      <Benefits type={"DEFAULT"} text={"Access all features"} />
      <Benefits type={"DEFAULT"} text={"24 hours support"} />
      <Benefits type={"NOTINCLUDED"} text={"Sync accross devices"} />
      <Benefits type={"NOTINCLUDED"} text={"Share with more 5 users"} />
    </View>
  );
};
export const PremiumPrice = ({ type, price, per }) => {
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
        }}
      >
        Premium
      </Text>
      {/* Subtitle */}
      <Text
        style={{
          textAlign: "center",
          fontSize: screenWidth > 1000 ? 20 : 16,
          marginBottom: 12,
        }}
      >
        The national average cost of buying coin easy.
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
          }}
        >
          {price}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: screenWidth > 1000 ? 20 : 16,
          }}
        >
          {per}
        </Text>
      </View>
      <HeroAction
        title="Select Plan"
        onPress={() => console.log("Plan selected")}
        style={{
          backgroundColor: type === "DEFAULT" ? COLORS.SECONDARY : COLORS.WHITE,
          borderRadius: 8,
          height: 60,
          width: "50%",
          alignSelf: "center",
          marginBottom: 20,
        }}
        textColor={type === "DEFAULT" ? COLORS.WHITE : COLORS.BLACK}
      />
      <Benefits type={"DEFAULT"} text={"5 collections"} />
      <Benefits type={"DEFAULT"} text={"Worldwide accessibility "} />
      <Benefits type={"DEFAULT"} text={"25 automation actions"} />
      <Benefits type={"DEFAULT"} text={"Access all features"} />
      <Benefits type={"DEFAULT"} text={"24 hours support"} />
      <Benefits type={"NOTINCLUDED"} text={"Sync accross devices"} />
      <Benefits type={"NOTINCLUDED"} text={"Share with more 5 users"} />
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
        }}
      >
        {text}
      </Text>
    </View>
  );
};
