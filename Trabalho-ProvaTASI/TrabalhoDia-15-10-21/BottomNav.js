import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Rota1 from '../src/Rota1'
import Rota2 from '../src/Rota2'
import Rota3 from '../src/Rota3'

const Bottom = createBottomTabNavigator()

const BottomNav = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Bottom.Screen name="rota1" component={ Rota1 } />
      <Bottom.Screen name="rota2" component={ Rota2 } />
      <Bottom.Screen name="rota3" component={ Rota3 } />
    </Bottom.Navigator>
  )

}

export default BottomNav