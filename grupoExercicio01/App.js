import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(253, 171, 208, 0.5)',
    alignItems: 'center',
  },
});
