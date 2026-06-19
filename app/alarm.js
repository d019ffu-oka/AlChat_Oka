import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function Alarm() {

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
        アラーム設定
      </Text>

      <Text>7:00</Text>

      <Button
        title="マッチング開始"
        onPress={() => router.push('/matching')}
      />

    </View>
  );
}