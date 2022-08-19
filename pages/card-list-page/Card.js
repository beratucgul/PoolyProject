import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faArrowLeft,
  faCircleDot,
  faLocationDot,
  faCircleArrowRight,
} from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft);
library.add(faCircleDot);
library.add(faLocationDot);
library.add(faCircleArrowRight);

const {width, height} = Dimensions.get('window');
console.log('WIDTH ' + width + 'HEIGHT  ' + height);

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export default function Card({navigation}) {
  const goBackFunction = () => {
    navigation.goBack();
  };
  return (
    <ScrollView>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" />
      <View style={styles.container}>
        <Text style={styles.headerText}>Sürüşler</Text>
        <View style={styles.backIcon}>
          <TouchableOpacity
            style={styles.goBackButton}
            onPress={goBackFunction}>
            <FontAwesomeIcon icon={faArrowLeft} size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.insideCardContainer}>
            <Text style={styles.routeText}>
              Rota - <Text style={styles.innerRouteText}>Başlangıç</Text>
            </Text>
            <View style={styles.insideCardContainerUpper}>
              <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row', width: '100%'}}>
                  <View style={styles.startRouteIcon}>
                    <FontAwesomeIcon
                      icon={faCircleDot}
                      size={20}
                      color="#000"
                    />
                  </View>
                  <Text style={styles.startRouteText}>Küçük Ayasofya</Text>
                </View>
                <View style={styles.verticalDashedLine} />
                <View style={{flexDirection: 'row', width: '100%'}}>
                  <View style={styles.endRouteIcon}>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      size={20}
                      color="#000"
                    />
                  </View>
                  <Text style={styles.endRouteText}>Maslak</Text>
                </View>
              </View>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.estimatedAmount}>Tahmini Tutar</Text>
                <Text style={styles.estimatedPrice}>68.72₺</Text>
                <Text style={styles.estimatedArrivalTimeText}>
                  Tahmini Varış Süresi
                </Text>
                <Text style={styles.estimatedArrivalTime}>1s 20dk</Text>
              </View>
            </View>
            <View style={styles.horizontalDashedLine} />
            <Text style={styles.driverText}>Sürücü</Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/photos/beratt.jpg')}
                style={styles.driverPhoto}
              />
              <Text style={styles.driverName}>Berat Üçgül - </Text>
              <Text style={styles.driverPoint}>
                4.8
                <Text style={styles.driverMaxPoint}>/5</Text>
              </Text>
              <Image
                source={require('../../assets/photos/bogazici.png')}
                style={styles.driverEducationFirst}
              />
              <Image
                source={require('../../assets/photos/istanbuluni.png')}
                style={styles.driverEducationSecond}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.remainingTime}>
                14dk
                <Text style={styles.remainingTimeText}> içinde varış</Text>
              </Text>
              <View style={styles.nextIcon}>
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  size={52}
                  color="#000"
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.insideCardContainer}>
            <Text style={styles.routeText}>
              Rota - <Text style={styles.innerRouteText}>Başlangıç</Text>
            </Text>
            <View style={styles.insideCardContainerUpper}>
              <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row', width: '100%'}}>
                  <View style={styles.startRouteIcon}>
                    <FontAwesomeIcon
                      icon={faCircleDot}
                      size={20}
                      color="#000"
                    />
                  </View>
                  <Text style={styles.startRouteText}>Küçük Ayasofya</Text>
                </View>
                <View style={styles.verticalDashedLine} />
                <View style={{flexDirection: 'row', width: '100%'}}>
                  <View style={styles.endRouteIcon}>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      size={20}
                      color="#000"
                    />
                  </View>
                  <Text style={styles.endRouteText}>Kağıthane</Text>
                </View>
                <View style={styles.betweenTwoRoute}>
                  <View style={styles.greenVerticalLine} />
                  <View style={styles.transferIcon}>
                    <FontAwesomeIcon
                      icon={faCircleArrowRight}
                      size={12}
                      color="rgba(101, 101, 101, 1)"
                    />
                  </View>
                  <Text style={styles.poolyTransferText}>Pooly Aktarması</Text>
                  <View style={styles.transferHorizontalDashedLine} />
                </View>
              </View>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.estimatedAmount}>Tahmini Tutar</Text>
                <Text style={styles.estimatedPrice}>68.72₺</Text>
                <Text style={styles.estimatedArrivalTimeText}>
                  Tahmini Varış Süresi
                </Text>
                <Text style={styles.estimatedArrivalTime}>20dk</Text>
              </View>
            </View>
            <View style={styles.insideCardContainerUpper}>
              <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row', width: '100%'}}>
                  <View style={styles.startRouteIcon}>
                    <FontAwesomeIcon
                      icon={faCircleDot}
                      size={20}
                      color="#000"
                    />
                  </View>
                  <Text style={styles.startRouteText}>Kağıthane</Text>
                </View>
                <View style={styles.verticalDashedLine} />
                <View style={{flexDirection: 'row', width: '100%'}}>
                  <View style={styles.endRouteIcon}>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      size={20}
                      color="#000"
                    />
                  </View>
                  <Text style={styles.endRouteText}>Maslak</Text>
                </View>
              </View>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.estimatedAmount}>Tahmini Tutar</Text>
                <Text style={styles.estimatedPrice}>128.63₺</Text>
                <Text style={styles.estimatedArrivalTimeText}>
                  Tahmini Varış Süresi
                </Text>
                <Text style={styles.estimatedArrivalTime}>45dk</Text>
              </View>
            </View>

            <View style={styles.horizontalDashedLine} />
            <Text style={styles.driverText}>Sürücü</Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/photos/beratt.jpg')}
                style={styles.driverPhoto}
              />
              <Text style={styles.driverName}>Berat Üçgül - </Text>
              <Text style={styles.driverPoint}>
                4.8
                <Text style={styles.driverMaxPoint}>/5</Text>
              </Text>
              <Image
                source={require('../../assets/photos/bogazici.png')}
                style={styles.driverEducationFirst}
              />
              <Image
                source={require('../../assets/photos/istanbuluni.png')}
                style={styles.driverEducationSecond}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.remainingTime}>
                14dk
                <Text style={styles.remainingTimeText}> içinde varış</Text>
              </Text>
              <View style={styles.nextIcon}>
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  size={52}
                  color="#000"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 19,
    marginRight: 19,
    alignItems: 'center',
  },
  headerText: {
    fontSize: scale(26),
    fontWeight: '400',
    marginTop: 24,
  },
  backIcon: {
    marginRight: 'auto',
    top: -12,
  },
  cardContainer: {
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 1)',
    width: '100%',
    height: 'auto',
    borderRadius: 8,
    marginBottom: 15,
  },
  insideCardContainer: {
    marginLeft: 27,
    marginRight: 27,
  },
  insideCardContainerUpper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  routeText: {
    fontWeight: '600',
    color: 'rgba(137, 138, 141, 1)',
    marginTop: 16,
    fontSize: scale(15),
  },
  innerRouteText: {
    color: 'rgba(35, 170, 73, 1)',
  },
  startRouteIcon: {
    marginTop: 19,
  },
  startRouteText: {
    marginTop: 19,
    marginLeft: 10,
    fontWeight: '400',
    fontSize: scale(16),
  },
  verticalDashedLine: {
    height: 14,
    width: 0,
    marginTop: 5,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'rgba(0, 0, 0, 1)',
    marginLeft: 8,
  },
  endRouteIcon: {
    marginTop: 12,
  },
  endRouteText: {
    marginLeft: 11,
    marginTop: 12,
    fontSize: scale(16),
    fontWeight: '400',
  },
  estimatedAmount: {
    fontWeight: '400',
    fontSize: scale(10),
    color: 'rgba(0, 0, 0, 1)',
    marginTop: 10,
  },
  estimatedPrice: {
    fontWeight: '600',
    fontSize: scale(18),
    color: 'rgba(35, 170, 73, 1)',
    marginTop: 1,
  },
  estimatedArrivalTimeText: {
    fontWeight: '400',
    fontSize: scale(10),
    color: 'rgba(0,0,0,1)',
    marginTop: 20,
  },
  estimatedArrivalTime: {
    fontWeight: '600',
    fontSize: scale(18),
    color: 'rgba(0, 0, 0, 1)',
    marginBottom: 20,
  },
  horizontalDashedLine: {
    width: '100%',
    borderStyle: 'dashed',
    borderWidth: 0.5,
    color: 'rgba(173, 179, 188, 1)',
    marginBottom: 10,
  },
  driverText: {
    fontSize: scale(16),
    fontWeight: '400',
    color: 'rgba(137, 138, 141, 1)',
    marginTop: 23,
  },
  driverPhoto: {
    width: 32,
    height: 32,
    borderRadius: 100,
    marginTop: 15,
    marginRight: 10,
  },
  driverName: {
    fontWeight: '500',
    marginTop: 19,
    fontSize: scale(17),
  },
  driverPoint: {
    fontWeight: '500',
    marginTop: 19,
    fontSize: scale(17),
  },
  driverMaxPoint: {
    fontWeight: '200',
  },
  driverEducationFirst: {
    height: 24,
    width: 24,
    borderRadius: 100,
    marginTop: 19,
    marginLeft: 7,
  },
  driverEducationSecond: {
    height: 24,
    width: 24,
    borderRadius: 100,
    marginTop: 19,
    marginLeft: 4,
  },
  remainingTime: {
    fontWeight: '800',
    fontSize: scale(22),
    color: 'rgba(0, 0, 0, 1)',
    marginLeft: 40,
    marginTop: 11,
  },
  remainingTimeText: {
    fontWeight: '300',
    color: 'rgba(112, 112, 112, 1)',
  },
  nextIcon: {
    marginLeft: 'auto',
    right: -35,
    marginBottom: 10,
  },
  greenVerticalLine: {
    width: 0,
    height: 50,
    borderWidth: 2,
    borderColor: 'rgba(35, 170, 73, 1)',
    marginLeft: 8,
    marginTop: 14,
  },
  betweenTwoRoute: {
    flexDirection: 'row',
    backgroundColor: 'rgba(243, 243, 243, 1)',
  },
  transferIcon: {
    alignSelf: 'center',
    marginLeft: 20,
    marginTop: 14,
  },
  poolyTransferText: {
    alignSelf: 'center',
    marginTop: 14,
    marginLeft: 9,
  },
  transferHorizontalDashedLine: {
    borderStyle: 'dashed',
    borderWidth: 0.5,
    color: 'rgba(101, 101, 101, 1)',
    alignSelf: 'center',
    marginTop: 14,
    marginLeft: 13,
  },
  goBackButton: {
    width: 20,
    height: 20,
  },
});
