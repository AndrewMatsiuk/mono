import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './components/BottomTabs/MyTabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './screens/LoginScreen';
import { CardsScreen, SecondScreenStep } from './screens';
import { TransactionOnCard } from './screens/TransactionOnCard';

const Stack = createNativeStackNavigator();

export const SecondScreenStepStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} mode='modal'>
      <Stack.Screen name='SecondScreenStep' component={SecondScreenStep} />
      <Stack.Screen name='TransactionOnCard' component={TransactionOnCard} />
    </Stack.Navigator>
  );
};

function RootStack() {
  return (
    <Stack.Navigator mode='modal'>
      <Stack.Screen
        name='MyTabs'
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='TransactionOnCard'
        component={TransactionOnCard}
        options={{
          headerShown: true,
          title: 'Transaction on Card',
          headerBackTitleVisible: false,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2f2f2f',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
