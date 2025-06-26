import { View, Text, TextInput as TextInputType, TouchableOpacity, Alert, Image} from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './styles';
import { api } from '../../services/api';

interface WeatherData{
    cidade: string;
    pais: string;
    temperatura: number;
    sensacaoTermica: number;
    condicao: string;
    iconeCondicao: string;
    chanceChuva: number;
    horaLocal: string;

}

export default function Clima() {
    
    const inputRef = useRef<TextInputType>(null);
    const [cidade, setCidade] = useState('');
    const [weather, setWeather] = useState<WeatherData | null>(null);
    
    function limpar():void{
        setCidade('');
        setWeather(null);
        if(inputRef.current){
            inputRef.current?.focus();
        }
    }
    
    const pesquisar = async() => {
        try{
            const response =await api.get('',{params:{q:cidade}});
            if (response.data.error){
                setWeather(null);
                Alert.alert('Cidade não encontrada');
                return; 
            };
            const dados = response.data;
            const climaFormatado: WeatherData = {
                cidade: dados.location.name,
                pais: dados.location.country,
                temperatura: dados.current.temp_c,
                sensacaoTermica: dados.current.feelslike_c,
                condicao: dados.current.condition.text,
                iconeCondicao: dados.current.condition.icon,
                chanceChuva: dados.forecast.forecastday[0].day.daily_chance_of_rain,
                horaLocal: dados.location.localtime,
            };
            setWeather(climaFormatado);
        }catch(error){
            console.error("Erro ao buscar dados do clima: " + error);
            setWeather(null); 
        }
    }
    
    return (
        <View style={styles.container}>
            
            {/* Entrada de dados para pesquisa */}
            <View style={{alignItems:'center'}}>
                <Text style={styles.text}>Digite a Cidade</Text>
                <TextInputType
                    style={styles.input}
                    value={cidade}
                    onChangeText={(text) => setCidade(text)}
                    keyboardType='default'
                    ref={inputRef}
                    onFocus={limpar}
                    />
            </View>

            {/* botao pesquisar e limpar */}
            <View style={styles.areaBtn}>
                <TouchableOpacity 
                    style={styles.botao}
                    onPress={pesquisar}
                    >
                    <Text style={styles.botaoText}>Pesquisar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.botao, {backgroundColor:"gold"}]} 
                    onPress={limpar}
                    >
                    <Text style={styles.botaoText}>🗑️</Text>
                </TouchableOpacity>
            </View>

            {/* resultado apresentado */}
            <View style={styles.resultado}>
                <Text style={styles.itemText}>📍 Cidade: {weather?.cidade}, {weather?.pais}</Text>
                <Text style={styles.itemText}>🕒 Hora local: {weather?.horaLocal}</Text>
                <Text style={styles.itemText}>🌡️ Temperatura: {weather?.temperatura}°C</Text>
                <Text style={styles.itemText}>🤗 Sensação térmica: {weather?.sensacaoTermica}°C</Text>
                <Text style={styles.itemText}>🌧️ Chance de chuva: {weather?.chanceChuva}%</Text>
                <Text style={styles.itemText}>🔎 Condição: {weather?.condicao}</Text>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Image 
                        source={{ uri: `https:${weather?.iconeCondicao}` }} 
                        style={{ width: 64, height: 64 }}
                    />
                </View>

            </View>

        </View>
    )
}