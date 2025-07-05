import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList,
} from "react-native";

export default function App() {
    const [input, setInput] = useState<string>("");
    const [nomes, setNomes] = useState<string[]>([]);

    useEffect(() => {
        async function loadData() {
        try {
            const data = await AsyncStorage.getItem("@listaNomes");
            if (data) {
            setNomes(JSON.parse(data));
            }
        } catch (error) {
            console.error("Erro:" + error);
        }
        }
        loadData();
    }, []);

    async function adicionarNome() {
        if (input.trim() === "") {
        return;
        }
        const lista = [...nomes, input];
        setNomes(lista);
        setInput("");
        try {
        await AsyncStorage.setItem("@listaNomes", JSON.stringify(lista));
        } catch (error) {
        console.error("Erro" + error);
        }
    }

    return (
        <View style={styles.container}>
        <TextInput
            style={styles.input}
            onChangeText={setInput}
            value={input}
            placeholder="Digite um nome"
        />
        <TouchableOpacity onPress={adicionarNome} style={styles.botao}>
            <Text style={styles.botaoTexto}>Adicionar</Text>
        </TouchableOpacity>

        <FlatList
            data={nomes}
            renderItem={({ item }) => <Text>{item}</Text>}
            keyExtractor={(item, key) => key.toString()}
        />
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        alignItems: "center",
        paddingHorizontal: 20,
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#aaa",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    botao: {
        backgroundColor: "#4CAF50",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginBottom: 20,
    },
    botaoTexto: {
        color: "#fff",
        fontWeight: "bold",
    },
    item: {
        padding: 10,
        fontSize: 16,
        backgroundColor: "#f2f2f2",
        width: "100%",
        marginBottom: 5,
        borderRadius: 6,
    },
    });