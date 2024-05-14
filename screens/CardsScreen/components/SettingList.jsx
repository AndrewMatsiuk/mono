import { View } from 'react-native';
import { SettingListItem } from '../../../components/SettingListItem/SettingListItem';

import { settingListMock } from '../../../mock/setting';
export const SettingList = () => {
  return (
    <View style={{ marginTop: '4%' }}>
      {settingListMock.map((item) => (
        <SettingListItem {...item} key={item.id} />
      ))}
    </View>
  );
};
