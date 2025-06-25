import { styles } from "./styles";
import { View, Text, TouchableOpacity, Modal, TextInput, Alert, Image, Button } from 'react-native'
import React, { useState } from 'react'
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

type DrawerProps = DrawerNavigationProp<any>;

export default function Sobre() {
    
    const [modal2Visible, setModal2Visible] = useState<boolean>(false);

    const navigation = useNavigation<DrawerProps>();
    
    return (
        <View style={styles.container}>

            <Image source={require('../../../assets/Prefeiturapetro.png')}
            style={styles.imagem} />

            <Text></Text>
            <Button 
            title="INFORMAÇÕES" 
            color='#4caf50'
            onPress={() => setModal2Visible(true)} />

            <Text></Text>
            <Button 
            title="Inicio" 
            color='#4caf50'
            onPress={() => navigation.jumpTo('Home')} />

            <Modal 
                visible={modal2Visible} 
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModal2Visible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>

                        <Text style={styles.modalText}>🏛️ Prefeitura de Petrópolis</Text>
                        <Text style={styles.modalText}>Endereço:Avenida Koeler, 260 </Text>
                        <Text style={styles.modalText}>Centro – Petrópolis – RJ</Text>
                        <Text style={styles.modalText}>Telefone:(24) 2246-9000</Text>
                        <Text style={styles.modalText}>www.petropolis.rj.gov.br</Text>
                        <Text style={styles.modalText}>https://www.petropolis.rj.gov.br/</Text>
                        
                        <View>
                            <TouchableOpacity style={styles.button} onPress={() => setModal2Visible(false)}>
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}