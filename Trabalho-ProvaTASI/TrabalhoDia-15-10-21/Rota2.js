import React from 'react'
import { View, Button, Text } from 'react-native'

const Rota2 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Principal 2</Text>
      <Button title="Rota 2" onPress={ () => navigation.navigate("Rota3")} />
      <Button title="Destino 3" onPress={ () => navigation.navigate("Destino")} />
    </View>
  )
}

export default Rota2