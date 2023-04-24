import React from 'react'
import {StyleSheet, TextInput, View, Text} from 'react-native'

const Cuadro = () => {
  return <View style={{backgroundColor: 'grey'}}>
    <Text>Hola desde el Cuadro</Text>
    <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
      }}
      defaultValue="Name me!"
    />
  </View>
}

export default Cuadro