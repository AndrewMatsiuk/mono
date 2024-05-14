import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { MyTabs } from './components/BottomTabs/MyTabs';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello world Pidor1111</Text>
    //   <StatusBar style='auto' />
    //   <Image
    //     source={{ uri: 'https://picsum.photos/200/300' }}
    //     style={{ width: 300, height: 300 }}
    //   />
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
