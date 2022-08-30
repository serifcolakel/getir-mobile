import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { getImage } from '../../utils/utils';
import { RootState, useAppDispatch, useAppSelector } from '../../store';
import { getSearchedProduct } from '../../features/slices/productSlice';
import { Loading } from '../../components/Loading';
import Input from '../../components/PartnerComponents/Input';
import { CloseIcon, LoadingIcon, SearchIcon } from '../../components/Icons';
import Row from '../../components/Row';
import Col from '../../components/Col';
import BasketItem from '../../components/BottomTabsComponents/BasketItem';
import { BottomNavigationProps } from '../../Layout/BottomTabs.navigator';
import ListEmptyComponent from '../../components/ListEmptyComponent';
import { theme } from '../../utils/theme';

type Props = {
  navigation: BottomNavigationProps;
};

const Search = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const { result, isResultEnd } = useAppSelector(
    (state: RootState) => state.allProducts,
  );
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [max, setMax] = React.useState('0');
  const [min, setMin] = React.useState('0');
  const getSearch = () => {
    dispatch(
      getSearchedProduct({
        search,
        max: max === '0' || '' ? undefined : max,
        min: min === '' ? undefined : min,
      }),
    );
  };
  useEffect(() => {
    if (search.length > 1) {
      setLoading(true);
    }
  }, [search]);
  useEffect(() => {
    if (result.length > 0) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [result]);
  console.log('values', search, max, min);
  return (
    <>
      {isResultEnd ? (
        <Loading />
      ) : (
        <ImageBackground
          style={{
            flex: 1,
          }}
          resizeMode="stretch"
          source={getImage('doodle')}
          fadeDuration={200}>
          <View
            style={{
              paddingHorizontal: 20,
            }}>
            <Input
              onChangeText={text => {
                setSearch(text);
              }}
              onEditingEnd={() => {
                if (search.length > 1) {
                  getSearch();
                }
              }}
              value={search}
              isError={search.length < 2 && search.length !== 0}
              errorMessage={'Arama için En az 2 karakter girmelisin.'}
              leftIcon={loading ? <LoadingIcon /> : <SearchIcon />}
              placeholder="Ürün Ara"
              rightIcon={
                search.length > 3 ? (
                  <CloseIcon onPress={() => setSearch('')} />
                ) : (
                  <SearchIcon />
                )
              }
              textAlign="left"
            />
            <Row>
              <Col
                style={{
                  paddingRight: 5,
                }}
                cols={1}>
                <Input
                  onChangeText={text => {
                    setMin(text.replace(/[^0-9]/g, ''));
                  }}
                  onEditingEnd={() => {
                    if (search.length > 1) {
                      getSearch();
                    }
                  }}
                  value={min}
                  textAlign="left"
                  keyboardType="numeric"
                  leftIcon={<SearchIcon />}
                  placeholder="Min Değer"
                  prefix="₺"
                />
              </Col>
              <Col
                style={{
                  paddingLeft: 5,
                }}
                cols={1}>
                <Input
                  onChangeText={text => {
                    setMax(text.replace(/[^0-9]/g, ''));
                  }}
                  value={max}
                  prefix="₺"
                  onEditingEnd={() => {
                    if (search.length > 1) {
                      getSearch();
                    }
                  }}
                  textAlign="left"
                  keyboardType="numeric"
                  leftIcon={<SearchIcon />}
                  placeholder="Max Değer"
                />
              </Col>
            </Row>
          </View>
          <FlatList
            style={{
              paddingHorizontal: 10,
            }}
            data={result}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
              <BasketItem item={item} navigation={navigation} />
            )}
            keyExtractor={item => item.id}
            ListEmptyComponent={() => (
              <ListEmptyComponent
                title="Ürün Bulunamadı."
                description="Bir ürünü aramak için ürün adını, maksimum yada minimum fiyatı girerek filtreleye bilirsiniz."
                HEADER_HEIGHT={200}
              />
            )}
          />
        </ImageBackground>
      )}
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    marginVertical: 5,
    backgroundColor: theme.colors.gray3,
  },
});
