import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cat from './Components/Cat'
import Cuadro from './Components/Cuadro'
import AlphaVantage from './Components/Alpha-Vantage';
import AlphaVantageService from './Services/Alpha-Vantage';
import { useState, useEffect } from 'react';

export default function App() {


  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Cat name='Pepe'/>
        <Cat name='Rafa'/>
        <Cat name='Mari'/>
        {/* <Cuadro/> */}
        <AlphaVantage/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
