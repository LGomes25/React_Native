import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App2() {
    const[input, setInput] = useState('');
    const [nome, setNome] = useState('');

    async function gravarNome(){
        await AsyncStorage.setItem('@nome', input);
        setNome(input);
        setInput('');
    }

    useEffect(()=>{
        async function loadData(){
            const value = await AsyncStorage.getItem('@nome');
            if(value !== null){
                setNome(value);
            }
        }
        loadData();
    },[])

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={input} onChangeText={setInput}/>
            <TouchableOpacity style={styles.botao} onPress={gravarNome}>
                <Text>Gravar Nome</Text>
            </TouchableOpacity>
        <Text>Nome:{nome}</Text>
        </View>
    )
    }

const styles = StyleSheet.create({
        container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "gray",
        width: "50%"
    },
    texto: {
        color: "#fff"
    },
    botao: {
        backgroundColor: "green",
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 30,

    }
})