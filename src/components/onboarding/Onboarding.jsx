import React, { useRef, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Button from '@components/buttons/Button';

const Onboarding = ({ children, onFinish }) => {
  const slides = React.Children.toArray(children);
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
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    } else if (onFinish) {
      onFinish();
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      flatListRef.current?.scrollToIndex({ index: prevIndex, animated: true });
      setCurrentIndex(prevIndex);
    }
  };

  const handleSkip = () => {
    if (onFinish) {
      onFinish();
    }
  };

  const renderItem = ({ item }) => <View style={styles.slide}>{item}</View>;

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={renderItem}
        keyExtractor={(_, index) => String(index)}
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
            <Button title="Skip" size="small" variant="outline" onPress={handleSkip} />
            <Button title="Next" size="small" onPress={handleNext} />
          </>
        ) : (
          <Button title="Get Started" size="small" onPress={onFinish} />
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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 24,
  },
});

export default Onboarding;
