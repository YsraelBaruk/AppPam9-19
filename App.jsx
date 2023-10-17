import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons';
// import Parse from 'parse/dist/parse.min.js';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Consultar from './components/consultar';
import Cadastrar from './components/cadastrar';

const Tabs = createBottomTabNavigator();
// Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('WgWMlpdR1qi4fJjjJLwK7uHTJg6ejuyohaZpInRh', '4ssc08BvXkdJjR2PACjAPJ63Q9cG3fmUOGNDYEEn');
// Parse.serverURL = 'https://parseapi.back4app.com/';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='Cadastrar' component={Cadastrar}  options={{tabBarIcon:()=>{<Ionicons name="ios-add-circle-outline" color={black} size={size} />} }} />
        <Tabs.Screen name='Listar' component={Consultar} options={{tabBarIcon:()=>{<Ionicons name="ios-list-circle-outline" color={color} size={size} />} }} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
  //ios-list-circle-outline
  //ios-add-circle-outline
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
