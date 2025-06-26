import { styles } from "./styles";
import { View, Text, TouchableOpacity, Modal, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'

export default function Sobre() {
    
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    function handleSave():void{
        if(!nome || !email){
            Alert.alert("Preencha os campos corretamente");
            return;
        }else{
            Alert.alert('Dados Informados:',`Nome:${nome}\nEmail:${email}`);
        }
        console.log(`Nome:${nome}`);
        console.log(`Email:${email}`);
        setNome('');
        setEmail('');
        setModalVisible(false);
        
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>Abrir modal</Text>
            </TouchableOpacity>

            <Modal 
                visible={modalVisible} 
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Formulário de Contato</Text>
                        <TextInput placeholder="Digite seu nome" value={nome} onChangeText={setNome}/>
                        <TextInput placeholder="Digite seu email" value={email} onChangeText={setEmail}/>
                        <View style={{flexDirection:"row", gap:10}}>
                            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => handleSave()}>
                                <Text style={styles.buttonText}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}