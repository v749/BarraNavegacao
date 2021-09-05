import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Home from './Home';
import Forro from './Forro';
import Sertanejo from './Sertanejo';
import Rock from './Rock';

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTinColor: '#88aaee' }}>
      <Tab.Screen
        name="Músicas"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Forro"
        component={Forro}
        options={{
          tabBarLabel: 'Forró',
          title: 'Forró',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="library-music" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Sertanejo"
        component={Sertanejo}
        options={{
          tabBarLabel: 'Sertanejo',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="guitar-acoustic"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Rock"
        component={Rock}
        options={{
          tabBarLabel: 'Rock',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="guitar-electric"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
