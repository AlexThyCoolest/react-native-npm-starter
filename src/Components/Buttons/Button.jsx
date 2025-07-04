import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const Button = ({
  title,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  containerStyle,
  titleStyle,
  onPress,
  ...restProps
}) => {
  const getVariantStyles = () => {
    if (disabled) {
      return styles.disabledButton;
    }
    switch (variant) {
      case 'primary':
        return styles.primaryButton;
      case 'secondary':
        return styles.secondaryButton;
      case 'outline':
        return styles.outlineButton;
      default:
        return styles.primaryButton;
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return styles.smallButton;
      case 'medium':
        return styles.mediumButton;
      case 'large':
        return styles.largeButton;
      default:
        return styles.mediumButton;
    }
  };

  const getTextColor = () => {
    if (disabled) return '#FFFFFF';
    switch (variant) {
      case 'primary':
        return '#FFFFFF';
      case 'secondary':
        return '#000000';
      case 'outline':
        return '#007AFF';
      default:
        return '#FFFFFF';
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getVariantStyles(),
        getSizeStyles(),
        containerStyle,
      ]}
      onPress={onPress}
      disabled={disabled || isLoading}
      {...restProps}
    >
      {isLoading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <View style={styles.contentContainer}>
          {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
          <Text
            style={[
              styles.buttonText,
              { color: getTextColor() },
              getSizeStyles(),
              titleStyle,
            ]}
          >
            {title}
          </Text>
          {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  secondaryButton: {
    backgroundColor: '#E1E1E1',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  disabledButton: {
    backgroundColor: '#808080',
  },
  smallButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  mediumButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  largeButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '600',
    textAlign: 'center',
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});

export default Button;