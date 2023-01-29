import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  card: {
    height: 100,
    width: 150,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
  },
  topContainer: {
    backgroundColor: COLORS.BLACK_SOFT,
    height: "68%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 5,
  },
  bottomContainer: {
    backgroundColor: COLORS.WHITE,
    height: "32%",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    alignItems: "flex-end",
    paddingBottom: 5,
  },
  positionText: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontWeight: "bold",
  },
  levelText: { fontWeight: "bold", fontSize: 14, color: COLORS.TEXT_DARK },
  salaryText: { fontSize: 14, color: COLORS.TEXT_DARK },
});
