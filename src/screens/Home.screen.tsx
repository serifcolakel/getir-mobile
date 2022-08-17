import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { getImage } from '../utils/utils';
import Row from '../components/Row';
import { RightArrowIcon } from '../components/Icons';
import { theme } from '../utils/theme';
import Col from '../components/Col';
import CustomCarousel from '../components/CustomCarousel';
import Carousel from '../components/Test';

type Props = {};

const Home = (props: Props) => {
  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      resizeMode="stretch"
      source={getImage('bgDoodle')}
      fadeDuration={200}>
      <Row
        extraStyle={{
          backgroundColor: theme.colors.getirSecondary500,
          height: 60,
        }}
        alignItems="center"
        justifyContent="space-between">
        <Row
          extraStyle={{
            backgroundColor: theme.colors.white,
            paddingHorizontal: 20,
            width: '70%',

            elevation: 25,

            borderTopRightRadius: 80,
            borderBottomRightRadius: 80,
            height: '100%',
          }}
          alignItems="center"
          justifyContent="space-between">
          <Text>Teslimat Adresi Belirleyin</Text>
          <RightArrowIcon size={18} color={theme.colors.getirPrimary500} />
        </Row>

        <Col cols={1}>
          <Text
            style={{
              width: '100%',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 12,
              color: theme.colors.getirPrimary500,
            }}>
            TVS
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 24,
                color: theme.colors.getirPrimary500,
              }}>
              10
            </Text>
            <Text
              style={{
                fontSize: 15,
                paddingBottom: 2,
                fontWeight: 'bold',
                textAlign: 'center',
                color: theme.colors.getirPrimary500,
              }}>
              dk
            </Text>
          </View>
        </Col>
      </Row>

      <Carousel data={dummyData} />
      <CustomCarousel />
    </ImageBackground>
  );
};
export const dummyData = [
  {
    title: 'Anise Aroma Art Bazar',
    url: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 1,
  },
  {
    title: 'Food inside a Bowl',
    url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 2,
  },
  {
    title: 'Vegatable Salad',
    url: 'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 3,
  },
];

export default Home;

const styles = StyleSheet.create({});
