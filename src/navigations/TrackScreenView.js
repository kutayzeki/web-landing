import * as Analytics from "expo-firebase-analytics";

const trackScreenView = async (previousRouteName, currentRouteName) => {
  if (previousRouteName !== currentRouteName) {
    /* analytics.setUserId(1);
    analytics.setUserProperties({ name: "Kutay Zeki" }); */
    await Analytics.logEvent("screen_view", {
      screen_name: currentRouteName,
      screen_class: currentRouteName,
    }).catch(function (error) {
      console.log(
        "There has been a problem with your fetch operation: " + error.message
      );
      // ADD THIS THROW error
      throw error;
    });
  }
};
export default trackScreenView;
