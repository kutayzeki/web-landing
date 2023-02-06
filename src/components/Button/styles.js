import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  reactionContainer: {
    flexDirection: "row",
    borderWidth: 0,
    borderColor: "#8B9AB7",
    borderWidth: 0.5,
    borderRadius: 30,
    height: 30,
    paddingHorizontal: 5,
    marginRight: 5,
  },
  reactionCount: {
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
    alignSelf: "center",
    marginLeft: 3,
  },
  reactionEmoji: {
    height: 20,
    width: 20,
    alignSelf: "center",
  },
});
