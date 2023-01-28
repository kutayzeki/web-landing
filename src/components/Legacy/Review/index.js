import React from "react";
import { Alert, Button, Linking } from "react-native";
import * as StoreReview from "expo-store-review";
import { useTranslation } from "react-i18next";

const ReviewButton = () => {
  const { t } = useTranslation();
  const handlePress = async () => {
    if (StoreReview.isAvailableAsync()) {
      await StoreReview.requestReview()
        .then(function (response) {
          console.log("response is", response);
          if (response == null) {
            reviewAlreadyGivenHandler();
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return <Button title={t("review.leaveReview")} onPress={handlePress} />;
};
//TODO #1 Translation doesnt work here yet
const reviewAlreadyGivenHandler = () => {
  //function to make two option alert
  return Alert.alert(
    //title
    "Review Already Submitted",
    //body
    "If you want you can change it on App Store.",
    [
      {
        text: "Go to App Store",
        onPress: () =>
          Linking.openURL(
            "https://apps.apple.com/app/apple-store/id1665263815?action=write-review"
          ),
      },
      {
        text: "Ok",
        onPress: () => console.log("Ok Pressed"),
        style: "cancel",
      },
    ],
    { cancelable: false }
  );
};
export async function storeReview() {
  if (StoreReview.isAvailableAsync()) {
    await StoreReview.requestReview()
      .then(function (response) {
        console.log("response is", response);
        if (response == null) {
          reviewAlreadyGivenHandler();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
export async function storeReviewWithoutFeedback() {
  if (StoreReview.isAvailableAsync()) {
    await StoreReview.requestReview()
      .then(function (response) {
        console.log("response is", response);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
export default ReviewButton;
