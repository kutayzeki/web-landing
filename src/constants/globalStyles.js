import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

const globalStyles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  containerPadding16Style: {
    padding: 16,
  },
  centeredStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerStyle: {
    flexDirection: "row",
    margin: 16,
  },
  ActionItemHeaderStyle: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
  },
  headerTextStyle: {
    color: COLORS.BLACK,
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 8,
  },
  sectionHeaderTextStyle: {
    color: COLORS.GREY_DARK,
    fontSize: 12,
    marginHorizontal: 12,
  },
  buttonsContainer: {
    flexDirection: "column",
    alignItems: "center",
    height: 200,
    position: "absolute",
    bottom: 20,
    right: 10,
    justifyContent: "space-between",
  },
  cardContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 42,
    justifyContent: "space-between",
  },
  cardTextStyle: {
    flex: 1,
    color: "black",
    fontSize: 16,
    marginHorizontal: 12,
  },
  text12Style: {
    color: COLORS.BLACK,
    fontSize: 12,
  },
  text14Style: {
    color: COLORS.BLACK,
    fontSize: 14,
  },
  text16Style: {
    color: COLORS.BLACK,
    fontSize: 16,
  },
  text18Style: {
    color: COLORS.BLACK,
    fontSize: 18,
  },
  text20Style: {
    color: COLORS.BLACK,
    fontSize: 20,
  },
  helperTextStyle: {
    opacity: 0.7,
    fontSize: 14,
    textAlign: "center",
    alignSelf: "center",
  },
  textInputStyle: {
    color: COLORS.BLACK,
    height: 200,
    paddingHorizontal: 16,
    marginHorizontal: 0,
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 0.25,
  },
  actionButtonContainer: { width: "100%", alignItems: "center" },
  actionButton: {
    width: "90%",
    height: 60,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: "center",
    borderRadius: 5,
  },
  actionButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.TEXT_LIGHT,
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  textButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.GREY_DARK,
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default globalStyles;
