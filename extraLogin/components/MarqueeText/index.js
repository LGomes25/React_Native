import { View, Dimensions, Animated, StyleSheet } from 'react-native'
import { useEffect, useRef, useState } from 'react'

export default function MarqueeText({textoMove}) {

    const screenWidth = Dimensions.get('window').width;
    const animatedValue = useRef(new Animated.Value(screenWidth)).current;
    const [textWidth, setTextWidth] = useState(0);

    useEffect(() => {

        if(textWidth === 0) return;

        Animated.loop(
            Animated.timing(animatedValue,{
                toValue: -textWidth,
                duration: 9000,
                useNativeDriver: true,
            })
        ).start();
    }, [textWidth]);

    return (
        <View style={styles.container}>
            <Animated.Text
                style={[styles.text,
                    {transform: [{translateX:animatedValue}]}
                ]}
                onLayout={(e)=>{
                    const {width} = e.nativeEvent.layout;
                    setTextWidth(width)
                }}
            >
                {textoMove}
            </Animated.Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        overflow: 'hidden',
        width: '100%',
        height: 50,
        justifyContent: "center",
        backgroundColor: 'yellow',
    },
    text:{
        fontSize:18,
        fontWeight: 'bold',
        paddingTop:4,
    },
})