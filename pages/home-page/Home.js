import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faWallet,
  faBell,
  faBullhorn,
  faMessage,
  faArrowsToCircle,
  faUsers,
  faLocationCrosshairs,
} from '@fortawesome/free-solid-svg-icons';

library.add(faWallet);
library.add(faBell);
library.add(faBullhorn);
library.add(faMessage);
library.add(faArrowsToCircle);
library.add(faUsers);
library.add(faLocationCrosshairs);

import MapView, {Marker} from 'react-native-maps';

const carCoords = [
  {
    latitude: 41.053256,
    longitude: 29.012391,
    title: 'Lorem Ipsum',
  },
  {
    latitude: 41.053852,
    longitude: 29.00752,
    title: 'Lorem Ipsum',
  },
  {
    latitude: 41.051403,
    longitude: 29.008561,
    title: 'Lorem Ipsum',
  },
  {
    latitude: 41.053999,
    longitude: 29.009213,
    title: 'Lorem Ipsum',
  },
];

const userCoords = [
  {
    latitude: 41.055256,
    longitude: 29.012391,
    title: 'Lorem Ipsum',
  },
  {
    latitude: 41.050852,
    longitude: 29.00752,
    title: 'Lorem Ipsum',
  },
  {
    latitude: 41.055403,
    longitude: 29.008561,
    title: 'Lorem Ipsum',
  },
  {
    latitude: 41.056999,
    longitude: 29.009213,
    title: 'Lorem Ipsum',
  },
];

const HomePage = ({navigation}) => {
  const navigates = () => {
    navigation.navigate('Search');
  };

  return (
    <SafeAreaView style={{flex: 6}}>
      <StatusBar backgroundColor="#2F1FDA" />
      <View style={styles.headerStyle}>
        <Image
          source={require('../../assets/photos/beratt.jpg')}
          style={styles.headerProfilePhoto}
        />
        <View style={styles.flexDirectionColumn} D>
          <View style={styles.flexDirectionRow}>
            <View style={styles.headerWalletIcon}>
              <FontAwesomeIcon icon="fa-wallet" size={12} />
            </View>
            <Text style={styles.headerMoney}>146.59₺</Text>
          </View>
          <Text style={styles.headerUsername}>Berat Üçgül</Text>
        </View>
        <View style={styles.headerThreeIconGeneralView}>
          <View style={styles.headerRightFirstIcon}>
            <FontAwesomeIcon icon={faBell} size={20} color="#2F1FDA" />
            <View style={styles.badges}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </View>
          <View style={styles.headerRightFirstIcon}>
            <FontAwesomeIcon icon={faBullhorn} size={20} color="#2F1FDA" />
            <View style={styles.badges}>
              <Text style={styles.badgeText}>5</Text>
            </View>
          </View>
          <View style={styles.headerRightFirstIcon}>
            <FontAwesomeIcon icon={faMessage} size={20} color="#2F1FDA" />
            <View style={styles.badges}>
              <Text style={styles.badgeText}>4</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.headerStyleSecond} />
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 41.052355,
            longitude: 29.008904,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          customMapStyle={mapStyle}>
          <Marker
            coordinate={{
              latitude: 41.052355,
              longitude: 29.008904,
            }}
            title={'Lorem Ipsum'}
          />
          {carCoords.map((item, index) => (
            <Marker
              key={index}
              coordinate={{latitude: item.latitude, longitude: item.longitude}}
              title={item.title}
              description={item.description}>
              <Image
                source={require('../../assets/photos/ferrari.png')}
                style={styles.carStyle}
                resizeMode="contain"
              />
            </Marker>
          ))}
          {userCoords.map((item, index) => (
            <Marker
              key={index}
              coordinate={{latitude: item.latitude, longitude: item.longitude}}
              title={item.title}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../assets/photos/marker.png')}
                  style={styles.markerStyle}
                  resizeMode="contain"
                />
                <Image
                  source={require('../../assets/photos/beratt.jpg')}
                  style={styles.markerUserPhoto}
                  resizeMode="contain"
                />
              </View>
            </Marker>
          ))}
        </MapView>
        <View style={styles.insideMapAllIcons}>
          <TouchableOpacity style={styles.insideMapFirstButton}>
            <FontAwesomeIcon icon={faUsers} size={20} color="#2F1FDA" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigates()}
            style={styles.insideMapSecondButton}>
            <FontAwesomeIcon icon={faArrowsToCircle} size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.insideMapThirdButton}>
            <FontAwesomeIcon
              icon={faLocationCrosshairs}
              size={20}
              color="#2F1FDA"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomePage;

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#e9e9e9'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#616161'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#f5f5f5'}]},
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [{color: '#bdbdbd'}],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#757575'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#e5e5e5'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9e9e9e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#ffffff'}],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [{color: '#757575'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#ffffff'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#616161'}],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [{color: '#e5e5e5'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [{color: '#eeeeee'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#f5f5f5'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9e9e9e'}],
  },
];
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 5,
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  flexDirectionColumn: {
    flexDirection: 'column',
  },
  headerStyle: {
    width: '100%',
    backgroundColor: '#2F1FDA',
    borderBottomColor: 'transparent',
    borderBottomWidth: 3,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomRadius: 10,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    zIndex: 50,
  },
  headerStyleSecond: {
    height: 125,
    width: '100%',
    backgroundColor: '#23AA49',
    borderBottomColor: 'transparent',
    borderBottomWidth: 3,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomRadius: 10,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    zIndex: 1,
    position: 'absolute',
  },
  headerProfilePhoto: {
    height: 48,
    width: 48,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  headerWalletIcon: {
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#fff',
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  headerMoney: {
    height: 20,
    marginLeft: 10,
    color: '#00F545',
  },
  headerUsername: {
    color: '#fff',
    marginLeft: 10,
    marginTop: 5,
  },
  headerThreeIconGeneralView: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 30,
  },
  headerRightFirstIcon: {
    borderRadius: 100,
    borderWidth: 10,
    borderColor: '#fff',
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  headerRightSecondIcon: {
    borderRadius: 100,
    borderWidth: 10,
    borderColor: '#fff',
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  headerRightThirdIcon: {
    borderRadius: 100,
    borderWidth: 10,
    borderColor: '#fff',
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  insideMapAllIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  insideMapFirstButton: {
    height: 36,
    width: 36,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  insideMapSecondButton: {
    height: 72,
    width: 72,
    borderRadius: 100,
    backgroundColor: '#2F1FDA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  insideMapThirdButton: {
    height: 36,
    width: 36,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  badges: {
    backgroundColor: 'red',
    position: 'absolute',
    top: -12,
    right: -10,
    borderRadius: 100,
    height: 13,
    width: 13,
  },
  badgeText: {
    color: '#fff',
    width: 5,
    height: 10,
    fontSize: 8,
    left: 4,
  },
  carStyle: {
    width: 48,
    height: 36,
  },
  markerUserPhoto: {
    position: 'absolute',
    borderRadius: 100,
    height: 18,
    width: 18,
    top: 5,
  },
  markerStyle: {
    width: 36,
    height: 36,
  },
});
