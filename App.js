import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={HomeScreen}
          options={{
            title: 'My home',
            headerTitle: 'My sweet home'
          }}
        />
        <Stack.Screen 
          name='Profile'
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) =>{
  return(
    <View style={{backgroundColor:'beige'}}>
      <Text>Home screen</Text>
      <Button title='Profile' onPress={()=> navigation.navigate('Profile') }></Button>
    </View>
  );
}

const ProfileScreen = ({navigation}) =>{
  return(
    <View>
      <Text>Profile screen</Text>
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
