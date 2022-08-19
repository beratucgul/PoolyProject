import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faHouseCircleCheck,
  faArrowRight,
  faArrowLeft,
  faBriefcase,
  faHeart,
  faClockRotateLeft,
} from '@fortawesome/free-solid-svg-icons';

library.add(faHouseCircleCheck);
library.add(faArrowRight);
library.add(faBriefcase);
library.add(faHeart);
library.add(faClockRotateLeft);
library.add(faArrowLeft);

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

const searchList = [
  {
    id: 1,
    title: 'İstanbul, Alibeyköy',
  },
  {
    id: 2,
    title: 'İstanbul, Pendik',
  },
  {
    id: 3,
    title: 'Ankara, Çubuk',
  },
  {
    id: 4,
    title: 'İstanbul, Maslak',
  },
];

export default function Search({navigation}) {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const [isBackgroundOpacity, setIsBackgroundOpacity] = useState(false);

  const goBacktoHomeFunction = () => {
    navigation.goBack();
  };

  //Searchbar Items
  useEffect(() => {
    setFilteredDataSource(searchList);
    setMasterDataSource(searchList);
  }, []);

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  //Searchbar flatlist item
  const ItemView = ({item}) => {
    return (
      <View style={styles.afterSearchViewStyle}>
        <Text style={styles.afterSearchText} onPress={() => getItem(item)}>
          {item.title}
        </Text>
      </View>
    );
  };

  //Searchbar flatlist Item Separator
  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  //Searchbar item onClick
  const getItem = item => {
    navigation.navigate('Card');
  };

  //Location Flatlist item
  const Location = ({location, address}) => (
    <View style={styles.flexDirectionColumn}>
      <View style={styles.locations}>
        <View style={styles.locationIcon}>
          <FontAwesomeIcon icon={faClockRotateLeft} size={20} color="#000" />
        </View>
        <View style={styles.flexDirectionColumn}>
          <Text style={styles.addressText}>{location} </Text>
          <Text style={styles.locationText}>{address}</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
    </View>
  );

  // Previous Locations render
  const renderItem = ({item}) => (
    <Location location={item.location} address={item.address} />
  );

  const searchInputClick = () => {
    setIsBackgroundOpacity(true);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.backIcon}>
          <TouchableOpacity onPress={goBacktoHomeFunction}>
            <FontAwesomeIcon icon={faArrowLeft} size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainers}>
          <View
            style={[
              styles.FromInputView,
              {
                backgroundColor: isBackgroundOpacity ? '#fff' : '',
              },
            ]}>
            <Text style={styles.FromText}>Nereden: </Text>
            <TextInput
              onChangeText={text => searchFilterFunction(text)}
              value={search}
              onFocus={searchInputClick}
              placeholder="Şuanki Konumun"
              placeholderTextColor={'rgba(137, 138, 141, 1)'}
              style={styles.FromInputText}
            />
          </View>
          <View
            style={[
              styles.ToInputView,
              {
                backgroundColor: isBackgroundOpacity ? '#fff' : '',
              },
            ]}>
            <Text style={styles.ToText}>Nereye: </Text>
            <TextInput
              placeholder="Varış Noktası"
              placeholderTextColor={'rgba(137, 138, 141, 1)'}
              onFocus={searchInputClick}
              style={styles.FromInputText}
            />
          </View>
        </View>
        <View
          style={[
            styles.searchBarListView,
            {
              backgroundColor: isBackgroundOpacity ? '#fff' : '',
            },
          ]}>
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
            scrollEnabled={false}
          />
        </View>
        <View style={styles.dashedLineFirst} />
        <View style={styles.homeAddress}>
          <View style={styles.homeIcon}>
            <FontAwesomeIcon icon={faHouseCircleCheck} size={20} color="#000" />
          </View>
          <View style={styles.flexDirectionColumn}>
            <Text style={styles.homeName}>Ev </Text>
            <Text style={styles.homeCity}>İstanbul, Beşiktaş</Text>
          </View>
          <View style={styles.rightIcon}>
            <FontAwesomeIcon icon={faArrowRight} size={20} color="#000" />
          </View>
        </View>
        <View style={styles.workAddress}>
          <View style={styles.workIcon}>
            <FontAwesomeIcon icon={faBriefcase} size={20} color="#000" />
          </View>
          <View style={styles.flexDirectionColumn}>
            <Text style={styles.workName}>İş </Text>
            <Text style={styles.workCity}>İstanbul, Maslak</Text>
          </View>
          <View style={styles.rightIcon}>
            <FontAwesomeIcon icon={faArrowRight} size={20} color="#000" />
          </View>
        </View>
        <View style={styles.favorites}>
          <View style={styles.favoriteIcon}>
            <FontAwesomeIcon icon={faHeart} size={20} color="#000" />
          </View>
          <Text style={styles.favoritesText}>Kaydedilenler </Text>
          <View style={styles.rightIcon}>
            <FontAwesomeIcon icon={faArrowRight} size={20} color="#000" />
          </View>
        </View>
        <View style={styles.dashedLineSecond} />
        <Text style={styles.previousLocations}>Geçmiş Lokasyonlar</Text>
        <FlatList
          data={previousLocations}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
        <View
          style={[
            styles.overlay,
            {
              opacity: isBackgroundOpacity ? 1 : 0,
            },
          ]}
        />
      </View>
    </ScrollView>
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
  backIcon: {
    marginLeft: 29,
    marginTop: 50,
    zIndex: 60,
  },
  inputContainers: {
    alignItems: 'center',
  },
  FromInputView: {
    width: '87%',
    height: 52,
    borderColor: 'rgba(0,0,0,1)',
    marginEnd: 26,
    marginStart: 26,
    marginTop: 28,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 60,
  },
  FromText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 20,
    color: 'rgba(0,0,0,1)',
  },
  ToInputView: {
    width: '87%',
    height: 52,
    borderColor: 'rgba(0,0,0,1)',
    marginEnd: 26,
    marginStart: 26,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 60,
  },
  ToText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 20,
    color: 'rgba(0,0,0,1)',
  },
  dashedLineFirst: {
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#ADB3BC',
    width: '87%',
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25,
    alignSelf: 'center',
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
    width: '87%',
    marginTop: 45,
    marginLeft: 25,
    marginRight: 25,
    alignSelf: 'center',
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
    width: '87%',
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
    alignSelf: 'center',
  },
  flexDirectionColumn: {
    flexDirection: 'column',
  },
  searchBarListView: {
    width: '87%',
    marginTop: 5,
    zIndex: 60,
    marginLeft: 26,
    marginRight: 26,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  afterSearchViewStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 4,
    height: 57,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  afterSearchText: {
    padding: 10,
    color: '#6A7381',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
    zIndex: 50,
  },
});
