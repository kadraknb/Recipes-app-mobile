import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import Storage from '../utils/Storage';

const Login = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userNotValide, setUserNotValide] = useState(true);

  const REGEX_EMAIL = /\S+@\S+\.\S+/;
  const MIN_NAME_LENGTH = 3;

  useEffect(() => {
    loggedInUser()
    return () => {};
  }, []);
  
  useEffect(() => {
    const isValidEmail = REGEX_EMAIL.test(email);
    const isValidName = name.length > MIN_NAME_LENGTH;
    setUserNotValide(!(isValidEmail && isValidName));
    return () => {};
  }, [name, email]);
  
  const loggedInUser = async () => {
    if (await Storage.getData('user')) {
      navigation.navigate('Foods')
    }
  }

  const saveUser = async () => {
    await Storage.saveData('user', { name, email });
  };

  const handleSubmit = () => {
    saveUser();
    navigation.navigate('Foods')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setName(text);
        }}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setEmail(text);
        }}
        value={email}
        keyboardType="email-address"
      />

      <Button title="Login" disabled={userNotValide} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default Login;
