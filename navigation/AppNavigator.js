import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Hook1 from '../screens/Hook1';
import Hook2 from '../screens/Hook2';
import Hook3 from '../screens/Hook3';
import LoginOption from '../screens/LoginOption';
import Signup from '../screens/Signup';
import Signin from '../screens/Signin';
import GetOtp from '../screens/GetOtp';
import EnterOtp from '../screens/EnterOtp';
import LoggedIn from '../screens/LoggedIn';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Hook1" component={Hook1} />
        <Stack.Screen name="Hook2" component={Hook2} />
        <Stack.Screen name="Hook3" component={Hook3} />
        <Stack.Screen name="LoginOption" component={LoginOption} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="GetOtp" component={GetOtp} />
        <Stack.Screen name="EnterOtp" component={EnterOtp} />
        <Stack.Screen name="LoggedIn" component={LoggedIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;