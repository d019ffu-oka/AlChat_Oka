import { View, Text, TextInput, Button } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

export default function Register() {

  const [name,setName] = useState('');
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
        textAlign:'center',
        marginBottom:20
      }}>
        新規登録
      </Text>

      <TextInput
        placeholder="ニックネーム"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth:1,
          padding:10,
          marginBottom:10
        }}
      />

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
        title="登録"
        onPress={() => router.push('/alarm')}
      />

    </View>
  );
}