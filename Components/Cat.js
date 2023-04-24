import React, { useState } from 'react'
import {Text, Image, Button, View} from 'react-native'

const Cat = ({name}) => {
  // const [tieneHambre, setTieneHambre] = useState(true)
  const [caricias, setCaricias] = useState(0)

  return (
    <View style={{paddingTop: 30}}>
      <Text>Hola, soy el gato {name}{caricias > 0 ? ` me han acariciado ${caricias} veces.` : '.'}</Text>
      <Button
        title={'acaricia a ' + name}
        // disabled={!tieneHambre}
        onPress={()=>{
          setCaricias(caricias => caricias + 1)
        }}
      />
    </View>
  )
}

export default Cat