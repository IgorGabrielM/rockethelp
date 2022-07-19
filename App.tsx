import { NativeBaseProvider,StatusBar } from 'native-base';
import { THEME } from './src/styles/theme'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import {Loading} from './src/components/Loading'

import {Home} from './src/pages/Home'
import {SignIn} from './src/pages/SignIn'
import {Register} from './src/pages/Register'

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
      barStyle='light-content'
      backgroundColor='transparent'
      translucent/>
      { fontsLoaded ? <Register /> :  <Loading /> }
    </NativeBaseProvider>
  );
}
