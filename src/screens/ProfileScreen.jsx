import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Alert } from 'react-native';
import Button from '@components/buttons/Button';
import supabase from '@config/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (!error && data?.user?.email) {
        setEmail(data.user.email);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    await AsyncStorage.removeItem('userUuid');
    navigation.replace('SignInScreen');
  };

  const handleDeleteAccount = async () => {
    const { data } = await supabase.auth.getUser();
    const userId = data?.user?.id;
    if (!userId) return;
    const { error } = await supabase.auth.admin.deleteUser(userId);
    if (error) {
      Alert.alert('Error', error.message);
      return;
    }
    await supabase.auth.signOut();
    await AsyncStorage.removeItem('userUuid');
    navigation.replace('SignUpScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      {email ? <Text style={styles.email}>{email}</Text> : null}
      <View style={styles.buttonContainer}>
        <Button title="Log Out" variant="secondary" onPress={handleLogout} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Delete Account" variant="outline" onPress={handleDeleteAccount} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 12,
  },
  email: {
    fontSize: 16,
    marginBottom: 24,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 6,
  },
});

export default ProfileScreen;
