import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import supabase from '@config/supabase';
const SplashScreen = ({ navigation }) => {
    
    const checkUser = async () => {
        try {
          const { data: { session }, error } = await supabase.auth.getSession();
          if (error) {
            throw error;
          }
          const hasOnboarded = await AsyncStorage.getItem('hasOnboarded');
          if (session?.user) {
            await AsyncStorage.setItem('userUuid', session.user.id);
            navigation.replace('HomeScreen');
          } else if (!hasOnboarded) {
            navigation.replace('OnboardingScreen');
          } else {
            navigation.replace('SignInScreen');
          }
        } catch (error) {
          console.error('Error checking user session:', error);
          navigation.replace('SignUpScreen');
        }
      };
      

    useEffect(() => {
            checkUser();
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Loading...</Text>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export default SplashScreen;
