import { Button, FlatList, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { useListaCompras } from '../../hooks/useListaCompras';


export default function ListaCompra() {

    const {lista,alterarStatus} = useListaCompras();

    
    
    return (
        <View style={styles.container}>
            <StatusBar />
            
            <View style={styles.lista}>
                <FlatList 
                    data={lista}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => {
                        return(
                            <View style={styles.linhaLista}>
                                
                                <View style={{flex:1}}>
                                    <TouchableOpacity onPress={()=>alterarStatus(item.id)}>
                                        <Text>{item.status? '✓' : '◯'}</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{flex:15}}>
                                    <Text style={styles.texto}>{item.nome}</Text>
                                </View>

                                <View style={{flex:5, flexDirection:'row',alignItems:'flex-end'}}>
                                    <Text style={styles.texto}>{item.quantidade}</Text>
                                    <Text style={styles.texto}>{item.unidade}</Text>
                                </View>
                                {/* <View>
                                </View> */}

                                <View style={{flex:2, alignItems:'center'}}>
                                    <TouchableOpacity onPress={()=> {}}>
                                        <Text>➕</Text>
                                    </TouchableOpacity>
                                
                                
                                </View>
                                
                                <View style={{flex:1,alignItems:'center'}}>
                                    <TouchableOpacity onPress={()=> {}}>
                                        <Text>🗑️</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        )
                    }}
                />
                
            </View>

        </View>
    )
}