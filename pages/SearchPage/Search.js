import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faHouseCircleCheck,
  faAngleRight,
  faBriefcase,
  faHeart,
  faClockRotateLeft,
} from '@fortawesome/free-solid-svg-icons';

library.add(faHouseCircleCheck);
library.add(faAngleRight);
library.add(faBriefcase);
library.add(faHeart);
library.add(faClockRotateLeft);

const previousLocations = [
  {
    id: 1,
    address: 'İstanbul Yeni Havalimanı',
    location: 'İstanbul, Alibeyköy',
  },
  {
    id: 2,
    address: 'İstanbul Sabiha Gökçen',
    location: 'İstanbul, Pendik',
  },
  {
    id: 3,
    address: 'Ankara Esenboğa Havalimanı',
    location: 'Ankara, Çubuk',
  },
];

const Location = ({location, address}) => (
  <View style={{flexDirection: 'column'}}>
    <View style={styles.locations}>
      <View style={styles.locationIcon}>
        <FontAwesomeIcon icon={faClockRotateLeft} size={20} color="#000" />
      </View>
      <View style={{flexDirection: 'column'}}>
        <Text style={styles.addressText}>{location} </Text>
        <Text style={styles.locationText}>{address}</Text>
      </View>
    </View>
    <View style={styles.horizontalLine} />
  </View>
);

export default function Search() {
  const renderItem = ({item}) => (
    <Location location={item.location} address={item.address} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainers}>
        <View style={styles.FromInputView}>
          <Text style={styles.FromText}>Nereden: </Text>
          <TextInput
            placeholder="Şuanki Konumun"
            style={styles.FromInputText}
          />
        </View>
        <View style={styles.ToInputView}>
          <Text style={styles.ToText}>Nereye: </Text>
          <TextInput placeholder="Varış Noktası" style={styles.FromInputText} />
        </View>
      </View>
      <View style={styles.dashedLineFirst} />
      <View style={styles.homeAddress}>
        <View style={styles.homeIcon}>
          <FontAwesomeIcon icon={faHouseCircleCheck} size={20} color="#000" />
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.homeName}>Ev </Text>
          <Text style={styles.homeCity}>İstanbul, Beşiktaş</Text>
        </View>
        <View style={styles.rightIcon}>
          <FontAwesomeIcon icon={faAngleRight} size={20} color="#000" />
        </View>
      </View>
      <View style={styles.workAddress}>
        <View style={styles.workIcon}>
          <FontAwesomeIcon icon={faBriefcase} size={20} color="#000" />
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.workName}>İş </Text>
          <Text style={styles.workCity}>İstanbul, Maslak</Text>
        </View>
        <View style={styles.rightIcon}>
          <FontAwesomeIcon icon={faAngleRight} size={20} color="#000" />
        </View>
      </View>
      <View style={styles.favorites}>
        <View style={styles.favoriteIcon}>
          <FontAwesomeIcon icon={faHeart} size={20} color="#000" />
        </View>
        <Text style={styles.favoritesText}>Kaydedilenler </Text>
        <View style={styles.rightIcon}>
          <FontAwesomeIcon icon={faAngleRight} size={20} color="#000" />
        </View>
      </View>
      <View style={styles.dashedLineSecond} />
      <Text style={styles.previousLocations}>Geçmiş Lokasyonlar</Text>
      <FlatList
        data={previousLocations}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  inputContainers: {
    alignItems: 'center',
  },
  FromInputView: {
    width: 375,
    height: 52,
    borderColor: '#000',
    marginEnd: 26,
    marginStart: 26,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  FromText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 20,
  },
  ToInputView: {
    width: 375,
    height: 52,
    borderColor: '#000',
    marginEnd: 26,
    marginStart: 26,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  ToText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 20,
  },
  dashedLineFirst: {
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#ADB3BC',
    width: 378,
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25,
  },
  homeAddress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeIcon: {
    marginTop: 47,
    marginLeft: 38,
  },
  homeName: {
    height: 24,
    width: 24,
    marginTop: 35,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  homeCity: {
    width: 116,
    height: 17,
    marginTop: 3,
    marginLeft: 16,
  },
  rightIcon: {
    marginLeft: 'auto',
    marginTop: 51,
    marginRight: 23,
  },
  workAddress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  workIcon: {
    marginTop: 36,
    marginLeft: 38,
  },
  workName: {
    height: 24,
    width: 24,
    marginTop: 24,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  workCity: {
    width: 116,
    height: 17,
    marginTop: 3,
    marginLeft: 16,
  },
  favorites: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favoriteIcon: {
    marginTop: 33,
    marginLeft: 38,
  },
  favoritesText: {
    height: 24,
    width: 135,
    marginTop: 30,
    marginLeft: 15,
  },
  dashedLineSecond: {
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#ADB3BC',
    width: 378,
    marginTop: 45,
    marginLeft: 25,
    marginRight: 25,
  },
  previousLocations: {
    height: 17,
    width: 133,
    marginTop: 20,
    marginLeft: 37,
  },
  locations: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginTop: 37,
    marginLeft: 35,
  },
  addressText: {
    height: 24,
    width: 239,
    marginTop: 27,
    fontWeight: 'bold',
    marginLeft: 13,
  },
  locationText: {
    width: 124,
    height: 17,
    marginTop: 3,
    marginLeft: 13,
  },
  horizontalLine: {
    borderBottomColor: '#ADB3BC',
    borderBottomWidth: 0.5,
    width: 378,
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
    alignSelf: 'center',
  },
});
