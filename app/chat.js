import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function Chat() {

  const [message,setMessage] = useState('');

  return (
    <View style={{
      flex:1,
      padding:20
    }}>

      <Text style={{
        fontSize:25,
        marginBottom:20
      }}>
        匿名チャット
      </Text>

      <View style={{flex:1}}>
        <Text>相手：おはよう！</Text>
      </View>

      <TextInput
        placeholder="メッセージを入力"
        value={message}
        onChangeText={setMessage}
        style={{
          borderWidth:1,
          padding:10,
          marginBottom:10
        }}
      />

      <Button
        title="送信"
        onPress={() => {}}
      />

    </View>
  );
}