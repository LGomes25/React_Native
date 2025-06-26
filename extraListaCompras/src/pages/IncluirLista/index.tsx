import { StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import { useListaCompras } from '../../hooks/useListaCompras';
import { Unidade } from '../../types/Unidades';

export default function IncluirLista() {

    //estados
    const [nome, setNome] = useState<string>('');
    const [quantidade, setQuantidade] = useState<number>();
    const [unidade, setUnidade] = useState<string>('');
    const [marca, setMarca] = useState<string>('');
    const [obs, setObs] = useState<string>('');
    const [valor, setValor] = useState<number>();

    //Hook do context
    const {adicionarItem} = useListaCompras();

    //validacao para inclusao
    const podeIncluir = nome.trim() !== '' &&
                        quantidade !== undefined &&
                        quantidade > 0 &&
                        unidade.trim() !== '';

    //Funcoes
    const handleAdicionarItem = () => {

    adicionarItem({
        nome: nome.trim(),
        quantidade: quantidade!,
        unidade: unidade as Unidade,
        marca: marca.trim() || undefined,
        obs: obs.trim() || undefined,
        valor: valor || undefined
    });
    
    limparFormEntrada();
}

    function limparFormEntrada():void{
        setNome('');
        setQuantidade(undefined);
        setUnidade('');
        setMarca('');
        setObs('');
        setValor(undefined);
    }

    //JSX (Preview + Formulário)
    return (
        <View style={styles.container}>
            <StatusBar />
            
            {/* Preview superior */}
            <View style={styles.lista}>
                {podeIncluir && (
                    <View style={styles.linhaLista}>
                        <Text style={styles.textoLista}>{nome} - {quantidade}{unidade}</Text>
                    </View>
                )}
            </View>

            {/* Fomulario de entrada */}
            <View style={styles.formulario}>
                
                {/* entrada de dados */}
                <View style={styles.fomrEntryData}>
                    {/* Nome item */}
                    <View style={{flex:1}}>
                        <Text style={styles.textoForm}>Item:</Text>
                        <TextInput
                            style={styles.formularioFill}
                            placeholder='Nome'
                            value={nome}
                            onChangeText={setNome}
                            />
                    </View>

                    {/* quantidade e unidade */}
                    <View style={{flex:1, flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <View style={{flex:1}}>
                            <Text style={styles.textoForm}>Quantidade:</Text>
                            <TextInput 
                                style={styles.formularioFill}
                                placeholder='Quantidade'
                                value={quantidade?.toString() ||''}
                                onChangeText={(text) => setQuantidade(Number(text))}
                                />
                        </View>

                        <View style={{flex:1}}>
                            <Text style={styles.textoForm}>Unidade:</Text>
                            <TextInput 
                                style={styles.formularioFill}
                                placeholder='Unidade'
                                value={unidade || ''}
                                onChangeText={(text) => setUnidade(text)}
                                />
                        </View>
                    </View>
                    
                    {/* marca e valor */}
                    <View style={{flex:1, flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <View style={{flex:1}}>
                            <Text style={styles.textoForm}>Marca:</Text>
                            <TextInput 
                                style={styles.formularioFill}
                                placeholder='Marca (não obrigatório)'
                                value={marca}
                                onChangeText={setMarca}
                                />
                        </View>

                        <View style={{flex:1}}>
                            <Text style={styles.textoForm}>Valor:</Text>
                            <TextInput 
                                style={styles.formularioFill}
                                placeholder='Valor (não obrigatório)'
                                value={valor?.toString() ||''}
                                onChangeText={(text) => setValor(Number(text))}
                                />
                        </View>
                    </View>

                    {/* observacao */}
                    <View style={{flex:1}}>
                        <Text style={styles.textoForm}>Obs:</Text>
                        <TextInput
                            style={styles.formularioFill}
                            placeholder='Obs (não obrigatório)'
                            value={obs}
                            onChangeText={setObs}
                            />
                    </View>
                </View>

                {/* Botao incluir */}
                <View style={{flex:1}}>
                    <View style={{flex:1, alignItems:'center'}}>
                        <TouchableOpacity
                            style={{justifyContent:'center'}}
                            onPress={handleAdicionarItem}
                            disabled={!podeIncluir}
                            >
                            <Text style={styles.textoIncluir}>Incluir</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </View>
    )
}