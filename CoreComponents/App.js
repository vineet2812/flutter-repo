import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1,backgroundColor:'plum'}}>
      <view style={{width:100,height:200, backgroundColor:'red'}}></view>
      <view style={{width:100,height:200, backgroundColor:'green'}}></view>
    </View>
  );
}
