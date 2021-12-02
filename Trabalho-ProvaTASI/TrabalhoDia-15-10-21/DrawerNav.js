import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

import BottomNav from './BottomNav'
import Destino1 from '../src/Destino1'

export default DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Rotas' component={ BottomNav } />
      <Drawer.Screen name='Destinos' component={ Destino1 } />
    </Drawer.Navigator>
  )
}