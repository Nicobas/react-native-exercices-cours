import React from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  SafeAreaView,
  Alert,
  StyleSheet,
} from 'react-native';

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.container}>
        <Text style={styles.titleText}>Inscription</Text>
        <Image
          style={styles.avatar}
          source={require('../../../assets/images/avatar.png')}
        />
        <TextInput
          style={styles.input}
          placeholder={'Prénom'}
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.input}
          placeholder={'Nom'}
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.input}
          placeholder={'Mot de passe'}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder={'Confirmation du mot de passe'}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => Alert.alert('Inscription enregistrée')}>
          <Text>Envoyer</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  titleText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    borderColor: 'grey',
    backgroundColor: '#b8b8b8',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 15,
    paddingHorizontal: 10,
    height: 50,
  },
  submitBtn: {
    width: 200,
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RegisterScreen;
