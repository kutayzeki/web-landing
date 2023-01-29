import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { useEffect, useRef, useState } from "react";
import * as analytics from "expo-firebase-analytics";
import { setValueInAsyncStorage } from "../utils/asyncStorage";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
const handleNotification = async () => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener(async (notification) => {
        setNotification(notification);
        await analytics.logEvent("notificationReceivedOnForeground", {
          notificationTitle: notification.request.content.title,
          notificationBody: notification.request.content.body,
          expoPushToken: expoPushToken,
          receivedOnForeground: true,
        });
      });
    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener(
        async (response) => {
          response.request.content.title;
          await analytics.logEvent("notificationTapped", {
            notificationTitle: response.request.content.title,
            notificationBody: response.request.content.body,
            expoPushToken: expoPushToken,
            tapped: true,
          });
        }
      );

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
};
export const registerForPushNotificationsAsync = async () => {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      /* alert("Failed to get push token for push notification!"); */
      setValueInAsyncStorage("notification_permission", finalStatus);
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);

    setValueInAsyncStorage("notification_permission", finalStatus);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
  return token;
};

export default handleNotification;

export const getPermissionStatus = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  return status;
};
