import { Feather, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import { ImageSVG } from '..';
import { SecondScreenStepStack } from '../../App';
import {
  AccumulationScreen,
  CardsScreen,
  CashBackScreen,
  CreditsScreen,
  MoreInformationScreen,
  SecondScreenStep,
} from '../../screens';

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
            <Text
              style={{
                color: focused ? 'red' : 'black',
                fontSize: 12,
              }}
            >
              Card
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={{ marginTop: 5 }}>
              <ImageSVG.CreditCardSvg color={focused ? 'red' : 'black'} />
            </View>
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
            <View style={{ marginTop: 6 }}>
              <ImageSVG.PieChartSvg color={focused ? 'red' : 'black'} />
            </View>
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
            <View style={{ marginTop: 6 }}>
              <ImageSVG.PiggyBankOutlineSvg color={focused ? 'red' : 'black'} />
            </View>
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
            <View style={{ marginTop: 6 }}>
              <ImageSVG.GiftSvg color={focused ? 'red' : 'black'} />
            </View>
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
            <View style={{ marginTop: 6 }}>
              <ImageSVG.AppsSvg color={focused ? 'red' : 'black'} />
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
}
