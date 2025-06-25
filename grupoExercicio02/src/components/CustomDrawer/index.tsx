import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { styles } from './styles'

export default function CustomDrawer(props: any) {
    return (
        <DrawerContentScrollView>
            
            <View style={styles.drawer}>
                <Image source={require('../../../assets/Prefeiturapetro.png')}
                style={styles.logo}
                />
                <Text style={styles.texto}>Bem Vindo</Text>
            </View>
            
            <View style={styles.drawerBotoes}>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
    )
}

