import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//https://api.monobank.ua/personal/client-info
export const CardsScreen = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://api.monobank.ua/personal/client-info', {
      method: 'GET',
      headers: {
        'X-Token': '', // Your api key
      },
    })
      .then((response) => response.json())
      .then((json) => {
        json.accounts.filter((accounts) => {
          if (accounts.balance > 100) {
            const normBalance = accounts.balance - accounts.creditLimit;
            return setUser(normBalance / 100);
          }
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
    // - - - - - - - -
    // fetch(`https://api.monobank.ua/personal/statement/${0}/${1713560455}`, {
    //   method: 'GET',
    //   headers: {
    //     'X-Token': '', // Your api key
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
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
          </Text>
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
};
