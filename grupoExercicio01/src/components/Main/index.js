import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    } from "react-native";
import { useState } from "react";

export default function Main() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(0);
    const [classificacao, setClassificacao] = useState("");

    const handleSubmit = () => {

    let calc = peso / altura ** 2

    setImc(calc);
    
    if (calc < 18.5) {
        setClassificacao("Abaixo do peso");
    } else if (calc < 25.0) {
        setClassificacao("Peso Normal");
    } else if (calc < 30) {
        setClassificacao("Sobrepeso");
    } else {
        setClassificacao("Obesidade");
    }
    
    };

    return (
        <SafeAreaView>
            
            <View style={styles.container}>

                <TextInput
                    style={styles.input}
                    placeholder="Insira seu peso"
                    onChangeText={(e) => setPeso(e)}
                    value={peso}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Insira sua altura"
                    onChangeText={(e) => setAltura(e)}
                    value={altura}
                />

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.textButton}>Calcular</Text>
                </TouchableOpacity>
                
                <View style={styles.input}>
                    <Text>IMC: {imc.toFixed(2)}</Text>
                </View>

                <View style={styles.input}>
                    <Text>Classificação: {classificacao}</Text>
                </View>
        
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        gap:15
    },
    input: {
        width: 300,
        height: 40,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#ADD8E6"
    },
    button: {
        width: 300,
        height: 60,
        padding: 12,
        alignItems: "center",
    },
    textButton: {
        color: "purple",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
    },
});