import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { getImage } from '../utils/utils';
import { theme } from '../utils/theme';
import Row from '../components/Row';
import { RightArrowIcon, SearchIcon } from '../components/Icons';
import Col from '../components/Col';
import CustomCarousel from '../components/CustomCarousel';
import Input from '../components/PartnerComponents/Input';

type Props = {};
// const { data, loading } = useAppSelector(
//     (state: RootState) => state.allProducts,
//   );
//   const dispatch = useAppDispatch();
//   useEffect(() => {
//     //dispatch(getAllProduct());
//   }, []);
const Route = (props: Props) => {
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

      {/* <CarouselTest data={dummyData} /> */}
      <CustomCarousel />
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
              fontWeight: 'bold',
              fontSize: 16,
              color: theme.colors.getirPrimary500,
            }}>
            Merhaba!
          </Text>
        </Col>
        <Col cols={2}>
          <Input
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
          <View
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
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: theme.colors.getirPrimary500,
                  paddingTop: 5,
                  paddingLeft: 5,
                }}>
                getir
              </Text>
            </ImageBackground>
          </View>
        </Col>
        <Col cols={2}>
          <View
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
                  fontSize: 20,
                  //  fontWeight: 'bold',
                  fontFamily: theme.fonts.bold,
                  color: theme.colors.getirPrimary500,
                  paddingTop: 5,
                  paddingLeft: 5,
                }}>
                getiryemek
              </Text>
            </ImageBackground>
          </View>

          <View
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
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: theme.colors.getirPrimary500,
                  paddingTop: 5,
                  paddingLeft: 5,
                }}>
                getircarsi
              </Text>
            </ImageBackground>
          </View>
        </Col>
      </Row>
      <Row
        justifyContent="center"
        alignItems="center"
        extraStyle={{
          paddingHorizontal: 20,
        }}>
        <Col cols={2}>
          <View
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
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: theme.colors.getirPrimary500,
                  paddingTop: 5,
                  paddingLeft: 5,
                }}>
                getirbüyük
              </Text>
            </ImageBackground>
          </View>

          <View
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
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: theme.colors.getirPrimary500,
                  paddingTop: 5,
                  paddingLeft: 5,
                }}>
                getirsu
              </Text>
            </ImageBackground>
          </View>
        </Col>
        <Col cols={2}>
          <View
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
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: theme.colors.getirPrimary500,
                  paddingTop: 5,
                  paddingLeft: 5,
                }}>
                getiriş
              </Text>
            </ImageBackground>
          </View>
          <View
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
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: theme.colors.getirPrimary500,
                  paddingTop: 5,
                  paddingLeft: 5,
                }}>
                n11
              </Text>
            </ImageBackground>
          </View>
        </Col>
      </Row>
    </View>

    // </ImageBackground>
  );
};

export default Route;

const styles = StyleSheet.create({});
