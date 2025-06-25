import { styles } from "./styles";
import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

type DrawerProps = DrawerNavigationProp<any>;

export default function Home() {

    const navigation = useNavigation<DrawerProps>();

    return (
        <View style={styles.container}>
            
            <View style={styles.div}>
            <Image source={require('../../../assets/VenhaConhecer.png')}
                style={styles.logo1}
                />
            </View>
            
            <View style={styles.div}>
            <Image source={require('../../../assets/Pet1.jpeg')}
                style={styles.imagem}
                />
            </View>

            <View style={styles.div}>
            <Button 
                title="Muito +" 
                color='#4caf50'
                onPress={() => navigation.openDrawer()} />
            </View>
            
        </View>
    )
}