import { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

export const TransactionOnCard = () => {
  const sheetRef = useRef < BottomSheet > null;
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ['40%'];

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
      }}
    >
      <Text>Hi there</Text>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <BottomSheetView>
          <Text>Hi Andrii</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};
