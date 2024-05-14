import { useCallback, useState } from 'react';
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { ImageSVG } from '../../../components';
import { SettingList } from './SettingList';

export const ThirdScreenStep = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  });
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView>
        <View style={{ marginBottom: '10%' }}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Monobank-card.png',
            }}
            style={{
              height: 245,
              width: 410,
              justifyContent: 'center',
            }}
          />
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.10)',
            marginRight: '5%',
            marginLeft: '5%',
            flexDirection: 'row',
            borderRadius: 60,
            padding: 12,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.10)',
            marginBottom: '9%',
          }}
        >
          <View
            style={{
              alignItems: 'center',
              backgroundColor: '#1e1e1e',
              padding: 15,
              borderRadius: 100,
              maxWidth: 70,
              marginRight: 10,
            }}
          >
            <ImageSVG.ShieldCheckMarkSvg />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>
              Security settings
            </Text>
            <Text style={{ fontSize: 14, color: 'white', fontWeight: 'bold' }}>
              Installation of additional checks for card transactions
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <View>
        <SafeAreaView>
          <ScrollView
            style={{
              backgroundColor: '#1e1e1e',
              flexBasis: 350,
              borderTopRightRadius: 16,
              borderTopLeftRadius: 16,
            }}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <View style={{ padding: '3%' }}>
              <Text style={{ color: 'white', fontSize: 18, marginLeft: 10 }}>
                Settings
              </Text>
            </View>

            <SettingList />
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};
