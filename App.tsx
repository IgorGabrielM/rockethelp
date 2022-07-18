import { NativeBaseProvider } from 'native-base';
import { THEME } from './src/styles/theme'
import {SignIn} from './src/pages/SignIn'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import {Loading} from './src/components/Loading'

export default function App() {

  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <SignIn />
    </NativeBaseProvider>
  );
}
