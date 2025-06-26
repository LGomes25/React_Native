import {styles} from './styles';
import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp, StackActions, useNavigation } from '@react-navigation/native';

//parecido com a interface, faz a mesma funcao
type StackParamList = {
    Home: undefined;
};

export default function Contato() {

    const navigation = useNavigation<NavigationProp<StackParamList>>();

    return (
        <View style={styles.container}>
            <Text>Contato</Text>
            {/* <Button title='ir para Home' onPress={()=> navigation.navigate('Home')}/>  também funciona*/}
            <Button title='ir para Home' onPress={()=> navigation.dispatch(StackActions.popToTop())}/>
        </View>
    )
}