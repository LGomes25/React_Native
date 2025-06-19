import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

export default function App() {
    return (
        <SafeAreaView>
            <View>
                <ScrollView horizontal style={styles.scroll}>
                    <Text style={styles.texto}>Exemplo de Scroll</Text>
                    <Text style={styles.texto}>Exemplo de Scroll</Text>
                    <Text style={styles.texto}>Exemplo de Scroll</Text>
                    <Text style={styles.texto}>Exemplo de Scroll</Text>
                    <Text style={styles.texto}>Exemplo de Scroll</Text>
                    <Text style={styles.texto}>Exemplo de Scroll</Text>
                </ScrollView>
                <Text>Aula Native</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    texto:{
        color: "orange",
        fontSize: 28,
        padding: 20,
    },
    scroll:{
        backgroundColor: "gray",
        height: 120,
    }
})