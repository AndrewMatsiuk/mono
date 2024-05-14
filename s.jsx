import { useForm, useWatch } from 'react-hook-form';
import { ExpandingDot } from 'react-native-animated-pagination-dots';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  UserProfileInformationFieldsType,
  userProfileInformationSchema,
} from '@auth/utils/userProfileInformationValidation';
import { themeColors } from '@core/theme/tamaguiConfig';
import { Animated, FlatList } from 'react-native';
import { useCallback, useEffect, useRef, useState } from 'react';
import UserProfileInformation from './UserProfileInformation';
import BusinessInformationAddress from './BusinessInformationAddress';
import { View, XStack } from 'tamagui';
import { BreederSignupScreenProps } from '@auth/navigation/AuthNavigator.types';
import {
  BusinessAddressSchema,
  BusinessInformationAddressFieldsType,
  PersonalAddressSchema,
} from '@auth/utils/BusinessInformationAddressValidation';
import { SmallButton } from '@core/components/basic';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import BusinessMainInfoStep from './BusinessMainInformation/BusinessMainInfoStep';
import { SCREEN_WIDTH } from '@core/constants/dimensions';
import BottomButtons from '@auth/basic/BottomButtons/BottomButtons';

const BreederSignupScreen = ({ navigation }: BreederSignupScreenProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isButtonAddressDisabled, setIsButtonAddressDisabled] = useState(true);
  const [isCompanyAddressDifferent, setIsCompanyAddressDifferent] =
    useState(false);

  const { top: topInset } = useSafeAreaInsets();
  const { control: userInfoControl, handleSubmit: handleSubmitUserInfo } =
    useForm<UserProfileInformationFieldsType>({
      resolver: yupResolver(userProfileInformationSchema),
    });
  const { fullName, userName, phoneNumber, email, password } = useWatch({
    control: userInfoControl,
  });

  const navigateSignIn = () => {
    navigation.navigate('SignInPage');
  };

  const navigateToInitialScreen = () => {
    navigation.popToTop();
  };

  useEffect(() => {
    setIsButtonDisabled(
      !(
        fullName &&
        fullName.trim().length > 0 &&
        userName &&
        userName.trim().length > 0 &&
        phoneNumber &&
        phoneNumber.trim().length > 0 &&
        email &&
        email.trim().length > 0 &&
        password &&
        password.trim().length > 0
      )
    );
  }, [fullName, userName, phoneNumber, email, password]);

  const handleCompanyAddressChange = () => {
    setIsCompanyAddressDifferent((prevState) => !prevState);
  };
  const {
    control: businessInfoAddressControl,
    handleSubmit: handleSubmitBusinessInfoAddress,
  } = useForm<BusinessInformationAddressFieldsType>({
    resolver: yupResolver(
      !isCompanyAddressDifferent ? PersonalAddressSchema : BusinessAddressSchema
    ),
  });

  const {
    personalStreetAddress,
    personalAptSuite,
    personalState,
    personalCity,
    personalZipCode,
    companyAptSuite,
    companyCity,
    companyState,
    companyStreetAddress,
    companyZipCode,
  } = useWatch({
    control: businessInfoAddressControl,
  });
  useEffect(() => {
    setIsButtonAddressDisabled(
      !(isCompanyAddressDifferent
        ? personalStreetAddress &&
          personalStreetAddress.trim().length > 0 &&
          personalAptSuite &&
          personalAptSuite.trim().length > 0 &&
          personalState &&
          personalState.trim().length > 0 &&
          personalCity &&
          personalCity.trim().length > 0 &&
          personalZipCode &&
          personalZipCode.trim().length > 0 &&
          companyStreetAddress &&
          companyStreetAddress.trim().length > 0 &&
          companyAptSuite &&
          companyAptSuite.trim().length > 0 &&
          companyState &&
          companyState.trim().length > 0 &&
          companyCity &&
          companyCity.trim().length > 0 &&
          companyZipCode &&
          companyZipCode.trim().length > 0
        : personalStreetAddress &&
          personalStreetAddress.trim().length > 0 &&
          personalAptSuite &&
          personalAptSuite.trim().length > 0 &&
          personalState &&
          personalState.trim().length > 0 &&
          personalCity &&
          personalCity.trim().length > 0 &&
          personalZipCode &&
          personalZipCode.trim().length > 0)
    );
  }, [
    isCompanyAddressDifferent,
    personalStreetAddress,
    personalAptSuite,
    personalState,
    personalCity,
    personalZipCode,
    companyStreetAddress,
    companyAptSuite,
    companyState,
    companyCity,
    companyZipCode,
  ]);
  const onSubmit = () => {
    if (flatListRef && flatListRef.current) {
      //@ts-ignore
      flatListRef.current.scrollToIndex({
        index: activeIndex + 1,
        animated: true,
      });
      setActiveIndex(activeIndex + 1);
    }
  };

  const navigateBack = () => {
    if (activeIndex === 0) {
      navigation.goBack();
    } else if (flatListRef && flatListRef.current) {
      // @ts-ignore
      flatListRef.current.scrollToIndex({
        index: activeIndex - 1,
        animated: true,
      });
      setActiveIndex(activeIndex - 1);
    }
  };

  const onSubmitBusinessInfoAddress = (
    data: BusinessInformationAddressFieldsType
  ) => {
    // todo
    console.log(data);
    navigation.navigate('PrivacyPolicyScreen');
  };

  const STEPS = [
    {
      key: '1',
      component: (
        <>
          <UserProfileInformation control={userInfoControl} />
          <BottomButtons
            navigateSignIn={navigateSignIn}
            isButtonDisabled={isButtonDisabled}
            onPressSubmit={handleSubmitUserInfo(onSubmit)}
          />
        </>
      ),
    },
    {
      key: '2',
      component: (
        <>
          <BusinessMainInfoStep />
          <BottomButtons
            navigateSignIn={navigateSignIn}
            isButtonDisabled={isButtonDisabled}
            onPressSubmit={onSubmit}
          />
        </>
      ),
    },
    {
      key: '3',
      component: (
        <>
          <BusinessInformationAddress
            isCompanyAddressDifferent={isCompanyAddressDifferent}
            handleCompanyAddressChange={handleCompanyAddressChange}
            control={businessInfoAddressControl}
          />
          <BottomButtons
            navigateSignIn={navigateSignIn}
            isButtonDisabled={isButtonAddressDisabled}
            onPressSubmit={handleSubmitBusinessInfoAddress(
              onSubmitBusinessInfoAddress
            )}
          />
        </>
      ),
    },
  ];
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderStep = useCallback(({ item }: any) => {
    return (
      <View
        style={{
          width: SCREEN_WIDTH,
          justifyContent: 'flex-end',
        }}
      >
        {item.component}
      </View>
    );
  }, []);

  return (
    <SafeAreaView
      style={{ backgroundColor: themeColors.bgBlue, height: '100%' }}
      edges={['right', 'left', 'top']}
    >
      <XStack ai="center" w="100%" jc="space-between" px="$4">
        <SmallButton onPress={navigateBack} variant="back" white />
        <SmallButton onPress={navigateToInitialScreen} variant="close" white />
      </XStack>
      <ExpandingDot
        data={STEPS}
        expandingDotWidth={30}
        scrollX={scrollX}
        dotStyle={{
          width: 10,
          height: 10,
          backgroundColor: '#347af0',
          borderRadius: 5,
          margin: 12.5,
        }}
        containerStyle={{
          top: topInset,
        }}
        activeDotColor={'#fff'}
        inActiveDotOpacity={0.3}
      />
      <FlatList
        ref={flatListRef}
        data={STEPS}
        scrollEnabled={false}
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        pagingEnabled
        horizontal
        decelerationRate={'normal'}
        scrollEventThrottle={16}
        renderItem={renderStep}
        style={{ minHeight: '100%' }}
        contentContainerStyle={{ minHeight: '100%', zIndex: 10 }}
      />
    </SafeAreaView>
  );
};

export default BreederSignupScreen;

import { Image, View, XStack, YStack } from 'tamagui';
import { Control, Controller, useWatch } from 'react-hook-form';
import { UserProfileInformationFieldsType } from '@auth/utils/userProfileInformationValidation';
import { Input, InputButton, Text } from '@basic';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAvoidingView, Platform } from 'react-native';
import DatePicker from 'react-native-date-picker';
import CalendarIcon from '@auth/assets/calendar.svg';
import ClosedEye from '@auth/assets/eyeClosed.svg';
import PasswordInput from '@auth/basic/PasswordInput/PasswordInput';
import OpenedEye from '@auth/assets/eyeOpened.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface UserProfileInformationProps {
  control: Control<UserProfileInformationFieldsType>;
}

const UserProfileInformation = ({ control }: UserProfileInformationProps) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { bottom: bottomInset } = useSafeAreaInsets();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        top: -bottomInset / 2,
        // marginBottom: bottomInset,
      }}
    >
      <XStack w="100%" ml="25%">
        <Image top={25} source={require('@auth/assets/SignUpDog.png')} />
      </XStack>
      <KeyboardAvoidingView behavior="padding">
        <YStack
          position="relative"
          flexGrow={1}
          bg="$white"
          px="$4"
          borderTopLeftRadius="$4"
          borderTopRightRadius="$4"
          pt="$6"
          overflow="visible"
          style={{
            paddingBottom: Platform.select({ ios: 0, android: 50 }),
          }}
        >
          <Text fs={24} lh={31} fw="$semiBold" pb="$2">
            User Profile Information
          </Text>
          <Controller
            name="fullName"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Input
                label="Full Name"
                placeholder="Full Name"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                testID={'fullNameInput'}
                isError={!!error}
                errorMessage={error?.message}
                wrapperProps={{ flexGrow: 1 }}
              />
            )}
          />
          <XStack space="$4">
            <Controller
              name="userName"
              control={control}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <Input
                  label="Username"
                  placeholder="@username"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  testID={'userNameInput'}
                  isError={!!error}
                  errorMessage={error?.message}
                  wrapperProps={{ flex: 1 }}
                />
              )}
            />
            <Controller
              name="phoneNumber"
              control={control}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <Input
                  label="Phone Number"
                  placeholder="Phone Number"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  testID={'phoneNumberInput'}
                  isError={!!error}
                  errorMessage={error?.message}
                  wrapperProps={{ flex: 1 }}
                />
              )}
            />
          </XStack>
          <Controller
            name="date"
            control={control}
            render={({ field: { onChange, value } }) => (
              <View mb="$4">
                <InputButton
                  onPress={() => setOpen(true)}
                  value={value}
                  placeholder="Choose the date"
                  label="Date of birth"
                  icon={<CalendarIcon />}
                />
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  mode="date"
                  onConfirm={(date) => {
                    setOpen(false);
                    setDate(date);
                    onChange(date.toString());
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </View>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Input
                label="Email"
                placeholder="example@gmail.com"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                testID={'emailInput'}
                isError={!!error}
                errorMessage={error?.message}
              />
            )}
          />
          <PasswordInput
            label="Password"
            icon={isPasswordVisible ? <OpenedEye /> : <ClosedEye />}
            placeholder="Password"
            control={control}
            isPasswordVisible={isPasswordVisible}
            setIsPasswordVisible={setIsPasswordVisible}
          />
        </YStack>
      </KeyboardAvoidingView>
      <View
        position="absolute"
        bg="$white"
        w="200%"
        h={400}
        bottom={-400}
        zIndex={1}
      />
    </ScrollView>
  );
};

export default UserProfileInformation;
