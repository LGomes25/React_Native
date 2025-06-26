import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export default function CustomDrawer(props: any) {
    return (
        <DrawerContentScrollView>
            <View style={styles.drawer}>
                <Image source={require('../../../assets/OIP.jpeg')}
                style={{width:65, height: 60}}
                />
                <Text style={styles.texto}>Bem Vindo</Text>
            </View>
            <View style={{marginTop:10, paddingHorizontal: 10, gap:25}}>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    texto:{
        fontSize:20,
        fontWeight:'bold',
    },
    drawer:{
        width:'100%',
        height: 85,
        alignItems: 'center',
        justifyContent:'center',
    }
})