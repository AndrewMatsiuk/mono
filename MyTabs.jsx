import { Feather, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import {
  AccumulationScreen,
  CardsScreen,
  CashBackScreen,
  CreditsScreen,
  MoreInformationScreen,
} from './screens';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#2f2f2f', borderTopWidth: 0 },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name='card'
        component={CardsScreen}
        options={() => ({
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'red' : 'black', fontSize: 12 }}>
              Card
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Feather
              name='credit-card'
              size={24}
              color={focused ? 'red' : 'black'}
              style={{ marginTop: 6 }}
            />
          ),
        })}
      />
      <Tab.Screen
        name='credit'
        component={CreditsScreen}
        options={() => ({
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'red' : 'black', fontSize: 12 }}>
              Credit
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Feather
              name='pie-chart'
              size={24}
              color={focused ? 'red' : 'black'}
              style={{ marginTop: 6 }}
            />
          ),
        })}
      />
      <Tab.Screen
        name='accumulation'
        component={AccumulationScreen}
        options={() => ({
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'red' : 'black', fontSize: 12 }}>
              Accumulation
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name='piggy-bank-outline'
              size={28}
              color={focused ? 'red' : 'black'}
              style={{ marginTop: 6 }}
            />
          ),
        })}
      />
      <Tab.Screen
        name='cashback'
        component={CashBackScreen}
        options={() => ({
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'red' : 'black', fontSize: 12 }}>
              Cashback
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Feather
              name='gift'
              size={24}
              color={focused ? 'red' : 'black'}
              style={{ marginTop: 6 }}
            />
          ),
        })}
      />
      <Tab.Screen
        name='more'
        component={MoreInformationScreen}
        options={() => ({
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'red' : 'black', fontSize: 12 }}>
              More
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Octicons
              name='apps'
              size={24}
              color={focused ? 'red' : 'black'}
              style={{ marginTop: 6 }}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
}
