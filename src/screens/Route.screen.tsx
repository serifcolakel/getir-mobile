import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { getImage } from '../utils/utils';
import { theme } from '../utils/theme';
import Row from '../components/Row';
import { RightArrowIcon, SearchIcon } from '../components/Icons';
import Col from '../components/Col';
import CustomCarousel from '../components/CustomCarousel';
import Input from '../components/PartnerComponents/Input';
import CustomText from '../components/PartnerComponents/CustomText';
import { BottomNavigationProps } from '../Layout/BottomTabs.navigator';

type Props = {
  navigation: BottomNavigationProps;
};
// const { data, loading } = useAppSelector(
//     (state: RootState) => state.allProducts,
//   );
//   const dispatch = useAppDispatch();
//   useEffect(() => {
//     //dispatch(getAllProduct());
//   }, []);
const Route = ({ navigation }: Props) => {
  return (
    // <ImageBackground
    //   style={{
    //     flex: 1,
    //   }}
    //   resizeMode="stretch"
    //   source={getImage('bgDoodle')}
    //   fadeDuration={200}>
    <View
      style={{
        flex: 1,
      }}>
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
          <CustomText label="Teslimat Adresi Belirleyin" />
          <RightArrowIcon size={18} color={theme.colors.getirPrimary500} />
        </Row>

        <Col cols={1}>
          <CustomText
            style={{
              width: '100%',
              textAlign: 'center',

              fontSize: 12,
              color: theme.colors.getirPrimary500,
            }}
            label="TVS"
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <CustomText
              style={{
                textAlign: 'center',
                fontFamily: theme.fonts.bold,
                fontSize: 24,
                color: theme.colors.getirPrimary500,
              }}
              label="10"
            />
            <CustomText
              style={{
                fontSize: 15,
                paddingBottom: 2,
                fontFamily: theme.fonts.bold,
                textAlign: 'center',
                color: theme.colors.getirPrimary500,
              }}
              label="dk"
            />
          </View>
        </Col>
      </Row>
      {/* <CarouselTest data={dummyData} /> */}
      <CustomCarousel navigation={navigation} />
      <Row
        alignItems="center"
        justifyContent="space-between"
        extraStyle={{
          paddingTop: 30,
          paddingHorizontal: 30,
        }}>
        <Col cols={2}>
          <Text
            style={{
              fontFamily: theme.fonts.bold,
              fontSize: 20,
              color: theme.colors.getirPrimary500,
            }}>
            Merhaba!
          </Text>
        </Col>
        <Col cols={2}>
          <Input
            editable={false}
            onPress={() => navigation.navigate('Search')}
            textAlign="left"
            rightIcon={<SearchIcon />}
            placeholder="Getir'de ara"
          />
        </Col>
      </Row>
      <Row
        justifyContent="center"
        alignItems="center"
        extraStyle={{
          padding: 20,
        }}>
        <Col cols={2}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: theme.colors.gray,
              overflow: 'hidden',
              margin: 5,
              height: 150,
              backgroundColor: theme.colors.white,
              borderRadius: 10,
            }}>
            <ImageBackground
              style={{
                flex: 1,
                padding: 5,
              }}
              source={getImage('getir')}
              fadeDuration={200}>
              <Text
                style={{
                  fontFamily: theme.fonts.bold,
                  fontSize: 24,
                  color: theme.colors.getirPrimary500,
                  paddingTop: 5,
                  paddingLeft: 5,
                }}>
                getir
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </Col>
        <Col cols={2}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: theme.colors.gray,
              overflow: 'hidden',
              margin: 5,
              height: 70,
              backgroundColor: theme.colors.white,
              borderRadius: 10,
            }}>
            <ImageBackground
              style={{
                flex: 1,
                overflow: 'hidden',
              }}
              source={getImage('yemek')}
              fadeDuration={200}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: theme.fonts.bold,
                  color: theme.colors.getirPrimary500,
                  paddingTop: 5,
                  paddingLeft: 5,
                }}>
                getiryemek
              </Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: theme.colors.gray,
              overflow: 'hidden',
              margin: 5,
              height: 70,
              backgroundColor: theme.colors.white,
              borderRadius: 10,
            }}>
            <ImageBackground
              style={{
                flex: 1,
                overflow: 'hidden',
              }}
              source={getImage('carsi')}
              fadeDuration={200}>
              <Text
                style={{
                  fontFamily: theme.fonts.bold,
                  fontSize: 16,
                  color: theme.colors.getirPrimary500,
                  paddingTop: 5,
                  paddingLeft: 5,
                }}>
                getircarsi
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </Col>
      </Row>
      <Row
        justifyContent="center"
        alignItems="center"
        extraStyle={{
          paddingHorizontal: 20,
        }}>
        <Col cols={2}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: theme.colors.gray,
              overflow: 'hidden',
              margin: 5,
              height: 70,
              backgroundColor: theme.colors.white,
              borderRadius: 10,
            }}>
            <ImageBackground
              style={{
                flex: 1,
                overflow: 'hidden',
              }}
              source={getImage('buyuk')}
              fadeDuration={200}>
              <Text
                style={{
                  fontFamily: theme.fonts.bold,
                  fontSize: 16,
                  color: theme.colors.getirPrimary500,
                  paddingTop: 5,
                  paddingLeft: 5,
                }}>
                getirbüyük
              </Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: theme.colors.gray,
              overflow: 'hidden',
              margin: 5,
              height: 70,
              backgroundColor: theme.colors.white,
              borderRadius: 10,
            }}>
            <ImageBackground
              style={{
                flex: 1,
                overflow: 'hidden',
              }}
              source={getImage('su')}
              fadeDuration={200}>
              <Text
                style={{
                  fontFamily: theme.fonts.bold,
                  fontSize: 16,
                  color: theme.colors.getirPrimary500,
                  paddingTop: 5,
                  paddingLeft: 5,
                }}>
                getirsu
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </Col>
        <Col cols={2}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: theme.colors.gray,
              overflow: 'hidden',
              margin: 5,
              height: 70,
              backgroundColor: theme.colors.white,
              borderRadius: 10,
            }}>
            <ImageBackground
              style={{
                flex: 1,
                overflow: 'hidden',
              }}
              source={getImage('is')}
              fadeDuration={200}>
              <Text
                style={{
                  fontFamily: theme.fonts.bold,
                  fontSize: 16,
                  color: theme.colors.getirPrimary500,
                  paddingTop: 5,
                  paddingLeft: 5,
                }}>
                getiriş
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: theme.colors.gray,
              overflow: 'hidden',
              margin: 5,
              height: 70,
              backgroundColor: theme.colors.white,
              borderRadius: 10,
            }}>
            <ImageBackground
              style={{
                flex: 1,
                overflow: 'hidden',
              }}
              source={getImage('n11')}
              fadeDuration={200}>
              <Text
                style={{
                  fontFamily: theme.fonts.bold,
                  fontSize: 16,
                  color: theme.colors.getirPrimary500,
                  paddingTop: 5,
                  paddingLeft: 5,
                }}>
                n11
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </Col>
      </Row>
    </View>

    // </ImageBackground>
  );
};

export default Route;

const styles = StyleSheet.create({});
