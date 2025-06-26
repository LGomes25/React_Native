import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from '../pages/Login';
import ListaCompra from '../pages/ListaCompra';
import IncluirLista from '../pages/IncluirLista';
import Sobre from '../pages/Sobre';
import { Feather } from '@expo/vector-icons'; //biblioteca do expo para mudar => icones https://feathericons.com/
import { Appearance } from 'react-native';

const BottonNav = createBottomTabNavigator();

export default function AppRouter() {
    return (
        <BottonNav.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'rgb(38, 38, 36)',
                tabBarInactiveBackgroundColor: '#rgb(159, 161, 168)',
                tabBarActiveBackgroundColor: 'rgb(159, 100, 168)',
                headerTintColor: 'blue', //letras
                headerTitleAlign: 'center',
                headerStyle:{backgroundColor:'#rgb(159, 161, 168)',height: 40}

            }}
        >
            <BottonNav.Screen name='Login' component={Login}
                options={{
                    tabBarIcon:({color, size}) => {
                        return <Feather name='log-in' color={color} size={size}/>
                    },
            }}/>
            <BottonNav.Screen name='Lista' component={ListaCompra}
            options={{
                    tabBarIcon:({color, size}) => {
                        return <Feather name='list' color={color} size={size}/> //importar Feather para mudar o icone
                    },
            }}/>
            <BottonNav.Screen name='Incluir' component={IncluirLista}
            options={{
                    tabBarIcon:({color, size}) => {
                        return <Feather name='pen-tool' color={color} size={size}/>
                    },
            }}/>
            <BottonNav.Screen name='Sobre' component={Sobre}
            options={{
                    tabBarIcon:({color, size}) => {
                        return <Feather name='book' color={color} size={size}/>
                    },
            }}/>
        </BottonNav.Navigator>
    )
}