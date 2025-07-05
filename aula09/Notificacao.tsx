import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import Animacao from "./src/screens/Animacao";
import Message from "./src/screens/Message";
import { useState } from "react";
import Home from "./src/screens/HOME";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      {show && <Message />}
      <StatusBar barStyle={"light-content"} />

      <Button
        title={show ? "Fechar Mensagem" : "Exibir Mensagem"}
        onPress={() => setShow((prevState) => !prevState)}
      ></Button>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});