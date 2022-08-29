import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import { RootState, useAppSelector } from '../../store';
import { Loading } from '../../components/Loading';
import CustomText from '../../components/PartnerComponents/CustomText';
import { theme } from '../../utils/theme';
import { Categories, SubCategory } from '../../features/slices/categoriesSlice';
import axiosInstance from '../../hooks/useAxios';
import { ProductTypes } from '../../types/ProductTypes';
import ProductSkeleton from '../../components/ProductSkeleton';
import ProductItem from '../../components/BottomTabsComponents/ProductItem';
import { BottomNavigationProps } from '../../Layout/BottomTabs.navigator';
export const CategoryItem = React.memo(
  ({
    item,
    setSelectedCategory,
    selectedCategory,
    setSelectedSubCategory,
  }: {
    item: Categories;
    setSelectedCategory: (category: Categories) => void;
    selectedCategory: Categories | null;
    setSelectedSubCategory: (subCategory: SubCategory) => void;
  }) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedCategory(item);
        setSelectedSubCategory(item.subCategories[0]);
      }}
      activeOpacity={0.8}
      accessibilityIgnoresInvertColors={true}
      style={{
        flex: 1,
        paddingVertical: 20,
        backgroundColor: theme.colors.getirPrimary500,
        width: '100%',
        borderBottomWidth: 4,
        borderBottomColor:
          item.id === selectedCategory?.id
            ? theme.colors.getirSecondary500
            : theme.colors.getirPrimary500,
      }}>
      <CustomText
        style={{
          marginHorizontal: 15,

          color: theme.colors.white,
        }}
        label={item.name}
      />
    </TouchableOpacity>
  ),
);
type Props = {
  navigation: BottomNavigationProps;
  route: any;
};
const Product = ({ navigation, route }: Props) => {
  const { categories, loading } = useAppSelector(
    (state: RootState) => state.categories,
  );
  const [initialProduct, setInitialProduct] = React.useState<ProductTypes[]>(
    [],
  );
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  if (loading || !initialProduct) return <Loading />;
  const [selectedCategory, setSelectedCategory] =
    React.useState<Categories | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] =
    React.useState<SubCategory | null>(null);
  useEffect(() => {
    if (categories) {
      setSelectedCategory(categories[0]);
      setSelectedSubCategory(categories[0].subCategories[0]);
    }
  }, []);
  async function getCategories() {
    if (selectedSubCategory) {
      const res = await axiosInstance.get(selectedSubCategory.path);
      setInitialProduct(res.data);
      setIsLoaded(false);
    }
  }
  useEffect(() => {
    setIsLoaded(true);
    getCategories();
  }, [selectedSubCategory, selectedCategory]);

  return (
    <View style={{}}>
      <FlatList
        data={categories}
        horizontal={true}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <>
              {item && (
                <CategoryItem
                  item={item}
                  setSelectedCategory={setSelectedCategory}
                  selectedCategory={selectedCategory}
                  setSelectedSubCategory={setSelectedSubCategory}
                />
              )}
            </>
          );
        }}
      />

      <FlatList
        data={selectedCategory?.subCategories}
        horizontal={true}
        style={{
          padding: 10,

          backgroundColor: theme.colors.white,
        }}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => setSelectedSubCategory(item)}
              activeOpacity={0.8}
              accessibilityIgnoresInvertColors={true}
              style={{
                flex: 1,
                paddingVertical: 10,
                //backgroundColor: theme.colors.getirPrimary500,
                width: '100%',
                marginHorizontal: 10,
                borderWidth: 0.5,
                borderColor:
                  item.id === selectedSubCategory?.id
                    ? theme.colors.getirPrimary500
                    : theme.colors.gray3,
                backgroundColor:
                  item.id === selectedSubCategory?.id
                    ? theme.colors.getirPrimary500
                    : theme.colors.white,
                borderRadius: 10,
              }}>
              <CustomText
                style={{
                  marginHorizontal: 10,
                  color:
                    item.id === selectedSubCategory?.id
                      ? theme.colors.white
                      : theme.colors.getirPrimary500,
                }}
                label={item.name}
              />
            </TouchableOpacity>
          );
        }}
      />
      {!isLoaded ? (
        <ProductItem initialProduct={initialProduct} navigation={navigation} />
      ) : (
        <ProductSkeleton />
      )}
    </View>
  );
};

export default Product;
