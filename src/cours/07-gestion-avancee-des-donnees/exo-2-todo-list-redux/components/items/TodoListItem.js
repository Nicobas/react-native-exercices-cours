import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {actions as todoActions} from '../../redux/reducers/todoReducers';

const TodoListItem = ({item}) => {
  // on récupère la fonction dispatch qui nous permet d'envoyer nos actions au reducer
  const dispatch = useDispatch();

  const deleteTodo = useCallback(() => {
    dispatch(todoActions.removeTodo(item));
  }, [dispatch, item]);

  return (
    <View style={styles.container}>
      <View style={styles.todoTextContainer}>
        <Text style={styles.todoText}>{item.text}</Text>
      </View>
      <TouchableOpacity onPress={deleteTodo} style={styles.deleteBtn}>
        <Text style={styles.deleteText}>Supprimer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gray',
    marginHorizontal: 5,
    marginTop: 5,
    paddingLeft: 10,
  },
  deleteBtn: {
    backgroundColor: 'red',
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  todoTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  todoText: {
    color: 'black',
  },
  deleteText: {
    color: 'black',
  },
});

export default TodoListItem;
