import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

export default function App() {
    const alunos =[
        {matricula:123,nome:"Ana"},
        {matricula:124,nome:"Antonio"},
        {matricula:125,nome:"Bruno"},
        {matricula:126,nome:"Flávio"},
        {matricula:127,nome:"Marcos"},
    ];

    const renderItem = ({item}) =>{
        return(
            <View style={styles.item}>
                <Text>{item.nome}</Text>
            </View>

        )
    }
    return (
        <View>
            <FlatList 
                data={alunos}
                renderItem={renderItem}
                keyExtractor={(item) => item.matricula}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:22
    },
    item:{
        backgroundColor: "#d9d9d9",
        padding:20,
        marginVertical: 40,
        marginHorizontal: 20,
        alignItems: "center",

    }
})