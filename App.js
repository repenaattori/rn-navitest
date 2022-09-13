import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useLayoutEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {AntDesign, Entypo} from '@expo/vector-icons'

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

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerStyle:{ backgroundColor: 'cyan' },
      headerRight: () => (
        <Entypo name="new-message" size={24} color="black" onPress={()=> navigation.navigate('Profile')}/>
        )
    },
    
    )
  }, [])

  return(
    <View style={{backgroundColor:'beige'}}>
      <Text>Home screen</Text>
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
