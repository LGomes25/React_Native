import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Cliente({nome}:{nome:string}) {
    return (
        <View>
        <Text>Bem vindo: {nome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})