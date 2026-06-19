import { View, Text, ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import { router } from 'expo-router';

export default function Matching() {

  useEffect(() => {

    setTimeout(() => {
      router.replace('/matched');
    },3000);

  },[]);

  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }}>

      <ActivityIndicator size="large" />

      <Text style={{
        fontSize:25,
        marginTop:20
      }}>
        マッチング中...
      </Text>

    </View>
  );
}