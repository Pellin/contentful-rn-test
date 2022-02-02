import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native'
import { UserContext } from '../../contexts/user/UserContext'

const Login = () => {
  const navigation = useNavigation()
  const { handleLogin, promptAsync } = useContext(UserContext)!
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleCreateAccount = () => {
    // @ts-ignore
    navigation.navigate('Skapa nytt konto')
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Pressable
        onPress={() => promptAsync()}
        style={[styles.button, styles.googleButton]}
      >
        <Text style={styles.googleButtontext}>LOGGA IN MED GMAIL</Text>
      </Pressable>
      <Text style={{ marginVertical: 20 }}>Eller</Text>
      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize="none"
          placeholder="E-postadress"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Lösenord"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => handleLogin(email, password)}
        >
          <Text style={styles.buttontext}>LOGGA IN</Text>
        </Pressable>
        <Text
          style={{
            marginBottom: 5,
            fontWeight: '500',
            fontSize: 16,
            color: '#D80A7A',
          }}
        >
          Glömt lösenord?
        </Text>
        <Text style={{ marginVertical: 20 }}>Eller</Text>
        <Pressable onPress={handleCreateAccount} style={[styles.button]}>
          <Text style={styles.buttontext}>SKAPA NYTT KONTO</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    borderColor: '#777',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '70%',
    justifyContent: 'center',
    marginTop: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#D80A7A',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 25,
    marginBottom: 10,
  },
  googleButton: {
    backgroundColor: '#fff',
    borderColor: '#4285F4',
    borderWidth: 2,
    width: '70%',
  },
  buttontext: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  googleButtontext: {
    color: '#4285F4',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782f9',
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: '#0782f9',
    fontWeight: '700',
    fontSize: 16,
  },
})
