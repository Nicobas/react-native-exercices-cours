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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import TodoListItem from '../items/TodoListItem';

const TodoListScreen = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');

  const navigation = useNavigation();

  const openDrawer = useCallback(() => {
    // on ouvre le drawer à l'aide de la fonction openDrawer de l'objet navigation, on peut aussi glisser le doigt du bord gauche de l'écran vers l'intérieur
    navigation.openDrawer();
  }, [navigation]);

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
      <TouchableOpacity onPress={openDrawer} style={styles.drawerBtn}>
        <FontAwesome name="navicon" size={30} color={'black'} />
      </TouchableOpacity>
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
  drawerBtn: {
    marginTop: 10,
    marginLeft: 10,
  },
});

export default TodoListScreen;
