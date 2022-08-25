import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { ProductTypes } from '../../types/ProductTypes';
import CustomText from '../../components/PartnerComponents/CustomText';
import { PlusIcon } from '../../components/Icons';
import { theme } from '../../utils/theme';

type Props = {
  initialProduct: ProductTypes[];
};

const ProductItem = ({ initialProduct }: Props) => {
  return (
    <View>
      {initialProduct.map(item => (
        <View key={item.id}>
          <CustomText
            label={`${item.name} - (${item.products.length})`}
            style={{
              paddingLeft: 20,
              paddingVertical: 10,
            }}
          />
          <View
            style={{
              paddingBottom: 300,
              marginHorizontal: 20,

              height: Dimensions.get('window').height,
            }}>
            <FlatList
              data={item.products}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              numColumns={3}
              horizontal={false}
              renderItem={({ item }) => (
                <View
                  style={{
                    flex: 1,
                    margin: 6,
                  }}>
                  <PlusIcon
                    onPress={() => {}}
                    size={14}
                    style={{
                      position: 'absolute',
                      top: -4,
                      right: -4,
                      padding: 6,
                      zIndex: 1,
                      borderRadius: 8,
                      backgroundColor: theme.colors.white,
                      elevation: 3,
                    }}
                  />
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
              )}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
