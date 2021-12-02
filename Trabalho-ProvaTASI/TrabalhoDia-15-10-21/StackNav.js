import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DrawerNav from './DrawerNav'

import Destino2 from '../src/Destino2'
import Destino3 from '../src/Destino3'

const Stack = createNativeStackNavigator()

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Principal"
        component={ DrawerNav}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Destino2" component={ Destino2 } />
      <Stack.Screen name="Destino3" component={ Destino3 } />
    </Stack.Navigator>
  )
}

export default StackNav