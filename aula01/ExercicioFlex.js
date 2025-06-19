import { View, Text, StyleSheet } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            
        <View style={styles.box}>
            <Text>Voltar</Text>
        </View>
        
        <View style={styles.box}>
            <Text>Home</Text>
        </View>

        <View style={styles.box}>
            <Text>Detalhes</Text>
        </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
        
    },
    box: {
        flex:1,
        height: 20,
        backgroundColor: "#d9d9d9",
        margin: 0,
        textAlignVertical:"center",
        
    },
});