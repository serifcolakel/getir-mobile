import { Image, Pressable, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../../store';
import { Product } from '../../types/ProductTypes';
import CustomText from '../PartnerComponents/CustomText';
import { theme } from '../../utils/theme';
import {
  FavoriteIcon,
  LoadingIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from '../Icons';
import {
  addToBasket,
  deleteToBasket,
  handleFavorite,
} from '../../features/slices/basketSlice';
import { selectProduct } from '../../features/slices/productSlice';
import { BottomNavigationProps } from '../../Layout/BottomTabs.navigator';

type Props = {
  item: Product;
  navigation: BottomNavigationProps;
};

const BasketItem = ({ item, navigation }: Props) => {
  const dispatch = useAppDispatch();
  const { data, favorites } = useAppSelector(
    (state: RootState) => state.basket,
  );
  const [loading, setLoading] = React.useState(false);
  let isAdded = false;
  let count = 0;
  let isFavorite = false;
  favorites.find(favorite => favorite.id === item.id && (isFavorite = true));
  data.forEach(basketItem => {
    if (basketItem.id === item.id) {
      isAdded = true;
      count = basketItem.count;
    }
  });
  function handleAddToBasket() {
    setLoading(true);
    dispatch(addToBasket(item));
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }
  function handleDeleteBasket() {
    setLoading(true);
    dispatch(deleteToBasket(item));
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }
  return (
    <Pressable
      onPress={() => {
        dispatch(selectProduct(item));
        navigation.navigate('ProductDetails');
      }}
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
          {!loading ? (
            <PlusIcon
              onPress={() => {
                handleAddToBasket();
              }}
              style={{
                padding: 8,
                zIndex: 1,
                elevation: 3,
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,

                backgroundColor: theme.colors.white,
              }}
              size={14}
            />
          ) : (
            <View
              style={{
                padding: 8,
                zIndex: 1,
                elevation: 3,
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
                backgroundColor: theme.colors.white,
              }}>
              <LoadingIcon
                size={14}
                style={{
                  padding: 8,
                  zIndex: 1,
                  elevation: 3,
                  borderTopRightRadius: 8,
                  borderTopLeftRadius: 8,
                  width: 14,
                  height: 14,
                  backgroundColor: theme.colors.white,
                }}
              />
            </View>
          )}
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
          {loading ? (
            <View
              style={{
                padding: 8,
                zIndex: 1,
                elevation: 3,
                borderBottomRightRadius: 8,
                borderBottomLeftRadius: 8,
                backgroundColor: theme.colors.white,
              }}>
              <LoadingIcon
                size={14}
                style={{
                  padding: 8,
                  zIndex: 1,
                  elevation: 3,
                  borderBottomRightRadius: 8,
                  borderBottomLeftRadius: 8,
                  width: 14,
                  height: 14,
                  backgroundColor: theme.colors.white,
                }}
              />
            </View>
          ) : (
            <>
              {count > 1 ? (
                <MinusIcon
                  onPress={() => {
                    handleDeleteBasket();
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
                    handleDeleteBasket();
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
            </>
          )}
        </View>
      ) : loading ? (
        <View
          style={{
            padding: 8,
            zIndex: 1,
            elevation: 3,
            borderRadius: 8,
            position: 'absolute',
            top: -4,
            right: -4,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.white,
          }}>
          <LoadingIcon
            onPress={() => {
              handleAddToBasket();
            }}
            size={14}
            style={{
              padding: 8,

              zIndex: 1,
              elevation: 3,
              borderRadius: 8,
              width: 14,
              height: 14,
              backgroundColor: theme.colors.white,
            }}
          />
        </View>
      ) : (
        <PlusIcon
          onPress={() => {
            handleAddToBasket();
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
      {isFavorite && (
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => {
            dispatch(handleFavorite(item));
          }}
          style={{
            position: 'absolute',
            top: -4,
            left: -4,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
            zIndex: 1,
            elevation: 3,
            borderRadius: 8,
            backgroundColor: theme.colors.white,
          }}>
          <FavoriteIcon
            onPress={() => {
              dispatch(handleFavorite(item));
            }}
            size={20}
            color={theme.colors.getirSecondary500}
          />
        </TouchableOpacity>
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
    </Pressable>
  );
};

export default BasketItem;
