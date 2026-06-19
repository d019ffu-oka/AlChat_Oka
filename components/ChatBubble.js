import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ChatBubble({ text, isMe }) {
  return (
    <View
      style={[
        styles.bubble,
        isMe ? styles.myBubble : styles.otherBubble,
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    maxWidth: "80%",
    padding: 12,
    borderRadius: 15,
    marginVertical: 5,
  },
  myBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
  },
  otherBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontSize: 16,
  },
});