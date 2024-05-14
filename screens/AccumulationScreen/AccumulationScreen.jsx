import { Text, View } from 'react-native';
import { dataApi } from '../../api/axios/data';
import { api } from '../../api/instance';
export const AccumulationScreen = () => {
  (async () => {
    try {
      const data = await dataApi.clientInfo();
      console.log(data);
    } catch (error) {
      console.log('error - ', error);
    }
  })();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Накопичення</Text>
    </View>
  );
};
