import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '@components/buttons/Button';

const slides = [
  {
    key: 'slide1',
    title: 'Welcome',
    text: 'Get started quickly with our starter kit.',
    image: require('../../assets/splash-icon.png'),
  },
  {
    key: 'slide2',
    title: 'Connect',
    text: 'Easily connect to Supabase and manage data.',
    image: require('../../assets/icon.png'),
  },
  {
    key: 'slide3',
    title: 'Build',
    text: 'Create beautiful apps with built in components.',
    image: require('../../assets/adaptive-icon.png'),
  },
];

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      finishOnboarding();
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      flatListRef.current?.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  const finishOnboarding = async () => {
    await AsyncStorage.setItem('hasOnboarded', 'true');
    navigation.replace('SignInScreen');
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfigRef.current}
        ref={flatListRef}
      />
      <View style={styles.buttonRow}>
        {currentIndex > 0 ? (
          <Button title="Back" size="small" variant="secondary" onPress={handleBack} />
        ) : (
          <View style={{ width: 80 }} />
        )}
        {currentIndex < slides.length - 1 ? (
          <>
            <Button title="Skip" size="small" variant="outline" onPress={finishOnboarding} />
            <Button title="Next" size="small" onPress={handleNext} />
          </>
        ) : (
          <Button title="Get Started" size="small" onPress={finishOnboarding} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 48,
  },
  slide: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 24,
  },
});

export default OnboardingScreen;
