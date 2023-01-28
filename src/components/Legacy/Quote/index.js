import { View, Text, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import globalStyles from "../../constants/globalStyles";
import { IconButton } from "../Button";
import { useTheme } from "@react-navigation/native";
import { ShareButton } from "../ShareButton";
import * as analytics from "expo-firebase-analytics";
import {
  setValueInAsyncStorage,
  getValueFromAsyncStorage,
} from "../../utils/asyncStorage";
import * as Haptics from "expo-haptics";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useFetch } from "../../../services/hooks";

const Quote = ({ item, index }) => {
  const { colors } = useTheme();
  const [likePressed, setLikePressed] = useState(false);
  const [bookmarkPressed, setBookmarkPressed] = useState(false);
  let bookmarks = [];
  let likes = [];

  const {
    data: dataPost,
    error: errorPost,
    loading: loadingPost,
    setBody,
    setUrl,
  } = useFetch(null, "POST", null);

  const [deviceId, setDeviceId] = useState(null);
  const GetOrSetUserId = async () => {
    // Check if "id" exists in AsyncStorage
    const id = await getValueFromAsyncStorage("id")
      .then((value) => {
        if (value !== null) {
          setDeviceId(value);
        }
      })
      .catch((error) => console.log(error));
  };
  GetOrSetUserId();

  async function handleBookmark(item) {
    try {
      const bookmarkList = await getValueFromAsyncStorage("bookmarks");
      if (bookmarkList) {
        bookmarks = JSON.parse(bookmarkList);
        console.log("bookmarks", bookmarks);
      }
      let bookmarkObj = {
        id: item.id,
        title: item.title,
        ups: item.ups,
      };
      if (bookmarks.filter((bookmark) => bookmark.id === item.id).length > 0) {
        const index = bookmarks.findIndex(
          (bookmark) => bookmark.id === item.id
        );
        bookmarks.splice(index, 1);
        setBookmarkPressed(false);
      } else {
        bookmarks.push(bookmarkObj);
        setBookmarkPressed(true);
        setUrl(
          "http://ec2-3-76-98-144.eu-central-1.compute.amazonaws.com:8081/device_quote_interaction"
        );
        setBody({
          device_id: deviceId,
          quote_id: item.id,
          interaction_type: "BOOKMARK",
        });
      }
      await setValueInAsyncStorage("bookmarks", bookmarks);
    } catch (err) {
      console.log(err);
    }
  }
  async function handleLikes(item, doubleTap = false) {
    try {
      const likeList = await getValueFromAsyncStorage("likes");
      if (likeList) {
        likes = JSON.parse(likeList);
        console.log("likes", likes);
      }
      let likeObj = {
        id: item.id,
        title: item.title,
        ups: item.ups,
      };
      if (
        likes.filter((like) => like.id === item.id).length > 0 &&
        doubleTap == false
      ) {
        const index = likes.findIndex((like) => like.id === item.id);
        likes.splice(index, 1);
        setLikePressed(false);
      } else if (likes.filter((like) => like.id === item.id).length == 0) {
        likes.push(likeObj);
        setLikePressed(true);
        setUrl(
          "http://ec2-3-76-98-144.eu-central-1.compute.amazonaws.com:8081/device_quote_interaction"
        );
        setBody({
          device_id: deviceId,
          quote_id: item.id,
          interaction_type: "LIKE",
        });
      }
      await setValueInAsyncStorage("likes", likes);
    } catch (err) {
      console.log(err);
    }
  }

  async function getLikes() {
    // get likes from async storage
    const likes = await AsyncStorage.getItem("likes");
    // parse the likes from string to array
    const likesArray = JSON.parse(likes);

    // check if the item's id is found in the likes array
    const found = likesArray?.find((like) => like.id === item.data.id);
    // return the found item or undefined if not found
    if (found) setLikePressed(true);
  }

  async function getBookmarks() {
    // get bookmarks from async storage
    const bookmarks = await AsyncStorage.getItem("bookmarks");
    // parse the bookmarks from string to array
    const bookmarksArray = JSON.parse(bookmarks);

    // check if the item's id is found in the bookmarks array
    const found = bookmarksArray?.find(
      (bookmark) => bookmark.id === item.data.id
    );

    // return the found item or undefined if not found
    if (found) setBookmarkPressed(true);
  }

  useEffect(() => {
    getLikes();
    getBookmarks();
  }, []);

  const tap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(async () => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      handleLikes(item.data, true);
      await analytics.logEvent("doubleTaplikePressed", {
        name: "doubleTaplikePressed",
      });
    });

  return (
    <GestureDetector gesture={tap}>
      <View
        style={{
          height: Dimensions.get("window").height * 0.8,
          padding: 8,
          justifyContent: "center",
          flex: 1,
          alignSelf: "center",
          justifyContent: "center",
          width: "100%",
        }}
        key={index}
      >
        <Text
          style={{
            ...globalStyles.text20Style,
            color: colors.text,
            textAlign: "center",
            fontWeight: "300",
          }}
        >
          {item.data.title}
        </Text>
        <View style={globalStyles.buttonsContainer}>
          <View>
            <IconButton
              color={colors.text}
              size={36}
              icon={likePressed ? "ios-heart" : "ios-heart-outline"}
              onPress={async () => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                handleLikes(item.data);
                await analytics.logEvent("likePressed", {
                  name: "likePressed",
                });
              }}
            />
            <Text
              style={{
                ...globalStyles.text12Style,
                color: colors.text,
                textAlign: "center",
                marginTop: 5,
              }}
            >
              {likePressed ? item.data.ups + 1 : item.data.ups}
            </Text>
          </View>
          <ShareButton size={36} props={item.data.title} />
          <IconButton
            size={36}
            color={colors.text}
            icon={bookmarkPressed ? "ios-bookmark" : "ios-bookmark-outline"}
            onPress={async () => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              handleBookmark(item.data);
              await analytics.logEvent("bookmarkPressed", {
                name: "bookmarkPressed",
              });
            }}
          />
        </View>
      </View>
    </GestureDetector>
  );
};

export default Quote;
