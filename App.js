import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons';
// import Parse from 'parse/dist/parse.min.js';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Cadastrar from './components/cadastrar';
// import Consultar from './components/consultar';

const Tabs = createBottomTabNavigator();
// Parse.setAsyncStorage(AsyncStorage);
// Parse.initialize('n7j1NCvCyJVoqzTM7ydZKNksa2lMEyZcQO93lhmL','IaBYf19GXvWy5byDBd6EVq8SlM9JHK6a6Swj4rVz');
// Parse.serverURL = 'https://parseapi.back4app.com/';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
