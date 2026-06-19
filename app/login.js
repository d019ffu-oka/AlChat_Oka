import { View, Text, TextInput, Button } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

export default function Login() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      padding:20
    }}>

      <Text style={{
        fontSize:30,
        marginBottom:20,
        textAlign:'center'
      }}>
        ログイン
      </Text>

      <TextInput
        placeholder="メールアドレス"
        value={email}
        onChangeText={setEmail}
        style={{
          borderWidth:1,
          padding:10,
          marginBottom:10
        }}
      />

      <TextInput
        placeholder="パスワード"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{
          borderWidth:1,
          padding:10,
          marginBottom:20
        }}
      />

      <Button
        title="ログイン"
        onPress={() => router.push('/alarm')}
      />

      <Button
        title="新規登録"
        onPress={() => router.push('/register')}
      />

    </View>
  );
}