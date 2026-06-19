import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="alarm" />
      <Stack.Screen name="matching" />
      <Stack.Screen name="matched" />
      <Stack.Screen name="chat" />
      <Stack.Screen name="chats" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="settings" />
    </Stack>
  );
}