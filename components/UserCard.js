import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function UserCard({ name, bio }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.bio}>{bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    alignSelf: "center",
    marginTop: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bio: {
    fontSize: 16,
    marginTop: 10,
    color: "gray",
  },
});