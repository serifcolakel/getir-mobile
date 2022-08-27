import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../../store';
import { theme } from '../../utils/theme';
import CustomText from '../../components/PartnerComponents/CustomText';
import { MinusIcon, PlusIcon, TrashIcon } from '../../components/Icons';
import { addToBasket, deleteToBasket } from '../../features/slices/basketSlice';
import { BottomNavigationProps } from '../../Layout/BottomTabs.navigator';

type Props = {
  navigation: BottomNavigationProps;
};

const Basket = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const { data, totalAmount } = useAppSelector(
    (state: RootState) => state.basket,
  );

  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
        backgroundColor: theme.colors.white,
      }}>
      <ScrollView
        style={{
          padding: 20,
        }}>
        <View
          style={{
            marginBottom: 100,
          }}>
          {data.map((item, idx) => (
            <View
              key={idx}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.gray2,
                paddingVertical: 20,

                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                resizeMode="contain"
                style={{
                  width: '30%',
                  height: 100,
                  padding: 10,
                  borderWidth: 0.5,
                  borderColor: theme.colors.gray3,
                  borderRadius: 10,
                }}
                source={{ uri: item.picURLs[0], cache: 'force-cache' }}
              />
              <View
                style={{
                  width: '30%',
                }}>
                <CustomText
                  style={{
                    fontSize: 12,
                    color: theme.colors.black,
                  }}
                  label={item.name}
                />
                <CustomText
                  style={{
                    fontSize: 12,
                    color: theme.colors.gray,
                  }}
                  label={item.shortDescription}
                />
                <CustomText
                  style={{
                    fontSize: 14,
                    paddingTop: 10,
                    color: theme.colors.getirPrimary500,
                  }}
                  label={item.priceText}
                />
              </View>
              <View
                style={{
                  width: '30%',
                  flexDirection: 'row-reverse',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <PlusIcon
                  onPress={() => {
                    dispatch(addToBasket(item));
                  }}
                  size={14}
                  style={{
                    padding: 8,
                    zIndex: 1,
                    elevation: 3,
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                    backgroundColor: theme.colors.white,
                  }}
                />
                <CustomText
                  style={{
                    zIndex: 1,
                    backgroundColor: theme.colors.getirPrimary400,
                    width: '30%',
                    paddingVertical: 4,
                    paddingHorizontal: 4,
                    textAlign: 'center',
                    color: theme.colors.white,
                  }}
                  label={item.count.toString()}
                />
                {item.count > 1 ? (
                  <MinusIcon
                    onPress={() => {
                      dispatch(deleteToBasket(item));
                    }}
                    size={14}
                    style={{
                      padding: 8,
                      elevation: 3,
                      zIndex: 1,
                      borderTopLeftRadius: 8,
                      borderBottomLeftRadius: 8,

                      backgroundColor: theme.colors.white,
                    }}
                  />
                ) : (
                  <TrashIcon
                    onPress={() => {
                      dispatch(deleteToBasket(item));
                    }}
                    size={14}
                    style={{
                      padding: 8,
                      elevation: 3,
                      zIndex: 1,
                      borderTopLeftRadius: 8,
                      borderBottomLeftRadius: 8,
                      backgroundColor: theme.colors.white,
                    }}
                  />
                )}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: 80,
          paddingVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          borderTopWidth: 0.5,
          borderBottomColor: theme.colors.gray2,
          borderBottomWidth: 0.5,
          borderTopColor: theme.colors.gray,
          backgroundColor: theme.colors.white,
        }}>
        <Pressable
          onPress={() => {
            navigation.navigate('Product');
          }}>
          <CustomText
            style={{
              paddingVertical: 10,
              paddingHorizontal: 70,
              color: theme.colors.white,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              backgroundColor: theme.colors.getirPrimary400,
              textAlign: 'left',
              fontSize: 20,
            }}
            label="Devam"
          />
        </Pressable>

        <CustomText
          style={{
            borderWidth: 0.1,
            borderTopRightRadius: 2,
            borderBottomRightRadius: 2,
            paddingVertical: 10,
            paddingHorizontal: 20,
            fontFamily: theme.fonts.bold,
            color: theme.colors.getirPrimary500,
            fontSize: 20,
          }}
          label={`₺ ${Math.round(totalAmount).toFixed(2)}`}
        />
      </View>
    </View>
  );
};

export default Basket;

const styles = StyleSheet.create({});
