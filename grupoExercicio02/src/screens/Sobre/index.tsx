import { styles } from "./styles";
import { View, Text, TouchableOpacity, Modal, TextInput, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { DrawerNavigationProp } from "@react-navigation/drawer";

export default function Sobre() {
    
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [modal2Visible, setModal2Visible] = useState<boolean>(false);
    
    return (
        <View style={styles.container}>

            <Text>Palácio Quitandinha</Text>
            <TouchableOpacity style={styles.imagem} onPress={() => setModal2Visible(true)}>
                <Image source={require('../../../assets/palacio-quitandinha.jpg')}
                style={styles.imagem} />
            </TouchableOpacity>

            <Text></Text>

            <Text>Catedral de São Pedro de Alcântara</Text>
            <TouchableOpacity style={styles.imagem} onPress={() => setModalVisible(true)}>
                <Image source={require('../../../assets/Pet1.jpeg')}
                style={styles.imagem} />
            </TouchableOpacity>

            <Modal 
                visible={modalVisible} 
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>A Catedral de São Pedro de Alcântara, 
                            em Petrópolis, é um imponente templo em estilo neogótico francês, 
                            inaugurado em 1925. Ela abriga o Mausoléu Imperial, onde estão os 
                            restos mortais de Dom Pedro II, Dona Teresa Cristina, Princesa Isabel 
                            e o Conde d’Eu. Suas torres pontiagudas, vitrais coloridos e esculturas
                            em mármore de Carrara fazem dela um dos marcos históricos e arquitetônicos 
                            mais emblemáticos do Brasil.
                        </Text>
                        
                        <View>
                            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal 
                visible={modal2Visible} 
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModal2Visible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>O Palácio Quitandinha, em Petrópolis (RJ), 
                            foi inaugurado em 1944 como um luxuoso hotel-cassino. Após o fim dos 
                            cassinos no Brasil, virou condomínio e hoje abriga um centro cultural 
                            do SESC, mantendo viva sua arquitetura grandiosa e história glamourosa.
                        </Text>
                        
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