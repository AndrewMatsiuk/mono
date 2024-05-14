import React from 'react';
import { Text, View } from 'react-native';
export const SettingListItem = ({ image, description }) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '3%',
        marginBottom: '6%',
      }}
    >
      <View
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        {image}
        <Text style={{ color: 'white', fontSize: 19, marginLeft: 10 }}>
          {description}
        </Text>
      </View>
    </View>
  );
};
