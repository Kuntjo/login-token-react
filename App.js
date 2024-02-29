import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';

//first of all after getting the firebase we eed routing

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name='login' component={Login} options={{ headerShown:false }}></Stack.Screen>
        <Stack.Screen name='home' component={Home} options={{ headerShown:false }}></Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
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
