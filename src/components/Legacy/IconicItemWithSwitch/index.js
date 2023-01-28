import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Switch,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { setNotification } from "../../screens/ProfileScreen/slice";
import {
  setValueInAsyncStorage,
  getValueFromAsyncStorage,
} from "../../utils/asyncStorage";
import { requestPermissionsAsync } from "expo-notifications";
import { COLORS, globalStyles } from "../../constants";

const IconicItemWithSwitch = ({
  textColor = "black",
  leftIconName,
  text,
  value,
}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity disabled={true}>
      <View style={globalStyles.cardContainerStyle}>
        <Icon name={leftIconName} size={20} color={COLORS.PRIMARY} />
        <Text style={{ ...globalStyles.cardTextStyle, color: textColor }}>
          {text}
        </Text>
        <Switch
          style={{ transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }] }}
          trackColor={{ false: textColor, true: COLORS.SUCCESS }}
          thumbColor={COLORS.WHITE}
          disabled={value}
          value={value}
          onChange={async () => {
            const notificationPermission = await getValueFromAsyncStorage(
              "notification_permission"
            );
            if (notificationPermission !== "denied") {
              const { status } = await requestPermissionsAsync();
              if (status == "granted") {
                setValueInAsyncStorage("notification_permission", "granted");
                dispatch(setNotification("granted"));
              }
            } else {
              Linking.openSettings();
            }
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default IconicItemWithSwitch;

const styles = StyleSheet.create({});
