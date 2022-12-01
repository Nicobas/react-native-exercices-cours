import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TodoListItem from './TodoListItem';

const PersistentTodoListScreen = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');

  const loadData = useCallback(async () => {
    // on récupère le json (texte) dans le AsyncStorage, on le parse et on l'envoie dans data
    const jsonData = await AsyncStorage.getItem('todoList');

    if (!jsonData) {
      return;
    }

    const newData = JSON.parse(jsonData);
    setData(newData);
  }, []);

  const saveData = useCallback(async () => {
    // on converti les data en json (texte) et on les enregistre dans le AsyncStorage
    const jsonData = JSON.stringify(data);
    await AsyncStorage.setItem('todoList', jsonData);
  }, [data]);

  useEffect(() => {
    // on charge les données à la création du composant
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // on enregistre les données quand data change de valeur
    saveData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const addTodo = useCallback(() => {
    if (!input) {
      return;
    }

    const todo = {
      id: Math.random(),
      text: input,
    };

    const newData = [...data, todo];

    setData(newData);
    setInput('');
  }, [data, input]);

  const deleteTodo = useCallback(
    item => {
      const newData = data.filter(o => o.id !== item.id);

      setData(newData);
    },
    [data],
  );

  const dataFiltered = useMemo(() => {
    return data.filter(o => o.text.includes(search));
  }, [data, search]);

  const renderItem = ({item}) => {
    return <TodoListItem item={item} onDelete={() => deleteTodo(item)} />;
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

export default PersistentTodoListScreen;
