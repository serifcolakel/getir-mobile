import { View } from 'react-native';
import React from 'react';
import Row from '../../components/Row';
import {
  ChatIcon,
  FavoriteIcon,
  LanguageIcon,
  LocationManIcon,
  QuestionIcon,
  RightArrowIcon,
  UserIcon,
  VersionIcon,
} from '../../components/Icons';
import CustomText from '../../components/PartnerComponents/CustomText';
import { theme } from '../../utils/theme';
import { BottomNavigationProps } from '../../Layout/BottomTabs.navigator';
import { useNavigation } from '@react-navigation/native';

type ProfileDataProps = {
  id?: string;
  title?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  path?: string;
  borderBottom?: boolean;
  seperator: boolean;
};
const profileData: ProfileDataProps[] = [
  {
    id: '1',
    title: 'Giriş Yap',
    leftIcon: <UserIcon size={30} />,
    rightIcon: <RightArrowIcon size={14} />,
    path: 'Route',
    seperator: false,
  },
  {
    id: '2',
    title: 'Diğer İşlemler',
    seperator: true,
  },

  {
    id: '3',
    title: 'Canlı Destek',
    leftIcon: <ChatIcon size={30} />,
    rightIcon: <RightArrowIcon size={14} />,
    path: 'Route',
    seperator: false,
    borderBottom: true,
  },
  {
    id: '4',
    title: 'Adreslerim',
    leftIcon: <LocationManIcon size={30} />,
    rightIcon: <RightArrowIcon size={14} />,
    path: 'Addresses',
    seperator: false,
    borderBottom: true,
  },
  {
    id: '5',
    title: 'Favori Ürünlerim',
    leftIcon: <FavoriteIcon size={30} />,
    rightIcon: <RightArrowIcon size={14} />,
    path: 'Route',
    seperator: false,
    borderBottom: true,
  },
  {
    id: '6',
    title: 'Yardım',
    leftIcon: <QuestionIcon size={30} />,
    rightIcon: <RightArrowIcon size={14} />,
    path: 'Route',
    seperator: false,
  },
  {
    id: '7',
    title: 'Language - Dil',
    seperator: true,
  },
  {
    id: '8',
    title: 'Türkçe',
    leftIcon: <LanguageIcon size={30} />,
    rightIcon: <RightArrowIcon size={14} />,
    path: 'Route',
    seperator: false,
  },
  {
    id: '9',
    title: 'Version',
    seperator: true,
  },
  {
    id: '10',
    title: '2.13.12',
    leftIcon: <VersionIcon size={30} />,
    rightIcon: <RightArrowIcon size={14} />,
    path: 'Route',
    seperator: false,
  },
];
type Props = {
  item: ProfileDataProps;
  navigation: BottomNavigationProps;
};
const ProfileItem = ({ item, navigation }: Props) => {
  return (
    <View
      style={{
        backgroundColor: theme.colors.white,
      }}>
      {item.seperator ? (
        <View
          style={{
            height: 50,
            paddingLeft: 45,
            justifyContent: 'center',
            backgroundColor: theme.colors.gray2,
          }}>
          <CustomText
            label={item.title}
            style={{
              fontSize: 16,
              color: theme.colors.gray,
            }}
          />
        </View>
      ) : (
        <Row
          onPress={() => {
            item.path && navigation.push(item.path as any);
          }}
          alignItems="center"
          justifyContent="space-between"
          extraStyle={{
            height: 50,
            backgroundColor: theme.colors.white,
            borderBottomColor: theme.colors.gray,
            borderBottomWidth: item.borderBottom ? 0.5 : 0,
            paddingHorizontal: 20,
            marginHorizontal: 20,
          }}>
          {item.leftIcon}
          <CustomText
            label={item.title}
            style={{
              fontSize: 16,

              color: theme.colors.black,
            }}
          />
          {item.rightIcon}
        </Row>
      )}
    </View>
  );
};
type ProfileProps = {
  navigation: BottomNavigationProps;
};
const Profile = ({ navigation }: ProfileProps) => {
  return (
    <View>
      {profileData.map(item => (
        <ProfileItem item={item} key={item.id} navigation={navigation} />
      ))}
    </View>
  );
};

export default Profile;
