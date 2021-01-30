import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
      <SafeAreaView>

      <ScrollView bounces={true} horizontal >
      
      <LinearGradient 
      style={styles.container} 
      colors={['#ff3460','#ff3460', 'rgba(0,0,0,0.8)']}
      start={{x: 0, y: 0}}
      >
      <StatusBar style="light" backgroundColor='#ff3460'/>

      <Text>Open up App.tsx to start working on your app!</Text>
      <Image source={require('./assets/adaptive-icon.png')}/>
      </LinearGradient>
      </ScrollView>
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ff3460',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
