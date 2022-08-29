import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { RootState, useAppSelector } from '../../store';
import { theme } from '../../utils/theme';
import ListEmptyComponent from '../../components/ListEmptyComponent';
import BasketItem from '../../components/BottomTabsComponents/BasketItem';
import { BottomNavigationProps } from '../../Layout/BottomTabs.navigator';

type Props = {
  navigation: BottomNavigationProps;
};

const Favorites = ({ navigation }: Props) => {
  const { favorites } = useAppSelector((state: RootState) => state.basket);
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={favorites}
        numColumns={3}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <BasketItem item={item} navigation={navigation} />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={() => (
          <ListEmptyComponent
            title="Henüz favori ürününüz yok"
            description="Bir ürünü favoriye eklemek için ürün detayından kalp butonuna dokunabilirsiniz."
            HEADER_HEIGHT={200}
          />
        )}
      />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.gray2,
  },
  separator: {
    height: 1,
    marginVertical: 5,
    backgroundColor: theme.colors.gray3,
  },
});
