import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Onboarding from "@components/onboarding/Onboarding";
import Button from "@components/buttons/Button";

const OnboardingScreen = ({ navigation }) => {
  const [tapCount, setTapCount] = useState(0);
  const finishOnboarding = async () => {
    await AsyncStorage.setItem("hasOnboarded", "true");
    navigation.replace("SignInScreen");
  };

  return (
    <Onboarding onFinish={finishOnboarding}>
      <View style={styles.slide}>
        <Image
          source={require("../../assets/splash-icon.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.text}>
          Get started quickly with our starter kit.
        </Text>
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../../assets/icon.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Connect</Text>
        <Text style={styles.text}>
          Easily connect to Supabase and manage data.
        </Text>
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../../assets/adaptive-icon.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Build</Text>
        <Text style={styles.text}>
          Create beautiful apps with built in components.
        </Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.title}>Interact</Text>
        <Text style={styles.text}>
          Tap the button to increase the count: {tapCount}
        </Text>
        <Button title="Tap me" onPress={() => setTapCount(tapCount + 1)} />
      </View>
    </Onboarding>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
    color: "#555",
  },
});

export default OnboardingScreen;
