import {
  Dimensions,
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import { ImageSVG } from '../../../components';
import { HistoryList } from './HistoryList';
import { useCallback, useEffect, useState } from 'react';

export const SecondScreenStep = () => {
  const [user, setUser] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  });

  useEffect(() => {
    fetch('https://api.monobank.ua/personal/client-info', {
      method: 'GET',
      headers: {
        'X-Token': 'uDJ2D2sDb5BNUW2JRuamQKYPXEgk74zD4LfCONp0qljI', // Your api key
      },
    })
      .then((response) => response.json())
      .then((json) => {
        json.accounts.filter((accounts) => {
          if (accounts.balance > 100) {
            return setUser(accounts);
          }
        });
      })
      .catch(
        (err) => {
          console.log(err.message);
        },
        [user]
      );
  }, []);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '5%',
          }}
        >
          <View
            style={{
              alignItems: 'center',
              backgroundColor: 'black',
              padding: 12,
              borderRadius: 100,
              maxWidth: 45,
              opacity: 0.1,
            }}
          >
            <ImageSVG.TwoCreditCardsSVG />
          </View>
        </View>
        {user != null ? (
          <View style={{ alignItems: 'center', paddingRight: 70 }}>
            <View>
              <Text
                style={{
                  fontSize: 46,
                  color: 'white',
                }}
              >
                {user.balance / 100} ₴
              </Text>
              <Text style={{ color: 'white', fontSize: 18, margin: 2 }}>
                Own funds {(user.balance - user.creditLimit) / 100} ₴
              </Text>
              <Text style={{ color: 'white', fontSize: 18 }}>
                Credit funds {user.creditLimit / 100} ₴
              </Text>
            </View>
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </SafeAreaView>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          marginTop: 35,
          justifyContent: 'space-between',
          padding: 30,
          top: '15%',
        }}
      >
        <View style={{ maxWidth: 70 }}>
          <View
            style={{
              backgroundColor: '#1e1e1e',
              padding: 15,
              borderRadius: 100,
            }}
          >
            <ImageSVG.CreditCardPlusOutlineSvg />
          </View>

          <Text style={{ color: 'white', textAlign: 'center', paddingTop: 4 }}>
            Top up your card
          </Text>
        </View>
        <View style={{ maxWidth: 70 }}>
          <View
            style={{
              backgroundColor: '#1e1e1e',
              padding: 15,
              borderRadius: 100,
            }}
          >
            <ImageSVG.CreditCardFastOutlineSvg />
          </View>
          <Text style={{ color: 'white', textAlign: 'center', paddingTop: 4 }}>
            Transfer to the card
          </Text>
        </View>
        <View style={{ maxWidth: 70 }}>
          <View
            style={{
              backgroundColor: '#1e1e1e',
              padding: 15,
              borderRadius: 100,
            }}
          >
            <ImageSVG.WalletPlusOutlineSvg />
          </View>
          <Text style={{ color: 'white', textAlign: 'center', paddingTop: 4 }}>
            Other payments
          </Text>
        </View>
      </View>
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
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: '4%',
                marginRight: '4%',
                marginTop: '4%',
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#2f2f2f',
                  borderRadius: 100,
                  maxWidth: 45,
                  padding: 8,
                }}
              >
                <ImageSVG.MessageSquareSearchSvg />
              </View>
              <View>
                <Text style={{ color: 'white', fontSize: 18, marginLeft: 10 }}>
                  Yesterday
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#2f2f2f',
                  borderRadius: 100,
                  maxWidth: 45,
                  padding: 12,
                }}
              >
                <ImageSVG.MagnifyingGlassSvg />
              </View>
            </View>
            <HistoryList />
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};
