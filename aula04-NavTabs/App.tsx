import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';  //Documentacao: https://reactnavigation.org/
import Home from './src/screen/Home';
import Sobre from './src/screen/Sobre';
import Contato from './src/screen/Contato';
import { Feather } from '@expo/vector-icons'; //biblioteca do expo para mudar => icones https://feathericons.com/

const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown:false,
            tabBarActiveTintColor: 'gold',
            tabBarInactiveTintColor: 'green',
            tabBarInactiveBackgroundColor: '#1212123a3d41',
            tabBarActiveBackgroundColor: 'red',
            tabBarShowLabel: false,
          }}
        >
          <Tab.Screen name='Home' component={Home}
            options={{
              tabBarIcon:({color, size}) => {
                return <Feather name='home' color={color} size={size}/>
              },
            }}/>
          <Tab.Screen name='Sobre' component={Sobre} 
            options={{
              tabBarIcon:({color, size}) => {
                return <Feather name='file-text' color={color} size={size}/>
              },
            }}/>
          <Tab.Screen name='Contato' component={Contato}
            options={{
              tabBarIcon:({color, size}) => {
                return <Feather name='phone-call' color={color} size={size}/>
              },
            }}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}

