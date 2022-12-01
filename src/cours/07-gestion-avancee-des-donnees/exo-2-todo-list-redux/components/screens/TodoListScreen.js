import React, {useCallback, useMemo, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {actions as todoActions} from '../../redux/reducers/todoReducers';

import TodoListItem from '../items/TodoListItem';

const TodoListScreen = () => {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');

  // on récupère data depuis le store dans les données du reducer todo
  const data = useSelector(s => s.todo.data);

  // on récupère la fonction dispatch qui nous permet d'envoyer nos actions au reducer
  const dispatch = useDispatch();

  const addTodo = useCallback(() => {
    if (!input) {
      return;
    }

    const todo = {
      id: Math.random(),
      text: input,
    };

    dispatch(todoActions.addTodo(todo));

    setInput('');
  }, [dispatch, input]);

  const dataFiltered = useMemo(() => {
    return data.filter(o => o.text.includes(search));
  }, [data, search]);

  const renderItem = ({item}) => {
    return <TodoListItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.screen}>
      <TextInput
        style={styles.search}
        value={search}
        onChangeText={setSearch}
        placeholder={'Rechercher ...'}
        placeholderTextColor={'grey'}
      />
      <FlatList
        style={styles.list}
        data={dataFiltered}
        renderItem={renderItem}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder={'A faire ...'}
          placeholderTextColor={'grey'}
        />
        <TouchableOpacity onPress={addTodo} style={styles.addBtn}>
          <Text>Ajouter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 40,
    flex: 1,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    margin: 10,
    paddingHorizontal: 10,
  },
  addBtn: {
    backgroundColor: 'green',
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  search: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    margin: 10,
    paddingHorizontal: 10,
  },
});

export default TodoListScreen;
