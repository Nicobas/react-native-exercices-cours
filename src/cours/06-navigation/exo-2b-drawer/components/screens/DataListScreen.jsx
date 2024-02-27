import React from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import DrawerButton from '../buttons/DrawerButton';

const data = [
  'Julien',
  'Corinne',
  'Arthur',
  'Manon',
  'Antoine',
  'Isabelle',
  'Gérard',
  'Julie',
  'Thomas',
  'Sylvie',
];

const DataListScreen = () => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onLongPress={() => Alert.alert('Bonjour ' + item)}>
        <Text style={styles.itemText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <DrawerButton />
      <FlatList style={styles.container} data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 5,
  },
  itemContainer: {
    backgroundColor: 'grey',
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 20,
    color: 'black',
  },
});

export default DataListScreen;
