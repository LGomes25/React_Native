import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Cliente from './src/components/Cliente';
import { useState } from 'react';

export default function App() {

  const [nome, setNome] = useState<string>("José");
  const [idade, setIdade] = useState<string|number>(50);

  function handleChangeName(){
    setNome("Fulano...")
    setIdade('38');
  }

  return (
    <View style={styles.container}>
      <Text>Aula Type Script!</Text>
      <StatusBar style="auto" />

      <Pressable 
        onPress={handleChangeName} 
        style={({pressed})=>[
            {
            backgroundColor: pressed ? "rgb(210,230,240)":"gold",
            },
          ]}
        >
        {nome !== "" &&  <Cliente nome={nome}/>}
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
