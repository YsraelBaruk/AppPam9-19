import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // biblioteca de Ícones 

import Cadastrar from './components/cadastrar';
import Listar from './components/listar';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor: '#00f',
          },
          headerTitleStyle:{
            color: '#fff',
            fontWeight: '100',
          },
          headerTitleAlign:'center',
          tabBarStyle:{
            height: 60,
            backgroundColor: '#0000',
          },
        }}
        >        
        <Tabs.Screen name='Cadastrar' component={Cadastrar}
          options={{
            tabBarLabel:'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen name='Consultar' component={Listar} 
          options={{
            tabBarLabel: 'Listar',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list-circle-outline" size={size} color={color} />
            ),            
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>    
  );
}

// F1 Show Spell Checker Configuration Info
// Select the Language tab.
// Enable the language Globally or in just the Workspace.