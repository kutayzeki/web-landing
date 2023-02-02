import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },

  container: {
    alignSelf: "center",
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
    width: Dimensions.get("window").width,
    minWidth: 300,
    maxWidth: 1400,
    height: Dimensions.get("window").height,
    alignItems: "baseline",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 0,
  },
  smallContainer: {
    alignSelf: "center",
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flexDirection: "column",
  },
  smallLeftContainer: {
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    alignItems: "center",
    alignSelf: "center",
    margin: 12,
    minWidth: 250,
    maxWidth: 600,
  },
  smallRightContainer: {
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 8,
    alignSelf: "center",
    margin: 16,
    minWidth: 300,
    maxWidth: 600,
  },
  leftContainer: {
    width: "30%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    alignItems: "center",
    alignSelf: "flex-start",
    margin: 16,
    marginTop: 60,
  },
  rightContainer: {
    width: "60%",
    padding: 16,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: COLORS.TEXT_DARK,
  },
});
