import weatherAnimation from '@assets/lottie/weather-partly-shower.lottie';
import LottieView from 'lottie-react-native';
import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';

interface AnimatedSplashScreenProps {
  onAnimationFinish?: (isCancelled: boolean) => void;
}

const AnimatedSplashScreen = ({
  onAnimationFinish,
}: AnimatedSplashScreenProps) => {
  const animation = useRef<LottieView>(null);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}
    >
      <LottieView
        ref={animation}
        loop={false}
        onAnimationFinish={onAnimationFinish}
        autoPlay
        style={{
          width: '80%',
          height: '40%',
          maxHeight: 200,
          maxWidth: 500,
          backgroundColor: 'transparent',
          // Find more Lottie files at https://lottiefiles.com/featured
        }}
        source={weatherAnimation}
      />
    </View>
  );
};

export default AnimatedSplashScreen;

const styles = StyleSheet.create({});
