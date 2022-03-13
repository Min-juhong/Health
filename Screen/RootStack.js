import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';

const Stack = createNativeStackNavigator();

function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: '',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />
      {/* 바텀 탭 스크린 추가 예정, 로그인 완료 시 해당 스크린 이동 */}
    </Stack.Navigator>
  );
}

export default RootStack;
