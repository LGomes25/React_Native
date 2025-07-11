import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppRouter from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  )
}