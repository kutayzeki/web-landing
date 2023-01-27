import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";

import moment from "moment";
import "moment/locale/tr";
import useFetch from "../../useFetch";

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
  function getUniqueID() {
    const existingID = localStorage.getItem("uniqueID");
    if (existingID) {
      return existingID;
    } else {
      const newID = generateUniqueID();
      localStorage.setItem("uniqueID", newID);
      return newID;
    }
  }
  const uniqueId = getUniqueID();

  console.log("uniqueId", uniqueId);
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
  function currencyFormat(number) {
    let formattedNumber = Number.parseInt(number).toLocaleString("en-IN");
    return formattedNumber;
  }
  const SavePressHandler = (reaction) => {
    if (reaction === 0) {
      if (!upPressed) {
        setUpPressed(true);
        setUrl("https://brut.azurewebsites.net/api/v1/Salary/salaryreaction");
        setBody({
          salaryId: id,
          userId: uniqueId, //cachden kullanıcı id yaz.
          reaction: reaction,
        });
      } else setUpPressed(false);
    } else if (reaction === 1) {
      if (!downPressed) {
        setDownPressed(true);
        setUrl("https://brut.azurewebsites.net/api/v1/Salary/salaryreaction");
        setBody({
          salaryId: id,
          userId: uniqueId, //cachden kullanıcı id yaz.
          reaction: reaction,
        });
      } else setDownPressed(false);
    } else if (reaction === 2) {
      if (!greatPressed) {
        setGreatPressed(true);
        setUrl("https://brut.azurewebsites.net/api/v1/Salary/salaryreaction");
        setBody({
          salaryId: id,
          userId: uniqueId, //cachden kullanıcı id yaz.
          reaction: reaction,
        });
      } else setGreatPressed(false);
    } else if (reaction === 3) {
      if (!susPressed) {
        setSusPressed(true);
        setUrl("https://brut.azurewebsites.net/api/v1/Salary/salaryreaction");
        setBody({
          salaryId: id,
          userId: uniqueId, //cachden kullanıcı id yaz.
          reaction: reaction,
        });
      } else setSusPressed(false);
    }
    console.log("pressed", reaction);
  };
  const [upPressed, setUpPressed] = useState(false);
  const [downPressed, setDownPressed] = useState(false);
  const [greatPressed, setGreatPressed] = useState(false);
  const [susPressed, setSusPressed] = useState(false);

  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("screen").width
  );
  Dimensions.addEventListener("change", ({ window }) => {
    setScreenWidth(window.width);
  });

  return screenWidth > 600 ? (
    <View style={{ ...styles.card }}>
      <View
        style={{
          flexDirection: "row",
          height: "100%",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <View style={styles.infoContainer}>
              <Text style={styles.name}>Pozisyon : </Text>
              <Text numberOfLines={1} style={styles.value}>
                {position}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.name}>Deneyim : </Text>
              <Text numberOfLines={1} style={styles.value}>
                {experience === 0
                  ? "0-1 yıl"
                  : experience === 1
                  ? "1-3 yıl"
                  : experience === 4
                  ? "4-6 yıl"
                  : experience === 7
                  ? "7-9 yıl"
                  : experience >= 10
                  ? "10+ yıl"
                  : "10+ yıl"}
              </Text>
              <Text style={styles.value}> | </Text>
              <Text numberOfLines={1} style={styles.value}>
                {level}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.name}> 💵 </Text>
              <Text style={styles.value}>
                {currencyFormat(netSalary)} ₺ Net
              </Text>
              <Text style={styles.name}>{benefits ? " | " : ""}</Text>
              <Text numberOfLines={1} style={styles.value}>
                {benefits}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <Pressable
                accessibilityRole="button"
                onPress={() => SavePressHandler(0)}
                style={({ pressed }) => [
                  {
                    ...styles.reactionContainer,
                    opacity: pressed ? 0.5 : 1.0,
                    backgroundColor: upPressed ? "#6193FB" : null,
                  },
                ]}
              >
                <Image
                  style={styles.reactionEmoji}
                  source={require("../../assets/reactions/up.png")}
                />
                <Text style={styles.reactionCount}>
                  {upPressed ? salaryReactions.up + 1 : salaryReactions.up}
                </Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  {
                    ...styles.reactionContainer,
                    opacity: pressed ? 0.5 : 1.0,
                    backgroundColor: downPressed ? "#6193FB" : null,
                  },
                ]}
                accessibilityRole="button"
                onPress={() => SavePressHandler(1)}
              >
                <Image
                  style={styles.reactionEmoji}
                  source={require("../../assets/reactions/down.png")}
                />
                <Text style={styles.reactionCount}>
                  {downPressed
                    ? salaryReactions.down + 1
                    : salaryReactions.down}
                </Text>
              </Pressable>
              {/* <Pressable
                style={({ pressed }) => [
                  {
                    ...styles.reactionContainer,
                    opacity: pressed ? 0.5 : 1.0,
                    backgroundColor: greatPressed ? "#6193FB" : null,
                  },
                ]}
                accessibilityRole="button"
                onPress={() => SavePressHandler(2)}
              >
                <Image
                  style={styles.reactionEmoji}
                  source={require("../../assets/reactions/great.png")}
                />
                <Text style={styles.reactionCount}>
                  {greatPressed
                    ? salaryReactions.great + 1
                    : salaryReactions.great}
                </Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  {
                    ...styles.reactionContainer,
                    opacity: pressed ? 0.5 : 1.0,
                    backgroundColor: susPressed ? "#6193FB" : null,
                  },
                ]}
                accessibilityRole="button"
                onPress={() => SavePressHandler(3)}
              >
                <Image
                  style={styles.reactionEmoji}
                  source={require("../../assets/reactions/sus.png")}
                />
                <Text style={styles.reactionCount}>
                  {susPressed ? salaryReactions.sus + 1 : salaryReactions.sus}
                </Text>
              </Pressable> */}
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            position: "absolute",
            right: 0,
          }}
        >
          <View
            style={{
              ...styles.infoContainer,
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Text numberOfLines={1} style={{ ...styles.value }}>
              {"📍 "}
              {location ? location : "―"}
            </Text>
          </View>
          <View
            style={{
              ...styles.infoContainer,
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Text style={styles.name}> 🏢 </Text>
            <Text numberOfLines={1} style={styles.value}>
              {employeeCount ? `${employeeCount} kişi` : "―"}
            </Text>
          </View>
          <View
            style={{
              ...styles.infoContainer,
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Text style={styles.name}> 🏠 </Text>
            <Text numberOfLines={1} style={styles.value}>
              {office ? office : "―"}
            </Text>
          </View>
          <View
            style={{
              ...styles.infoContainer,
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Text style={styles.name}> 💻 </Text>
            <Text numberOfLines={1} style={{ ...styles.value, maxWidth: 300 }}>
              {technology ? technology : "―"}
            </Text>
          </View>
          <View style={{ ...styles.infoContainer, justifyContent: "flex-end" }}>
            <Text style={styles.value}>{time}</Text>
          </View>
        </View>
      </View>
    </View>
  ) : (
    <View style={{ ...styles.card }}>
      <View
        style={{
          flexDirection: "row",
          height: "100%",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <View style={styles.infoContainer}>
              <Text style={styles.name}>Pozisyon : </Text>
              <Text numberOfLines={1} style={styles.value}>
                {position}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.name}>Deneyim : </Text>
              <Text numberOfLines={1} style={styles.value}>
                {experience === 0
                  ? "0-1 yıl"
                  : experience === 1
                  ? "1-3 yıl"
                  : experience === 4
                  ? "4-6 yıl"
                  : experience === 7
                  ? "7-9 yıl"
                  : experience >= 10
                  ? "10+ yıl"
                  : "10+ yıl"}
              </Text>
              <Text style={styles.value}> | </Text>
              <Text numberOfLines={1} style={styles.value}>
                {level}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.name}> 💵 </Text>
              <Text style={styles.value}>
                {currencyFormat(netSalary)} ₺ Net
              </Text>
              <Text style={styles.name}>{benefits ? " | " : ""}</Text>
              <Text numberOfLines={1} style={styles.value}>
                {benefits}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <Pressable
                accessibilityRole="button"
                onPress={() => SavePressHandler(0)}
                style={({ pressed }) => [
                  {
                    ...styles.reactionContainer,
                    opacity: pressed ? 0.5 : 1.0,
                    backgroundColor: upPressed ? "#6193FB" : null,
                  },
                ]}
              >
                <Image
                  style={styles.reactionEmoji}
                  source={require("../../assets/reactions/up.png")}
                />
                <Text style={styles.reactionCount}>
                  {upPressed ? salaryReactions.up + 1 : salaryReactions.up}
                </Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  {
                    ...styles.reactionContainer,
                    opacity: pressed ? 0.5 : 1.0,
                    backgroundColor: downPressed ? "#6193FB" : null,
                  },
                ]}
                accessibilityRole="button"
                onPress={() => SavePressHandler(1)}
              >
                <Image
                  style={styles.reactionEmoji}
                  source={require("../../assets/reactions/down.png")}
                />
                <Text style={styles.reactionCount}>
                  {downPressed
                    ? salaryReactions.down + 1
                    : salaryReactions.down}
                </Text>
              </Pressable>
              {/*  <Pressable
                style={({ pressed }) => [
                  {
                    ...styles.reactionContainer,
                    opacity: pressed ? 0.5 : 1.0,
                    backgroundColor: greatPressed ? "#6193FB" : null,
                  },
                ]}
                accessibilityRole="button"
                onPress={() => SavePressHandler(2)}
              >
                <Image
                  style={styles.reactionEmoji}
                  source={require("../../assets/reactions/great.png")}
                />
                <Text style={styles.reactionCount}>
                  {greatPressed
                    ? salaryReactions.great + 1
                    : salaryReactions.great}
                </Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  {
                    ...styles.reactionContainer,
                    opacity: pressed ? 0.5 : 1.0,
                    backgroundColor: susPressed ? "#6193FB" : null,
                  },
                ]}
                accessibilityRole="button"
                onPress={() => SavePressHandler(3)}
              >
                <Image
                  style={styles.reactionEmoji}
                  source={require("../../assets/reactions/sus.png")}
                />
                <Text style={styles.reactionCount}>
                  {susPressed ? salaryReactions.sus + 1 : salaryReactions.sus}
                </Text>
              </Pressable> */}
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            position: "absolute",
            right: 0,
          }}
        >
          <View
            style={{
              ...styles.infoContainer,
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Text numberOfLines={1} style={{ ...styles.value }}>
              {"📍 "}
              {location ? location : "―"}
            </Text>
          </View>
          <View
            style={{
              ...styles.infoContainer,
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Text style={styles.name}> 🏢 </Text>
            <Text numberOfLines={1} style={styles.value}>
              {employeeCount ? `${employeeCount} kişi` : "―"}
            </Text>
          </View>
          <View
            style={{
              ...styles.infoContainer,
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Text style={styles.name}> 🏠 </Text>
            <Text numberOfLines={2} style={styles.value}>
              {office ? office : "―"}
            </Text>
          </View>
          <View
            style={{
              ...styles.infoContainer,
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Text style={styles.name}> 💻 </Text>
            <Text numberOfLines={1} style={{ ...styles.value, maxWidth: 150 }}>
              {technology ? technology : "―"}
            </Text>
          </View>
          <View style={{ ...styles.infoContainer, justifyContent: "flex-end" }}>
            <Text style={styles.value}>{time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    height: 150,
    width: "100%",
    padding: 16,
    marginVertical: 8,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "#EDEFF2",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#4F5F80",
    textAlign: "center",
  },
  value: {
    color: "#4F5F80",
    fontSize: 14,
    maxWidth: 200,
    textAlign: "center",
  },

  reactionContainer: {
    flexDirection: "row",
    borderWidth: 0,
    borderColor: "#8B9AB7",
    borderWidth: 0.5,
    borderRadius: 30,
    height: 30,
    paddingHorizontal: 5,
    marginRight: 5,
  },
  reactionCount: {
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
    alignSelf: "center",
    marginLeft: 3,
  },
  reactionEmoji: {
    height: 20,
    width: 20,
    alignSelf: "center",
  },
});
