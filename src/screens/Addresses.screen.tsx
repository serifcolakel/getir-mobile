import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import CustomText from '../components/PartnerComponents/CustomText';
import Row from '../components/Row';
import { PlusIcon } from '../components/Icons';
import { AdressesLink } from '../contants';
import { NavigationProps } from '../Layout/StackNavigator';

type Props = {
  navigation: NavigationProps;
};

const Addresses = ({ navigation }: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <CustomText
        style={{
          paddingLeft: 20,
          paddingVertical: 20,
        }}
        label="Adres Ekle"
      />
      <View
        style={{
          borderBottomColor: '#e6e6e6',
          borderBottomWidth: 1,
          paddingVertical: 20,
          borderTopColor: '#e6e6e6',
          borderTopWidth: 1,
        }}>
        {AdressesLink.map((item, idx) => (
          <Row
            onPress={() => {
              navigation.navigate('NewAddresses', {
                type: item.type,
              });
            }}
            key={`${item.id}-${idx}`}
            extraStyle={{
              paddingHorizontal: 20,
              marginHorizontal: 10,
              paddingVertical: 10,
              borderBottomColor: '#e6e6e6',
              backgroundColor: '#fff',
              borderBottomWidth: 1,
            }}
            alignItems="center"
            justifyContent="space-between">
            <Row alignItems="center">
              <Image
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 20,
                }}
                source={item.image}
              />
              <CustomText label={item.label} />
            </Row>
            <PlusIcon size={20} />
          </Row>
        ))}
      </View>
    </View>
  );
};

export default Addresses;

const styles = StyleSheet.create({});
/**
 *    <Row
          onPress={() => {
            console.log('Pressed....');
          }}
          extraStyle={{
            paddingHorizontal: 20,
            margin: 5,
            borderBottomColor: '#e6e6e6',
            borderBottomWidth: 1,
          }}
          alignItems="center"
          justifyContent="space-between">
          <Row alignItems="center">
            <Image
              resizeMode="contain"
              style={{
                width: 60,
                height: 60,
                marginRight: 20,
              }}
              source={getImage('routeSlider0')}
            />
            <CustomText label="Ev Adresi Ekle" />
          </Row>
          <RightArrowIcon size={20} />
        </Row>
        <Row
          onPress={() => {
            console.log('Pressed....');
          }}
          extraStyle={{
            paddingHorizontal: 20,
            margin: 5,
          }}
          alignItems="center"
          justifyContent="space-between">
          <Row alignItems="center">
            <Image
              resizeMode="contain"
              style={{
                width: 60,
                height: 60,
                marginRight: 20,
              }}
              source={getImage('routeSlider0')}
            />
            <CustomText label="Ev Adresi Ekle" />
          </Row>
          <RightArrowIcon size={20} />
        </Row>
 */
