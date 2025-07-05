import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as Animatable from "react-native-animatable";

export default function Animacao() {

    const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);

    return (
        <View style={styles.container}>
            <Animatable.Text 
                style={styles.title}
                // animation={'bounce'}
                animation={'shake'}
                // iterationCount={'infinite'}
                // iterationCount={5}
                duration={8000}
                >
                    Animação
            </Animatable.Text>

            <ButtonAnimated 
                style={styles.button} 
                animation={'shake'}
                >
                <Text>Teste de botao</Text>
            </ButtonAnimated>



        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:24,
    },
    button:{
        width:'100%',
        height:30,
        color: '#fff',
        backgroundColor: 'black',
    },
})