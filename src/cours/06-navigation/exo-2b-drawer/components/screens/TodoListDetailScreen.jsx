import React, {useCallback} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import DrawerButton from '../buttons/DrawerButton';

const TodoListDetailScreen = ({route}) => {
  const navigation = useNavigation();

  const {item} = route.params;

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <DrawerButton />
      <TouchableOpacity onPress={goBack}>
        <Text style={styles.goBackText}>⬅️</Text>
      </TouchableOpacity>
      <Text style={styles.titleText}>Ma ToDo :</Text>
      <Text style={styles.todoText}>{item.text}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  goBackText: {
    fontSize: 30,
  },
  titleText: {
    color: 'black',
    fontSize: 20,
    marginTop: 20,
  },
  todoText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default TodoListDetailScreen;
