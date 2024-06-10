import { View, TouchableWithoutFeedback } from 'react-native';

export const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log('HomeScreen');
          navigation.navigate('MyTabs');
        }}
      >
        <View
          style={{ backgroundColor: 'black', height: 150, width: 150 }}
        ></View>
      </TouchableWithoutFeedback>
    </View>
  );
};
