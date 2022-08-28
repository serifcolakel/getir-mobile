import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../../store';
import { getAllCampaings } from '../../features/slices/campaingsSlice';
import CustomText from '../../components/PartnerComponents/CustomText';
import { Loading } from '../../components/Loading';
import Row from '../../components/Row';
import Col from '../../components/Col';
import { theme } from '../../utils/theme';
import { CloseIcon, PlusIcon, RightArrowIcon } from '../../components/Icons';
import { WebView as HTMLRenderer } from 'react-native-webview';
import { Campaings } from '../../types/CampaingsTypes';

type Props = {};

const Campaign = (props: Props) => {
  const dispatch = useAppDispatch();
  const { campaings, loading } = useAppSelector(
    (state: RootState) => state.campaings,
  );
  useEffect(() => {
    dispatch(getAllCampaings());
  }, []);
  if (loading && !campaings) return <Loading />;
  const [selectedTab, setSelectedTab] = React.useState('1');
  const [showCampaignDetailsItem, setShowCampaignDetailsItem] =
    React.useState<Campaings | null>(null);

  const tabs = [
    {
      id: '1',
      title: 'Kampanyalar',
      component: (
        <View
          style={{
            flex: 1,
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  paddingLeft: 20,
                  borderRadius: 10,
                  padding: 15,
                  borderWidth: 1,
                  backgroundColor: theme.colors.white,
                  elevation: 1.5,
                  shadowColor: theme.colors.getirPrimary500,
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,
                  borderColor: theme.colors.getirPrimary100,
                }}>
                <View
                  style={{
                    marginRight: 40,
                    borderWidth: 1,
                    padding: 5,
                    borderColor: theme.colors.getirPrimary100,
                    borderRadius: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <PlusIcon />
                </View>

                <CustomText
                  style={{
                    color: theme.colors.getirPrimary500,
                  }}
                  label="Kampanya Kodu Ekle"
                />
              </View>
            }
            data={campaings}
            renderItem={({ item }) => (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: theme.colors.getirPrimary100,
                  borderRadius: 10,
                  backgroundColor: theme.colors.white,
                  marginVertical: 10,
                  padding: 20,
                }}>
                <Image
                  source={{ uri: item.data.picURL }}
                  style={{
                    width: '100%',
                    height: 120,
                    borderRadius: 10,
                  }}
                />
                <CustomText
                  label={item.data.title}
                  style={{
                    fontSize: 14,
                    color: theme.colors.getirPrimary500,
                    paddingVertical: 10,
                  }}
                />
                <CustomText
                  label={item.data.description}
                  style={{
                    fontSize: 12,
                    color: theme.colors.black,
                    paddingVertical: 10,
                    marginBottom: 15,
                  }}
                />
                <TouchableOpacity
                  onPress={() => setShowCampaignDetailsItem(item)}
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    borderWidth: 1,
                    borderColor: theme.colors.getirPrimary100,
                    borderRadius: 4,

                    padding: 15,
                    right: 20,
                  }}>
                  <RightArrowIcon
                    onPress={() => setShowCampaignDetailsItem(item)}
                    size={14}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      ),
    },
    {
      id: '2',
      title: 'Duyurular',
      component: (
        <View
          style={{
            padding: 20,
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <CustomText label="Duyurular" />
        </View>
      ),
    },
  ];
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Row
        extraStyle={{
          backgroundColor: 'white',
          padding: 5,
        }}>
        {tabs.map((tab, idx) => (
          <Col
            style={{
              alignItems: 'center',
              justifyContent: 'center',

              paddingHorizontal: 6,
            }}
            cols={1}>
            <Pressable
              style={{
                backgroundColor:
                  selectedTab === tab.id
                    ? theme.colors.getirPrimary50
                    : 'white',
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                borderRadius: 5,
              }}
              onPress={() => {
                setSelectedTab(tab.id);
              }}>
              <CustomText
                label={tab.title}
                style={{
                  color:
                    selectedTab === tab.id
                      ? theme.colors.getirPrimary500
                      : 'black',
                }}
              />
            </Pressable>
          </Col>
        ))}
      </Row>
      {showCampaignDetailsItem && (
        <Modal visible={true} transparent={true}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.8)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
                marginTop: 20,
                marginBottom: Dimensions.get('window').height / 3,
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: theme.colors.getirPrimary100,
                  borderRadius: 10,
                  backgroundColor: theme.colors.white,
                  marginVertical: 10,
                  padding: 20,
                }}>
                <Image
                  source={{ uri: showCampaignDetailsItem.data.picURL }}
                  style={{
                    marginTop: 40,
                    width: '100%',
                    height: 120,
                    borderRadius: 10,
                  }}
                />
                <CustomText
                  label={showCampaignDetailsItem.data.title}
                  style={{
                    fontSize: 14,
                    color: theme.colors.getirPrimary500,
                    paddingVertical: 10,
                  }}
                />
                <CustomText
                  label={showCampaignDetailsItem.data.description}
                  style={{
                    fontSize: 12,
                    color: theme.colors.black,
                    paddingVertical: 10,
                  }}
                />
                <TouchableOpacity
                  onPress={() => setShowCampaignDetailsItem(null)}
                  style={{
                    position: 'absolute',
                    top: 10,
                    borderWidth: 1,

                    borderColor: theme.colors.getirPrimary100,
                    borderRadius: 4,
                    padding: 5,
                    right: 20,
                  }}>
                  <CloseIcon
                    size={24}
                    onPress={() => setShowCampaignDetailsItem(null)}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <CustomText
              label="Kampanya Detayları"
              style={{
                color: theme.colors.white,
              }}
            />
            <HTMLRenderer
              showsVerticalScrollIndicator={false}
              containerStyle={{
                backgroundColor: 'white',
                width: '100%',

                paddingHorizontal: 20,
              }}
              contentInsetAdjustmentBehavior="automatic"
              source={{
                uri: showCampaignDetailsItem.data.promoContentURL,
              }}
              style={{
                width: '100%',
                height: 300,
              }}
            />
          </View>
        </Modal>
      )}
      <View
        style={{
          backgroundColor: theme.colors.gray2,
          padding: 20,
          flex: 1,
        }}>
        {tabs.map((tab, idx) => tab.id === selectedTab && tab.component)}
      </View>
    </View>
  );
};

export default Campaign;

const styles = StyleSheet.create({});
