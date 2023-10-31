
// Parse.setAsyncStorage(AsyncStorage);
// Parse.initialize('WgWMlpdR1qi4fJjjJLwK7uHTJg6ejuyohaZpInRh', '4ssc08BvXkdJjR2PACjAPJ63Q9cG3fmUOGNDYEEn');
// Parse.serverURL = 'https://parseapi.back4app.com/';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Cadastrar() {
return (
    <View style={styles.container}>
    <Text>Cadastrar</Text>
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