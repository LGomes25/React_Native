import { StatusBar, StyleSheet, View } from 'react-native'
import MarqueeText from '../MarqueeText'

export default function Header({texto}) {
    return (
        <View style={styles.container}>
            <StatusBar 
                // style="auto" 
                barStyle={'light-content'}
                backgroundColor={"#6200ee"} /*transparent*/
                hidden={false} /*true*/
                translucent={true} /*false*/
                animated={true} /*false*/
            />
            <MarqueeText textoMove={texto}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:60,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
    },
})