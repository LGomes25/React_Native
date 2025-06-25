import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home';
import Sobre from '../screens/Sobre';
import Contato from '../screens/Contato';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function AppRouter() {
    return (
        <Drawer.Navigator
            drawerContent={CustomDrawer}
            screenOptions={{
                headerStyle:{
                    backgroundColor:'#4caf50',
                },
                drawerStyle:{
                    backgroundColor:"#'rgb(38, 69, 118)",
                    width:200,
                },
                drawerActiveBackgroundColor:"yellow",
                drawerInactiveBackgroundColor: '#4caf50',
                drawerInactiveTintColor:'#000',
                drawerActiveTintColor:'#000',
            }}
        
        >
            <Drawer.Screen name='Home' component={Home}
                options={{
                    title:'Inicio'
                }}
            />
            <Drawer.Screen name='Sobre' component={Sobre}
                options={{
                    title:'Atrações'
                }}
            />
            <Drawer.Screen name='Contato' component={Contato}/>
        </Drawer.Navigator>
    )
}