import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "@screens/SignUpScreen";
import SplashScreen from "@screens/SplashScreen";
import SignInScreen from "@screens/SignInScreen";
import HomeScreen from "@screens/HomeScreen";
import VerificationScreen from "@screens/VerificationScreen";
import ChangePasswordScreen from "@screens/ChangePasswordScreen";
import ButtonExamples from "@screens/ButtonExamples";
import OnboardingScreen from "@screens/OnboardingScreen";
import ProfileScreen from "@screens/ProfileScreen";
import supabase from "@config/supabase";


const Stack = createStackNavigator();

const MainNavigator = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator
        id={undefined}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
        initialRouteName="SplashScreen"
      >
        {session ? (
          <>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
            <Stack.Screen name="ButtonExamples" component={ButtonExamples} />
            <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;