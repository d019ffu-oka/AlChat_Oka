import { View, Text } from 'react-native';

export default function Profile() {

  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }}>

      <Text style={{fontSize:25}}>
        ニックネーム
      </Text>

      <Text>Lv.1</Text>

      <Text>起床成功回数 10回</Text>

    </View>
  );
}