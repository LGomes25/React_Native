import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
    
    <StatusBar backgroundColor='#742174' barStyle='light-content' />

    <View style={{flex:1, backgroundColor: "blue"}}>
      <Text>Oiiiiii</Text>
    </View>

    <View style={{flex:8, backgroundColor: "green"}}>
      <Text>Oiiiiii</Text>
    </View>

    <View style={{flex:1, backgroundColor: "red"}}>
      <Text>Oiiiiii</Text>
    </View>

    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122121',
  },
});
