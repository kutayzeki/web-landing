import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 150,
    width: "100%",
    padding: 16,
    marginVertical: 8,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    borderColor: COLORS.BORDER,
    borderWidth: 1,
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  contentContainer: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
  },
  leftContainer: {
    flexDirection: "row",
  },
  leftContent: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  rightContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    position: "absolute",
    right: 0,
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: COLORS.TEXT_DARK,
    textAlign: "center",
  },
  value: {
    color: COLORS.TEXT_DARK,
    fontSize: 14,
    maxWidth: 200,
    textAlign: "center",
  },
  chart: {
    height: 30,
    width: "95%",
    alignSelf: "center",
    backgroundColor: "lightblue",
  },
  progress: {
    height: 30,
    backgroundColor: "blue",
  },
  chartContainer: {
    height: 60,
    borderWidth: 1,
    marginBottom: 12,
    justifyContent: "space-between",
  },
  textContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "red",
  },
});
