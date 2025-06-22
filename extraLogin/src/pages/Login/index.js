import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native'
import Header from '../../../components/Header'
import imagem from '../../img/Login.png'
import fundo from '../../img/fundo.jpg'
import { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    // function alerta(){
    //     alert('Email: '+ email +'/n, Senha: '+ password);

    // }

    return (
        <ImageBackground source={fundo} style={styles.imgfundo}>
        <Header texto='Faça seu login para acessar o sistema'/>
            <View style={styles.container}>

                <View>
                    <Image 
                        style={styles.img}
                        source={imagem}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.continsert}>
                    <Text style={styles.texto}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Insira o e-mail'
                        value={email}
                        onChangeText={setEmail}
                        />
                </View>

                <View style={styles.continsert}>
                    <Text style={styles.texto}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Insira a senha'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </View>

                <View>
                    <TouchableOpacity /*onPress={alerta}*/>
                        <Text style={styles.touch}>Login</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop:80,
    },
    imgfundo:{
        // resizeMode: 'cover',
        // justifyContent: 'center',
        width: '100%',
        height:'100%',
    },
    continsert:{
        alignItems:'center'
    },
    texto:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'blue',
        backgroundColor:'rgba(255,255,255,0.6)',
    },
    img:{
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    input:{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius:10,
        padding: 10,
        width: 200 ,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,0.6)',
    },
    touch:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
    },

});