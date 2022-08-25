import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Skeleton from './PartnerComponents/Skeleton';

type Props = {
  label?: string;
};

const ProductSkeleton: React.FC<Props> = ({ label }) => {
  return (
    <View
      style={{
        height: Dimensions.get('window').height,
      }}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={item => item.toString()}
        numColumns={3}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Skeleton height={120} width={100} variant="rect" rounded={10} />
              <Skeleton height={10} width={'100%'} variant="circle" />
              <Skeleton height={10} width={'100%'} variant="circle" />
              <Skeleton height={10} width={'100%'} variant="circle" />
            </View>
          );
        }}
      />
    </View>
  );
};

export default ProductSkeleton;

const styles = StyleSheet.create({});
