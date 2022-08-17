import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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

const App = () => {
  return (
    <SafeAreaView style={{flex: 6}}>
      <View style={styles.headerStyle}>
        <Image
          source={require('./assets/photos/beratt.jpg')}
          style={styles.headerProfilePhoto}
        />
        <View style={{flexDirection: 'column'}} D>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.headerWalletIcon}>
              <FontAwesomeIcon icon="fa-wallet" size={12} />
            </View>
            <Text style={styles.headerMoney}>146.59₺</Text>
          </View>
          <Text style={styles.headerUsername}>Berat Üçgül</Text>
        </View>
        <View
          style={{flexDirection: 'row', marginLeft: 'auto', marginRight: 30}}>
          <View style={styles.headerRightFirstIcon}>
            <FontAwesomeIcon icon={faBell} size={20} color="#2F20D9" />
          </View>
          <View style={styles.headerRightFirstIcon}>
            <FontAwesomeIcon icon={faBullhorn} size={20} color="#2F20D9" />
          </View>
          <View style={styles.headerRightFirstIcon}>
            <FontAwesomeIcon icon={faMessage} size={20} color="#2F20D9" />
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 41.050117,
            longitude: 29.015997,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}>
          <Marker
            draggable
            coordinate={{
              latitude: 41.050117,
              longitude: 29.015997,
            }}
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Test Marker'}
            description={'This is a description of the marker'}
          />
        </MapView>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={styles.insideMapFirstButton}>
            <FontAwesomeIcon icon={faUsers} size={20} color="#2F20D9" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.insideMapSecondButton}>
            <FontAwesomeIcon icon={faArrowsToCircle} size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.insideMapThirdButton}>
            <FontAwesomeIcon
              icon={faLocationCrosshairs}
              size={20}
              color="#2F20D9"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
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
  headerStyle: {
    height: 95,
    width: '100%',
    backgroundColor: '#2F20D9',
    borderBottomColor: '#23AA49',
    borderBottomWidth: 3,
    borderRadius: 10,
    borderBottomRadius: 10,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  headerProfilePhoto: {
    height: 50,
    width: 50,
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
    color: '#0CBF6A',
  },
  headerUsername: {
    color: '#fff',
    marginLeft: 10,
    marginTop: 5,
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
  insideMapSecondButton: {
    height: 75,
    width: 75,
    borderRadius: 100,
    backgroundColor: '#2F20D9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  insideMapFirstButton: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginRight: 15,
  },
  insideMapThirdButton: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginLeft: 15,
  },
});
