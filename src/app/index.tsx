import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
import { View } from 'react-native';

export default function Index() {
  const animation = useRef<LottieView>(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    animation.current?.play();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff4b',
      }}
    >
      <LottieView
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'transparent',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('@assets/lottie/weather-partly-shower.json')}
      />
    </View>
  );
}
