import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/MainScreen";
import { useTranslation } from "react-i18next";
import ROUTES from "../constants/routes";
import DetailScreen from "../screens/DetailScreen";

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      id="MainNavigation"
      initialRouteName={ROUTES.MAIN}
      screenOptions={({ route, navigation }) => {
        ({ headerShown: false });
      }}
    >
      <Stack.Screen
        name={ROUTES.MAIN}
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.DETAIL}
        component={DetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
