import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function Matched() {

  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }}>

      <Text style={{
        fontSize:30,
        marginBottom:30
      }}>
        マッチしました！
      </Text>

      <Button
        title="チャット開始"
        onPress={() => router.push('/chat')}
      />

    </View>
  );
}