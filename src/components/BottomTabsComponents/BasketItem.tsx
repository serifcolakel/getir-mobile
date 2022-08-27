import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../../store';
import { Product } from '../../types/ProductTypes';
import CustomText from '../PartnerComponents/CustomText';
import { theme } from '../../utils/theme';
import { MinusIcon, PlusIcon, TrashIcon } from '../Icons';
import { addToBasket, deleteToBasket } from '../../features/slices/basketSlice';

type Props = {
  item: Product;
};

const BasketItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state: RootState) => state.basket);

  let isAdded = false;
  let count = 0;

  data.forEach(basketItem => {
    if (basketItem.id === item.id) {
      isAdded = true;
      count = basketItem.count;
    }
  });
  return (
    <View
      style={{
        flex: 1,
        margin: 6,
      }}>
      {isAdded && count > 0 ? (
        <View
          style={{
            position: 'absolute',
            top: -4,
            right: -4,
            flexDirection: 'column',
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
              borderTopLeftRadius: 8,
              backgroundColor: theme.colors.white,
            }}
          />
          <CustomText
            style={{
              zIndex: 1,
              backgroundColor: theme.colors.getirPrimary400,
              width: '90%',
              paddingVertical: 4,
              paddingHorizontal: 4,
              textAlign: 'center',
              color: theme.colors.white,
            }}
            label={isAdded ? count.toString() : item.count.toString()}
          />
          {count > 1 ? (
            <MinusIcon
              onPress={() => {
                dispatch(deleteToBasket(item));
              }}
              size={14}
              style={{
                padding: 8,
                elevation: 3,
                zIndex: 1,
                borderBottomRightRadius: 8,
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
                borderBottomRightRadius: 8,
                borderBottomLeftRadius: 8,
                backgroundColor: theme.colors.white,
              }}
            />
          )}
        </View>
      ) : (
        <PlusIcon
          onPress={() => {
            dispatch(addToBasket(item));
          }}
          size={14}
          style={{
            position: 'absolute',
            top: -4,
            right: -4,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

            padding: 8,
            zIndex: 1,
            elevation: 3,
            borderRadius: 8,
            backgroundColor: theme.colors.white,
          }}
        />
      )}
      <Image
        resizeMode="contain"
        style={{
          width: '100%',
          height: 100,
          padding: 10,
          borderWidth: 0.5,
          borderColor: theme.colors.gray3,
          borderRadius: 10,
        }}
        source={{ uri: item.picURLs[0], cache: 'force-cache' }}
      />
      <CustomText
        style={{
          paddingTop: 5,
          fontSize: 14,
          fontFamily: theme.fonts.bold,
          maxHeight: 80,
          color: theme.colors.getirPrimary500,
        }}
        label={item.priceText}
      />
      <CustomText
        style={{
          paddingTop: 5,
          fontSize: 12,
          maxHeight: 80,
          color: theme.colors.black,
        }}
        label={item.name}
      />
      <CustomText
        style={{
          paddingTop: 5,
          fontSize: 12,
          maxHeight: 80,
          color: theme.colors.black,
        }}
        label={item.shortDescription}
      />
    </View>
  );
};

export default BasketItem;

const styles = StyleSheet.create({});
