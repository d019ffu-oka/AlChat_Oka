import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function Chats() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:25 }}>
        チャット一覧
      </Text>

      <Button
        title="プロフィール"
        onPress={() => router.push('/profile')}
      />
    </View>
  );
}