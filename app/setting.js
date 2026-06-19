import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function Settings() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:25 }}>
        設定
      </Text>

      <Button
        title="ホームへ戻る"
        onPress={() => router.push('/')}
      />
    </View>
  );
}