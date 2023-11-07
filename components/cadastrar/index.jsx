import {React} from 'react'
import { StyleSheet, SafeAreaView, Pressable, Text, TextInput, Alert, View } from 'react-native'
import Parse from 'parse/react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import 'react-native-get-random-values'

Parse.setAsyncStorage(AsyncStorage)
const Api_ID = 'WgWMlpdR1qi4fJjjJLwK7uHTJg6ejuyohaZpInRh'
const JS_key = '4ssc08BvXkdJjR2PACjAPJ63Q9cG3fmUOGNDYEEn'
Parse.initialize(Api_ID, JS_key)
Parse.serverURL = 'https://parseapi.back4app.com/'

export default function Cadastrar() {
return (
    <SafeAreaView style={styles.container__safe}>
        <View style={styles.container}>
            <TextInput
                placeholder={'Produto'}
                style={styles.input}
            />
            <TextInput
                placeholder={'Valor R$0,00'}
                style={styles.input}
                numeric
                keyboardType={'numeric'}
            />
            <TextInput
                placeholder={'Quantidade'}
                // onChangeText
                style={styles.input}
            />
        </View>
    </SafeAreaView>
)}

const styles = StyleSheet.create({
container__safe:{
    flex: 1,
},
input:{
    width: 300,
    height: 44,
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
},
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
})