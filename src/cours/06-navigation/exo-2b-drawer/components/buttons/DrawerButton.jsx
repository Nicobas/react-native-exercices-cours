import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DrawerButton = () => {
  const navigation = useNavigation();

  const openDrawer = useCallback(() => {
    // on ouvre le drawer à l'aide de la fonction openDrawer de l'objet navigation, on peut aussi glisser le doigt du bord gauche de l'écran vers l'intérieur
    navigation.openDrawer();
  }, [navigation]);

  return (
    <TouchableOpacity onPress={openDrawer} style={styles.container}>
      <FontAwesome name="navicon" size={30} color={'black'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
  },
});

export default DrawerButton;
