import { useCallback, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import {
  FirstScreenStep,
  SecondScreenStep,
  ThirdScreenStep,
} from './components';

//https://api.monobank.ua/personal/client-info
export const CardsScreen = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  const PAGINATION_DOT_SIZE = 8;
  const PAGINATION_DOT_UNSELECTED_COLOR = 'rgba(242, 244, 248, 0.5)';

  const PAGINATION_DOT = {
    borderRadius: PAGINATION_DOT_SIZE,
    width: PAGINATION_DOT_SIZE,
    height: PAGINATION_DOT_SIZE,
    margin: 5,
    backgroundColor: PAGINATION_DOT_UNSELECTED_COLOR,
  };

  const PAGINATION_DOT_SELECTED = {
    backgroundColor: 'white',
  };

  const PAGINATION = {
    bottom: '60%',
    left: 0,
    right: 0,
    width,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
  };

  const STEPS = [
    {
      key: '1',
      component: <FirstScreenStep />,
    },
    {
      key: '2',
      component: <SecondScreenStep navigation={navigation} />,
    },
    {
      key: '3',
      component: <ThirdScreenStep />,
    },
  ];
  const width = Dimensions.get('screen').width;
  const renderStep = useCallback(
    ({ item }) => {
      return <View style={{ width }}>{item.component}</View>;
    },
    [width]
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const onScroll = (event) => {
    const totalWidth = event.nativeEvent.layoutMeasurement.width;
    const xPos = event.nativeEvent.contentOffset.x;
    const current = Math.floor(xPos / totalWidth);
    setCurrentIndex(current);
  };

  const Pagination = (
    <View style={PAGINATION}>
      {STEPS.map((_, index) => (
        <View
          key={index}
          style={[
            PAGINATION_DOT,
            currentIndex === index ? PAGINATION_DOT_SELECTED : {},
          ]}
        />
      ))}
    </View>
  );

  const ROOT = {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#60629f',
  };
  return (
    <View
      style={[
        styles.container,
        { flexDirection: 'column' },
        { backgroundColor: '#60629f' },
      ]}
    >
      <View style={ROOT}>
        <FlatList
          data={STEPS}
          keyExtractor={(item) => item.key}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          renderItem={renderStep}
          decelerationRate={'normal'}
          scrollEventThrottle={16}
          onScroll={onScroll}
        />
        {currentIndex != 0 ? Pagination : <></>}
      </View>
    </View>
  );
};
