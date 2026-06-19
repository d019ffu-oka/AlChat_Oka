import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function Index() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:30 }}>AlChat</Text>

      <Button
        title="アラーム設定へ"
        onPress={() => router.push('/login')}
      />
    </View>
  );
}