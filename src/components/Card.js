import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import moment from "moment";
import "moment/locale/tr";
import useFetch from "../services/hooks/useFetch";
import getUniqueID from "../utils/generateId";
import currencyFormat from "../utils/currencyFormat";
import { EmojiButton } from "./Button";
import { COLORS } from "../constants/colors";

export const SalaryCard = ({
  id,
  userId,
  company,
  createdAt,
  experience,
  location,
  netSalary,
  benefits,
  position,
  salaryReactions,
  office,
  technology,
  level,
  employeeCount,
}) => {
  const uniqueId = getUniqueID();
  const experienceMap = {
    0: "0-1 yıl",
    1: "1-3 yıl",
    4: "4-6 yıl",
    7: "7-9 yıl",
    default: "10+ yıl",
  };
  const time = moment
    .utc(createdAt)
    .add(3, "hours")
    .local("tr")
    .startOf("seconds")
    .fromNow();

  const { data, error, loading, setBody, setUrl } = useFetch(
    null,
    "POST",
    null
  );

  const [upPressed, setUpPressed] = useState(false);
  const [downPressed, setDownPressed] = useState(false);
  const [greatPressed, setGreatPressed] = useState(false);
  const [susPressed, setSusPressed] = useState(false);

  const SavePressHandler = (reaction) => {
    let pressed = false;
    switch (reaction) {
      case 0:
        pressed = upPressed;
        setUpPressed(!pressed);
        break;
      case 1:
        pressed = downPressed;
        setDownPressed(!pressed);
        break;
      case 2:
        pressed = greatPressed;
        setGreatPressed(!pressed);
        break;
      case 3:
        pressed = susPressed;
        setSusPressed(!pressed);
        break;
      default:
        break;
    }

    if (!pressed) {
      setUrl("https://brut.azurewebsites.net/api/v1/Salary/salaryreaction");
      setBody({
        salaryId: id,
        userId: uniqueId,
        reaction: reaction,
      });
    }
    console.log("pressed", reaction);
  };
  return (
    <View style={styles.cardContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.leftContent}>
            <View style={styles.infoContainer}>
              <Text style={styles.name}>Pozisyon : </Text>
              <Text numberOfLines={1} style={styles.value}>
                {position}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.name}>Deneyim : </Text>
              <Text numberOfLines={1} style={styles.value}>
                {experienceMap[experience] || experienceMap.default} | {level}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.name}> 💵 </Text>
              <Text style={styles.value}>
                {currencyFormat(netSalary)} ₺ Net
                {benefits && ` | ${benefits}`}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <EmojiButton
                source={require("../../assets/reactions/up.png")}
                count={upPressed ? salaryReactions.up + 1 : salaryReactions.up}
                onPress={() => SavePressHandler(0)}
                pressed={upPressed}
              />
              <EmojiButton
                source={require("../../assets/reactions/down.png")}
                count={
                  downPressed ? salaryReactions.down + 1 : salaryReactions.down
                }
                onPress={() => SavePressHandler(1)}
                pressed={downPressed}
              />
            </View>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.rightContent}>
            <Text numberOfLines={1} style={styles.value}>
              {"📍 "}
              {location || "―"}
            </Text>
          </View>
          <View style={styles.rightContent}>
            <Text style={styles.name}> 🏢 </Text>
            <Text numberOfLines={1} style={styles.value}>
              {employeeCount ? `${employeeCount} kişi` : "―"}
            </Text>
          </View>
          <View style={styles.rightContent}>
            <Text style={styles.name}> 🏠 </Text>
            <Text numberOfLines={1} style={styles.value}>
              {office || "―"}
            </Text>
          </View>
          <View style={styles.rightContent}>
            <Text style={styles.name}> 💻 </Text>
            <Text numberOfLines={1} style={{ ...styles.value, maxWidth: 300 }}>
              {technology || "―"}
            </Text>
          </View>
          <View style={styles.rightContent}>
            <Text style={styles.value}>{time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 150,
    width: "100%",
    padding: 16,
    marginVertical: 8,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    borderColor: COLORS.BORDER,
    borderWidth: 1,
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  contentContainer: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
  },
  leftContainer: {
    flexDirection: "row",
  },
  leftContent: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  rightContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    position: "absolute",
    right: 0,
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: COLORS.TEXT_DARK,
    textAlign: "center",
  },
  value: {
    color: COLORS.TEXT_DARK,
    fontSize: 14,
    maxWidth: 200,
    textAlign: "center",
  },
});
