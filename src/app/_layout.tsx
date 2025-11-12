import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const sleep = (delay: number) =>
    new Promise((resolve) => setTimeout(resolve, delay));
  const [dataLoaded, setDataLoaded] = useState(false);

  const loadData = async () => {
    await sleep(2000);
    return true;
  };

  useEffect(() => {
    // 2. Ejecutar la lógica de carga DENTRO de un useEffect (solo al montar)
    async function prepare() {
      try {
        await loadData();
        // Cuando la carga termine, actualiza el estado
        setDataLoaded(true);
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []); // El array vacío asegura que esto solo se ejecute una vez

  // 3. Usar otro useEffect para ocultar el splash screen cuando dataLoaded cambie a true
  useEffect(() => {
    if (dataLoaded) {
      console.log('🚀 ~ RootLayout ~ HIDE SPLASH SCREEN:');
      // Oculta el splash screen
      SplashScreen.hideAsync();
    }
  }, [dataLoaded]); // Se ejecuta cada vez que dataLoaded cambia

  // Mientras los datos se cargan, puedes mostrar un indicador o null
  if (!dataLoaded) {
    // No necesitamos mostrar nada, solo esperamos a que el useEffect termine
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
    </Stack>
  );
}
