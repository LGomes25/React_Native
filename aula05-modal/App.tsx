import { View, Text , StatusBar, TextInput as TextInputType, TouchableOpacity, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './src/styles/styles';
import api from './src/services/api';

interface CnpjData{
  cnpj: string;
  fantasia: string;
  logradouro: string;
  municipio: string;
}

export default function App() {
  
  const [cnpj, setCnpj] = useState('');
  const inputRef = useRef<TextInputType>(null);
  const [cnpjUser , setCnpjUser] = useState<CnpjData | null>(null);

  function limpar():void{
    setCnpj('');
    setCnpjUser(null);
    if(inputRef.current){
      inputRef.current?.focus();
    }
  }

  const buscar = async () => {
    if(cnpj.length !== 14){
      Alert.alert('O CNPJ tem que ter 14 dígitos');
      return;
    }
    try{
      const response = await api.get(`/${cnpj}`); //await = this do java
      if (response.data.erro){
        setCnpjUser(null);
        Alert.alert("CNPJ não encontrado");
      }
      setCnpjUser(response.data);
    }catch(error){
      console.error("Error:" + error);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"}/>
      <View style={{alignItems:"center"}}>

        <Text style={styles.text}>Digite o seu CNPJ</Text>
        <TextInputType 
          style={styles.input}
          value={cnpj}
          onChangeText={(text) => setCnpj(text)}
          keyboardType='numeric'
          ref={inputRef} 
          onFocus={limpar}
          />
      </View>

      <View style={styles.areaBtn}>

        <TouchableOpacity style={[styles.botao, {backgroundColor:"blue"}]} onPress={buscar}>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, {backgroundColor:"red"}]} onPress={limpar}>
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>

      </View>

      {cnpjUser && ( 
        <View style={styles.resultado}>
        <Text style={styles.itemText}>CNPJ: {cnpjUser?.cnpj}</Text>
        <Text style={styles.itemText}>Nome Fantasia: {cnpjUser?.fantasia}</Text>
        <Text style={styles.itemText}>Logradouro: {cnpjUser?.logradouro}</Text>
        <Text style={styles.itemText}>Municipio: {cnpjUser?.municipio}</Text>
      </View>
      )}

    </View>
  )
}