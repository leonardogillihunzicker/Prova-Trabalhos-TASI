import React from 'react'
import { View, Button, Text } from 'react-native'

const Destino1 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Rota 1</Text>
      <Button title="Destino 2" onPress={ () => navigation.navigate("Destino2")} />
    </View>
  )
}

export default Destino1