/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
  
  SafeAreaView,
 
} from 'react-native-safe-area-context';
import { Camera, NitroMath } from '../lib';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <View>
        <Text style={{color:'black',fontSize:20}}>Nitro Module : {NitroMath.add(10,20)}</Text>
      </View>
       <View>
        <Text style={{color:'black',fontSize:20}}>Nitro View : </Text>
        <Camera enableFlash/>
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
