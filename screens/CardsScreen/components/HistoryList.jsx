import { View } from 'react-native';
import { HistoryListItem } from '../../../components';
import { historyListMock } from '../../../mock/history';
import { useEffect, useState } from 'react';
export const HistoryList = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    dateNow = Date.now();
    dateThirtyBefore = dateNow - 30 * 86400000;
    fetch(
      `https://api.monobank.ua/personal/statement/${0}/${dateThirtyBefore}`,
      {
        method: 'GET',
        headers: {
          'X-Token': 'APIIKey', // Your api key
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        return setHistory(json);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <View style={{ marginTop: '4%' }}>
      {historyListMock.map((item) => (
        <HistoryListItem {...item} key={item.id} />
      ))}
    </View>
  );
};
