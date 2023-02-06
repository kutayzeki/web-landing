import { NavigationContainer } from "@react-navigation/native";
import React, { useRef } from "react";
import MainStackNavigation from "./src/navigations/HomeStackNavigation";
import trackScreenView from "./src/navigations/TrackScreenView";

export default function App() {
  const navigationRef = useRef();
  const routeNameRef = useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current =
          navigationRef?.current?.getCurrentRoute()?.name ?? "")
      }
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName =
          navigationRef?.current?.getCurrentRoute()?.name;
        trackScreenView(previousRouteName, currentRouteName);
        console.log(previousRouteName, " -> ", currentRouteName);
        // Save the current route name for later comparison
        routeNameRef.current = currentRouteName;
      }}
    >
      <MainStackNavigation />
    </NavigationContainer>
  );
}
