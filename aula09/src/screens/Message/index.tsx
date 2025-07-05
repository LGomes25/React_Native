import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

import { MaterialIcons } from '@expo/vector-icons';
import Animated, {FadeIn, StretchOutY} from 'react-native-reanimated'

export default function Message() {
    return (
        <Animated.View style={styles.container} entering={FadeIn.duration(1000)} exiting={StretchOutY}>
            <MaterialIcons name='notifications' color={'red'} size={18}/>
            <Text style={styles.title}>Teste de Mensagem</Text>
        </Animated.View>
    )
}

