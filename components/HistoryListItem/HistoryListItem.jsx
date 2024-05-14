import React from 'react';
import { Image, View, Text } from 'react-native';
export const HistoryListItem = ({ description, amount, avatar }) => {
  // const avatar = 'https://i.pravatar.cc/150?img=5  ';

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '3%',
        marginBottom: '3%',
      }}
    >
      <View
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <Image
          source={{
            uri: avatar,
          }}
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
          }}
        />
        <Text style={{ color: 'white', fontSize: 18, marginLeft: 10 }}>
          {description}
        </Text>
      </View>
      <View
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 20,
          }}
        >
          {(amount / 100).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};
