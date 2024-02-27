import React, {useCallback, useEffect, useMemo, useState} from 'react';
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

const RegisterValidationScreen = () => {
  // Définition des states (un par input)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Validation du password (useState + useEffect)
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  useEffect(() => {
    setIsPasswordValid(password.length >= 3);
  }, [password]);

  // Validation du confirmPassword (useMemo)
  const isConfirmPasswordValid = useMemo(() => {
    return password === confirmPassword;
  }, [password, confirmPassword]);

  // Callback du bouton Envoyer
  const onSubmit = useCallback(() => {
    if (
      !firstName ||
      !lastName ||
      !password ||
      !confirmPassword ||
      !isPasswordValid ||
      !isConfirmPasswordValid
    ) {
      Alert.alert('Merci de compléter le formulaire');
      return;
    }

    Alert.alert(
      'Bonjour ' +
        firstName +
        ' ' +
        lastName +
        ', votre mot de passe est ' +
        password,
    );
  }, [
    confirmPassword,
    firstName,
    isConfirmPasswordValid,
    isPasswordValid,
    lastName,
    password,
  ]);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.container}>
        <Text style={styles.titleText}>Inscription</Text>
        <Image
          style={styles.avatar}
          source={require('../../../../../assets/images/avatar.png')}
        />
        <TextInput
          value={firstName}
          onChangeText={setFirstName}
          style={styles.input}
          placeholder={'Prénom'}
          placeholderTextColor="grey"
        />
        <TextInput
          value={lastName}
          onChangeText={setLastName}
          style={styles.input}
          placeholder={'Nom'}
          placeholderTextColor="grey"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={[styles.input, !isPasswordValid && styles.errorInput]}
          placeholder={'Mot de passe'}
          secureTextEntry={true}
        />
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={[styles.input, !isConfirmPasswordValid && styles.errorInput]}
          placeholder={'Confirmation du mot de passe'}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.submitBtn} onPress={onSubmit}>
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
  errorInput: {
    borderColor: 'red',
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

export default RegisterValidationScreen;
