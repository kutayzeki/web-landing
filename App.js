import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const UserCard = ({ name, email, avatar }) => (
  <View style={styles.userCard}>
    <Image source={{ uri: avatar }} style={styles.avatar} />
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  </View>
);
const users = [
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://picsum.photos/200",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "janesmith@example.com",
    avatar: "https://picsum.photos/200",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    avatar: "https://picsum.photos/200",
  },
  // ... more users
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id}
        renderItem={({ item }) => <UserCard {...item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  userCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginVertical: 8,
    backgroundColor: "white",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  email: {
    color: "gray",
    fontSize: 14,
  },
});
