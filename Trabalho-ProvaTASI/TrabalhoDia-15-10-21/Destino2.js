import React from 'react'
import { View, Button, Text } from 'react-native'

const Destino2 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Destino 2</Text>
      <Button title="Destino 3" onPress={ () => navigation.navigate("3")} />
    </View>
  )
}

export default Destino2