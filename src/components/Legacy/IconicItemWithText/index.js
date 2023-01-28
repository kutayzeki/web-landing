import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS, globalStyles } from "../../constants";

const IconicItemWithText = ({
  textColor = "black",
  rightTextColor = "grey",
  leftIconName,
  keyText,
  valueText,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={globalStyles.cardContainerStyle}>
        <Icon name={leftIconName} size={20} color={COLORS.PRIMARY} />
        <Text style={{ ...globalStyles.cardTextStyle, color: textColor }}>
          {keyText}
        </Text>
        <Text
          style={{
            ...globalStyles.text16Style,
            color: rightTextColor,
          }}
        >
          {valueText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default IconicItemWithText;

const styles = StyleSheet.create({});
