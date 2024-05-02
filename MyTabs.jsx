import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//https://api.monobank.ua/personal/client-info
function CardsScreen() {
  const [user, setUser] = useState(null); // Initialize state to null or an appropriate initial state

  useEffect(() => {
    fetch('https://api.monobank.ua/personal/client-info', {
      method: 'GET',
      headers: {
        'X-Token': 'uo9OeMZmEleRwhE_DH7MYC39XWfM2qdNSxpeTTX8b9xs', // Make sure to use the correct token
      },
    })
      .then((response) => response.json())
      .then((json) => {
        json.accounts.filter((accounts) => {
          if (accounts.balance > 100) {
            return setUser(accounts.balance);
          }
        }); // Update state with the fetched data
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [user]);

  return (
    <View
      style={[
        styles.container,
        { flexDirection: 'column' },
        { backgroundColor: '#60629f' },
      ]}
    >
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {user > 0 ? (
          <Text
            style={{
              fontSize: 24,
              color: 'red',
            }}
          >
            Balance: {user}
          </Text> // Ensure this is the correct index and data type
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
      <View
        style={{
          backgroundColor: '#1e1e1e',
          flex: 2,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Кредити</Text>
    </View>
  );
}

function AccumulationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Накопичення</Text>
    </View>
  );
}

function CashBackScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Кешбек</Text>
    </View>
  );
}

function MoreInformationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ще</Text>
    </View>
  );
}

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
        component={SettingsScreen}
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
