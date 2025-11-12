import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import { Text, View } from 'react-native';

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
      <Text style={{ color: 'white' }}>Home Screen</Text>
    </View>
  );
}
