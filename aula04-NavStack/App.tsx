import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Sobre from './src/screens/Sobre';
import Contato from './src/screens/Contato';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home' 
          component={Home}
          options={{
            title:"Tela de Início",
            headerStyle:{
              backgroundColor:"#121212"
            },
            headerTintColor:"#fff",
          }}
        />
        <Stack.Screen name='Sobre' component={Sobre}/>
        <Stack.Screen name='Contato' component={Contato}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

