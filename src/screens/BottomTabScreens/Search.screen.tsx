import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { getImage } from '../../utils/utils';

type Props = {};
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item 2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 3',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 4',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 5',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 5',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 5',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 5',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 5',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 5',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 5',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 5',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 5',
  },
];
const Search = (props: Props) => {
  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      resizeMode="stretch"
      source={getImage('bgDoodle')}
      fadeDuration={200}>
      <View>
        <Text>Search</Text>
      </View>
      <FlatList
        style={{
          padding: 10,
        }}
        data={DATA}
        numColumns={5}
        renderItem={({ item, index, separators }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              padding: 10,
              margin: 5,
            }}>
            <Text> {item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </ImageBackground>
  );
};

export default Search;

const styles = StyleSheet.create({});
