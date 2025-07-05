import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebaseConnection';

interface Usuario{
    id: string;
    nome: string;
    email: string;
    cargo: string;
}

interface Props{
    data: Usuario;
    handleEdit:(dados:Usuario) => void;
}

export default function UsuariosList({data, handleEdit }:Props) {

    //========== funcao para botao deletar ====================
    async function handleDelete(){
        const docRef = doc(db,'usuarios',data.id)
        await deleteDoc(docRef);
    }
    //========== fim da funcao ================================

    function handleEditUser(){
        handleEdit(data);
        
    }


    return (
        <View style={styles.container}>
            <Text>Nome:{data.nome}</Text>
            <Text>Email:{data.email}</Text>
            <Text>Cargo:{data.cargo}</Text>

            <View style={styles.buttonContainer}>

                <TouchableOpacity style={styles.buttonEdit} onPress={handleEditUser}>
                    <Text style={styles.buttonText}>Editar </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonExcluir} onPress={handleDelete}>
                    <Text style={styles.buttonText}>Excluir </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0f0f0',
        padding:8,
        marginBottom:14,
    },
    item: {
        color: "#000",
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: "row",
        gap:4,
    },
    buttonExcluir: {
        color:'#FFF',
        backgroundColor: "#B3261E",
        padding: 4,
        borderRadius: 6,
        marginTop: 16,
        marginRight: 8,
    },
    buttonText: {
        color: "#FFF",
        fontWeight:'bold',
        paddingLeft: 8,
        paddingRight: 8,
    },
    buttonEdit: {
        backgroundColor: "#000",
        alignSelf: "flex-start",
        padding: 4,
        borderRadius: 6,
        marginTop: 16,
        
    },
});