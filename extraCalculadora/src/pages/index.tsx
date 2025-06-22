import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Calculator() {
    const [topCalc, setTopCalc] = useState<string>('');
    const [bottonDisplay, setBottonDisplay] = useState<number|string>(0);
    const [primeiroNumero, setPrimeiroNumero] = useState<string>('');
    const [segundoNumero, setSegundoNumero] = useState<string>('');
    const [resultado, setResultado] = useState<number>(0);
    const [operacao, setOperacao] = useState<string>('');

    function CalculoSuperior(superior:string):void{
        setTopCalc(topCalc+superior)
    }

    function ArmazenaNumero(numero:string):void{
        if(operacao === ''){
            setPrimeiroNumero(primeiroNumero+numero)
            setBottonDisplay(primeiroNumero+numero)
    
        } else{
            setSegundoNumero(segundoNumero+numero)
            setBottonDisplay(segundoNumero+numero)
        }
    }
        
    
    function Calcular():void{
        let resultadoCalculado:number=0;
        switch (operacao) {
            case '+': resultadoCalculado = parseFloat(primeiroNumero)+parseFloat(segundoNumero);break;
            case '-': resultadoCalculado = parseFloat(primeiroNumero)-parseFloat(segundoNumero);break;
            case '/': resultadoCalculado = parseFloat(primeiroNumero)/parseFloat(segundoNumero);break;
            case '*': resultadoCalculado = parseFloat(primeiroNumero)*parseFloat(segundoNumero);break;
        }
        setResultado(resultadoCalculado);
        setTopCalc(`${topCalc} = ${resultadoCalculado}`);
        setBottonDisplay(resultadoCalculado);
    };
    

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={'blue'}/>

            {/* Titulo */}
            <View style={styles.particaoTitulo}>
                <Text style={styles.textoTitulo}>Calculadora</Text>
            </View>

            {/* Display */}
            <View style={styles.particaoDisplay}>
                <View style={styles.displayTop}>
                    <Text style={styles.displayTopTexto}>{topCalc}</Text>
                </View>

                <View style={styles.displayBotton}>
                    <Text style={styles.displayBottonTexto}>{bottonDisplay}</Text>
                </View>
            </View>

            {/* Botoes */}
            <View style={styles.particaoBotao}>

                <View style={styles.botoesHorizontal}>
                    <View style={styles.botoesVertical}>
                        <TouchableOpacity
                            style={styles.botoes}
                            onPress={()=>{CalculoSuperior("/"),setOperacao("/")}}
                        >
                            <Text style={styles.botoesTexto}>/</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.botoesVertical}>
                        <TouchableOpacity
                            style={styles.botoes}
                            onPress={()=>{CalculoSuperior("*"),setOperacao("*")}}
                        >
                            <Text style={styles.botoesTexto}>*</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.botoesVertical}>
                        <TouchableOpacity
                            style={styles.botoes}
                            onPress={()=>{CalculoSuperior("-"),setOperacao("-")}}
                        >
                            <Text style={styles.botoesTexto}>-</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.botoesVertical}>
                        <TouchableOpacity
                            style={styles.botoes}
                            onPress={()=>{CalculoSuperior("+"),setOperacao("+")}}
                        >
                            <Text style={styles.botoesTexto}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={styles.botoesHorizontal}>
                    <View style={styles.botoesVertical}>
                        <TouchableOpacity
                            style={styles.botoes}
                            onPress={()=>{CalculoSuperior('7'), ArmazenaNumero('7')}}
                        >
                            <Text style={styles.botoesTexto}>7</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.botoesVertical}>
                        <TouchableOpacity
                            style={styles.botoes}
                            onPress={()=>{CalculoSuperior('8'),ArmazenaNumero('8')}}
                        >
                            <Text style={styles.botoesTexto}>8</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.botoesVertical}>
                        <TouchableOpacity
                            style={styles.botoes}
                            onPress={()=>{CalculoSuperior('9'),ArmazenaNumero('9')}}
                        >
                            <Text style={styles.botoesTexto}>9</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.botoesVertical}>
                        <TouchableOpacity
                            style={styles.botoes}
                            onPress={()=>{
                                setTopCalc(''),
                                setOperacao(''),
                                setPrimeiroNumero(''),
                                setSegundoNumero(''),
                                setResultado(0),
                                setBottonDisplay(0)
                            }}
                        >
                            <Text style={styles.botoesTexto}>CE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={styles.botoesHorizontal}>
                    <View style={styles.botoesVertical}>
                        <TouchableOpacity
                            style={styles.botoes}
                            onPress={()=>{CalculoSuperior('4'),ArmazenaNumero('4')}}
                        >
                            <Text style={styles.botoesTexto}>4</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.botoesVertical}>
                        <TouchableOpacity
                            style={styles.botoes}
                            onPress={()=>{CalculoSuperior('5'),ArmazenaNumero('5')}}
                        >
                            <Text style={styles.botoesTexto}>5</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.botoesVertical}>
                        <TouchableOpacity
                            style={styles.botoes}
                            onPress={()=>{CalculoSuperior('6'),ArmazenaNumero('6')}}
                        >
                            <Text style={styles.botoesTexto}>6</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.botoesVertical}>
                        <TouchableOpacity
                            style={styles.botoes}
                            onPress={()=>{
                                setTopCalc(''),
                                setOperacao(''),
                                setPrimeiroNumero(''),
                                setSegundoNumero(''),
                                setResultado(0),
                                setBottonDisplay(0)
                            }}>
                        <Text style={styles.botoesTexto}>C</Text>
                        </TouchableOpacity></View>
                </View>
                
                <View style={styles.botoesHorizontal}>
                    <View style={styles.botoesVertical}>
                        <TouchableOpacity
                            style={styles.botoes}
                            onPress={()=>{CalculoSuperior('1'),ArmazenaNumero('1')}}
                        >
                        <Text style={styles.botoesTexto}>1</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.botoesVertical}>
                        <TouchableOpacity
                            style={styles.botoes}
                            onPress={()=>{CalculoSuperior('2'),ArmazenaNumero('2')}}
                        >
                            <Text style={styles.botoesTexto}>2</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.botoesVertical}>
                        <TouchableOpacity
                            style={styles.botoes}
                            onPress={()=>{CalculoSuperior('3'),ArmazenaNumero('3')}}
                        >
                            <Text style={styles.botoesTexto}>3</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.botoesVertical}>
                        <TouchableOpacity
                            style={styles.botoes}
                            onPress={()=>{CalculoSuperior('='),Calcular()}}
                        >
                            <Text style={styles.botoesTexto}>=</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.botoesHorizontal}>
                    <View style={styles.botoesVertical}>
                        <TouchableOpacity
                            style={styles.botoes}
                            onPress={()=>{CalculoSuperior('0'),ArmazenaNumero('0')}}
                        >
                            <Text style={styles.botoesTexto}>0</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.botoesVertical}>
                        <TouchableOpacity
                            style={styles.botoes}
                            onPress={()=>{CalculoSuperior('.'),ArmazenaNumero('.')}}
                        >
                            <Text style={styles.botoesTexto}>.</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.botoesVertical}>
                        <TouchableOpacity
                            style={styles.botoes}
                            onPress={()=>{CalculoSuperior('.'),ArmazenaNumero('.')}}
                        >
                            <Text style={styles.botoesTexto}>,</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.botoesVertical}>
                        <TouchableOpacity
                            style={styles.botoes}
                            onPress={()=>{CalculoSuperior('='),Calcular()}}
                        >
                            <Text style={styles.botoesTexto}>=</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            {/* Informacoes */}
            <View style={styles.particaoInfo}>
                <Text style={styles.textoInfo}>Calculadora desenvolvida para treinamento.</Text>
                <Text style={styles.textoInfo}>Utilização de TypeScript e estilização por StyleSheet.</Text>
                <Text style={styles.textoInfo}>21-jun-2025</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgb(195, 197, 206)',
    },
    //====== Titulo =========================================
    particaoTitulo:{
        flex:1,
        flexDirection:'row',
        alignContent:'center',
        alignItems:'flex-end',
        justifyContent:'center'
    },
    textoTitulo:{
        fontSize: 30,
        color: 'red',
        fontWeight:'bold',
    },
    //====== Display =========================================
    particaoDisplay:{
        flex:3,
        borderWidth: 1,
        borderColor: "gray",
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        marginTop:20,
        marginBottom:0,
        marginHorizontal:20,
        paddingRight:5,
        backgroundColor:'rgb(32, 32, 32)',
    },
    displayTop:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',
    },
    displayBotton:{
        flex:4,
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    displayTopTexto:{
        fontFamily: 'sans-serif-light',
        fontStyle:'italic',
        fontWeight:'bold',
        fontSize:20,
        color:'rgb(71, 177, 232)',
    },
    displayBottonTexto:{
        fontFamily: 'sans-serif-light',
        fontWeight:'bold',
        fontSize:50,
        color:'rgb(71, 177, 232)',
    },
    //====== Botoes ==========================================
    particaoBotao:{
        flex:6,
        borderWidth: 1,
        borderColor: "gray",
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        marginTop:0,
        marginBottom:20,
        marginHorizontal:20,
        backgroundColor:"rgb(32, 32, 32)",
    },
    botoesHorizontal:{
        flex:1,
        flexDirection:'row',
    },
    botoesVertical:{
        flex:1,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        margin:2,
        backgroundColor: '#3c3c3c',
    },
    botoes:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    botoesTexto:{
        fontSize:30,
        fontWeight:'bold',
        color:'rgb(71, 177, 232)',
    },
    //====== info ============================================
    particaoInfo:{
        flex:2,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    textoInfo:{
        fontSize: 12,
        fontStyle:'italic',
        color:'blue',
    },
    
})