import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={"light-content"} backgroundColor={"purple"}/>
      <View style={styles.item}>
        <Text style={styles.texto}>Calculadora de IMC</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginTop: 20,
  },
  texto: {
    color: "purple",
    fontSize: 30,
    fontWeight: "bold"
  },
  item: {
    backgroundColor: "transparent",
    padding: 10,
    alignItems: "center",
  },
});