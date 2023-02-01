import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";
import "moment/locale/tr";
import useFetch from "../../services/hooks/useFetch";
import getUniqueID from "../../utils/generateId";
import currencyFormat from "../../utils/currencyFormat";
import { EmojiButton } from "../Button";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../constants/colors";

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
                source={require("../../../assets/reactions/up.png")}
                count={upPressed ? salaryReactions.up + 1 : salaryReactions.up}
                onPress={() => SavePressHandler(0)}
                pressed={upPressed}
              />
              <EmojiButton
                source={require("../../../assets/reactions/down.png")}
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

export const Averages = ({ item }) => {
  const MIN = item.minNetSalary;
  const MAX = item.maxNetSalary;
  const AVG_MIN = item.minAverageSalary;
  const AVG_MAX = item.maxAverageSalary;
  const AVG = item.averageNetSalary;

  const toPercentage = (val) => {
    const numerator = val - MIN;
    const denominator = MAX - MIN;
    console.log("numerator", numerator);
    return (numerator / denominator) * 100;
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 20,
        backgroundColor: COLORS.WHITE,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: COLORS.GREY_SOFT,
      }}
    >
      <View
        style={{
          alignSelf: "center",
          justifyContent: "flex-start",
          width: "33%",
        }}
      >
        <Text
          style={{ textAlign: "left", fontWeight: "300", fontSize: 16 }}
        >{`${item.level} ${item.position}`}</Text>
      </View>
      <View style={styles.chartContainer}>
        <View style={{ marginLeft: `${toPercentage(AVG)}%` }}>
          <View style={{ flexDirection: "row" }}>
            <Icon
              name="caret-down"
              size={16}
              color={COLORS.BLACK_SOFT}
              style={{ alignSelf: "flex-end" }}
            />
            <View style={{ marginBottom: 10 }}>
              <Text
                style={{
                  width: 100,
                  fontSize: 12,
                  fontWeight: "bold",
                  position: "absolute",
                  left: -30,
                  bottom: 10,
                }}
              >{`${currencyFormat(AVG)} ₺ / ay`}</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ marginLeft: `${toPercentage(AVG_MIN)}%` }}>
            <Text style={{ fontSize: 12 }}>{`${currencyFormat(
              AVG_MIN
            )} ₺`}</Text>
          </View>
          <View
            style={{
              marginRight: `${
                90 - toPercentage(AVG_MAX) + toPercentage(AVG_MIN)
              }%`,
            }}
          >
            <Text style={{ fontSize: 12 }}>{`${currencyFormat(
              AVG_MAX
            )} ₺`}</Text>
          </View>
        </View>
        <View style={styles.chart}>
          <View
            style={{
              ...styles.progress,
              marginLeft: `${toPercentage(AVG_MIN)}%`,
              marginRight: `${
                100 + toPercentage(AVG_MIN) - toPercentage(AVG_MAX)
              }%`,
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ position: "absolute", left: 0 }}>
            <Text
              style={{ fontSize: 12, textAlign: "left" }}
            >{`${currencyFormat(MIN)} ₺`}</Text>
            <Text
              style={{ fontSize: 12, fontWeight: "bold", textAlign: "left" }}
            >{`En düşük`}</Text>
          </View>
          <View style={{ position: "absolute", right: 0 }}>
            <Text
              style={{ fontSize: 12, textAlign: "right" }}
            >{`${currencyFormat(MAX)} ₺`}</Text>
            <Text
              style={{ fontSize: 12, fontWeight: "bold", textAlign: "right" }}
            >{`En yüksek`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
