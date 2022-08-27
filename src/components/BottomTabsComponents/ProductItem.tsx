import { Dimensions, FlatList, View } from 'react-native';
import React from 'react';
import { ProductTypes } from '../../types/ProductTypes';
import CustomText from '../../components/PartnerComponents/CustomText';
import BasketItem from '../../components/BottomTabsComponents/BasketItem';

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
              renderItem={({ item }) => <BasketItem item={item} />}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default ProductItem;
