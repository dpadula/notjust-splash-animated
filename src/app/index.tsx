import weatherAnimation from '@assets/lottie/weather-partly-shower.lottie';
import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import { View } from 'react-native';

export default function Index() {
  const animation = useRef<LottieView>(null);
  // useEffect(() => {
  //   // You can control the ref programmatically, rather than using autoPlay
  //   animation.current?.play();
  // }, []);
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
        // autoPlay
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
}
