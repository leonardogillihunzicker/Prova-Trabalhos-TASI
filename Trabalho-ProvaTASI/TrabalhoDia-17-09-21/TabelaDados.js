import React from 'react'

import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

const dados = ({ navigation }) => {
  return (
    <View>
      <Text>Dados</Text>
      <Button
        onPress={ () => console.log("oi") }
      >
        <Text>Dados</Text>
      </Button>      
    </View>
  )
}

export default dados