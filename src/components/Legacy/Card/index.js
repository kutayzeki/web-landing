import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { IconButton } from "../Button";
import {
  getValueFromAsyncStorage,
  setValueInAsyncStorage,
} from "../../utils/asyncStorage";
import { ShareButton } from "../ShareButton";

const BookmarkCard = ({ item, index }) => {
  let bookmarks = [];
  const [bookmarkPressed, setBookmarkPressed] = useState(true);

  async function removeBookmark(item) {
    try {
      const bookmarkList = await getValueFromAsyncStorage("bookmarks");
      if (bookmarkList) {
        bookmarks = JSON.parse(bookmarkList);
      }
      const index = bookmarks.findIndex((bookmark) => bookmark.id === item.id);
      bookmarks.splice(index, 1);
      setBookmarkPressed(false);

      await setValueInAsyncStorage("bookmarks", bookmarks);
    } catch (err) {
      console.log(err);
    }
  }
  const { colors } = useTheme();
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            color: colors.text,
            width: "80%",
            textAlign: "left",
            alignSelf: "center",
          }}
          key={index}
        >
          {item.title}
        </Text>
        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "space-between",
            height: 60,
          }}
        >
          <IconButton
            color={colors.text}
            size={24}
            icon={bookmarkPressed ? "ios-bookmark" : "ios-bookmark-outline"}
            onPress={() => removeBookmark(item)}
          />
          <ShareButton size={24} props={item.title} />
        </View>
      </View>
      <View
        style={{
          marginVertical: 10,
          width: "100%",
          borderWidth: 0.5,
          borderColor: colors.text,
        }}
      />
    </View>
  );
};
export const LikeCard = ({ item, index }) => {
  let like = [];
  const [likePressed, setLikePressed] = useState(true);

  async function removeLike(item) {
    try {
      const likeList = await getValueFromAsyncStorage("likes");
      if (likeList) {
        like = JSON.parse(likeList);
      }
      const index = like.findIndex((like) => like.id === item.id);
      like.splice(index, 1);
      setLikePressed(false);

      await setValueInAsyncStorage("likes", like);
    } catch (err) {
      console.log(err);
    }
  }
  const { colors } = useTheme();
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            color: colors.text,
            width: "80%",
            textAlign: "left",
            alignSelf: "center",
          }}
          key={index}
        >
          {item.title}
        </Text>
        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "space-between",
            height: 60,
          }}
        >
          <IconButton
            color={colors.text}
            size={24}
            icon={likePressed ? "ios-heart" : "ios-heart-outline"}
            onPress={() => removeLike(item)}
          />
          <ShareButton size={24} props={item.title} />
        </View>
      </View>
      <View
        style={{
          marginVertical: 10,
          width: "100%",
          borderWidth: 0.5,
          borderColor: colors.text,
        }}
      />
    </View>
  );
};

export default BookmarkCard;

const styles = StyleSheet.create({});
