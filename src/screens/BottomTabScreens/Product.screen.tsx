import {
  Dimensions,
  FlatList,
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
import Skeleton from '../../components/PartnerComponents/Skeleton';
import { ScrollView } from 'react-native-gesture-handler';
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
const Product = () => {
  const { data, loading } = useAppSelector(
    (state: RootState) => state.categories,
  );
  const [d, setD] = React.useState<any>([]);
  const [loading1, setLoading1] = React.useState<boolean>(false);
  if (loading || !d) return <Loading />;
  const [selectedCategory, setSelectedCategory] =
    React.useState<Categories | null>(null);
  const [findData, setFindData] = React.useState<any>([]);
  const [selectedSubCategory, setSelectedSubCategory] =
    React.useState<SubCategory | null>(data && data[0].subCategories[0]);
  useEffect(() => {
    if (data) {
      setSelectedCategory(data[0]);
      setSelectedSubCategory(data[0].subCategories[0]);
    }
  }, []);

  async function getCategories() {
    if (selectedSubCategory) {
      const res = await axiosInstance.get(selectedSubCategory.path);

      await setD(res.data);

      setLoading1(false);
    }
  }
  useEffect(() => {
    setLoading1(true);
    getCategories();
  }, [selectedSubCategory, selectedCategory]);

  return (
    <View style={{}}>
      <FlatList
        data={data}
        horizontal={true}
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
      {!loading1 ? (
        <View
          style={{
            paddingHorizontal: 10,
          }}>
          {d.map(item => (
            <>
              <CustomText
                label={`${item.name} - (${item.products.length})`}
                style={{
                  borderWidth: 1,
                  paddingVertical: 10,
                  textAlign: 'center',
                }}
              />
              <View
                style={{
                  paddingBottom: 310,
                  height: Dimensions.get('window').height,
                }}>
                <FlatList
                  data={item.products}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  numColumns={2}
                  horizontal={false}
                  renderItem={({ item }) => (
                    <View
                      style={{
                        flex: 1,
                      }}>
                      <CustomText
                        style={{
                          padding: 10,
                        }}
                        label={item.name}
                      />
                    </View>
                  )}
                />
              </View>
            </>
          ))}
        </View>
      ) : (
        <View>
          <Skeleton height={200} width={200} variant="rect" />
          <Skeleton height={10} width={200} variant="circle" />
        </View>
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
