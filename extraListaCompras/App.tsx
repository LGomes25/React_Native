import { NavigationContainer } from '@react-navigation/native';  //Documentacao: https://reactnavigation.org/
import AppRouter from './src/routes';
import ListaComprasProvider from './src/contexts/ListaComprasContext';

export default function App() {
  return (
    <ListaComprasProvider>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </ListaComprasProvider>
  );
}