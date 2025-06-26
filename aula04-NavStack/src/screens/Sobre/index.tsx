import {styles} from './styles';
import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';

type RouteSobreParams = {
    Sobre:{
        nome: string;
        email: string;
    };
};

type SobreRoutePropos = RouteProp<RouteSobreParams,"Sobre">;

//navegação para contato
type StackParamList = {
    Home: undefined;
    Sobre: {
        nome: string;
        email: string;
    };
    Contato: undefined;
};


export default function Sobre() {

    const route = useRoute<SobreRoutePropos>();
    
    //navegação para "contato"
    const navigation = useNavigation<NavigationProp<StackParamList>>();

    return (
        <View style={styles.container}>
        <Text>Sobre</Text>
        <Text>{route.params.nome}</Text>
        <Text>{route.params.email}</Text>
        <Button title='ir para Contato' onPress={()=> navigation.navigate('Contato')}/>
        <Text/>
        <Button title='Back' onPress={() => navigation.goBack()} />
        </View>
    )
}