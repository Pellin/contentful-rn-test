import {
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native'
import React, { useContext, useState } from 'react'
import Checkbox from 'expo-checkbox'
import styles from './styles'
import { UserContext } from '../../contexts/user/UserContext'
import { User } from '../../contexts/user/types'

const CreateAccount = () => {
  const { createAccount } = useContext(UserContext)!

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [pwConfirmation, setPwConfirmation] = useState<string>('')
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const handleCreateAccount = () => {
    const newUser: User = {
      firstName,
      lastName,
      email,
      favorites: [],
      tags: [],
      account: {
        type: 'basic',
        payment: 'swish',
        notifications: false,
        expires: new Date(),
      },
    }

    createAccount(newUser, password)
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>
        <View style={styles.nameInputContainer}>
          <TextInput
            style={[styles.input, styles.nameInput]}
            value={firstName}
            placeholder="Förnamn"
            onChangeText={(text) => setFirstName(text)}
          />
          <TextInput
            style={[styles.input, styles.nameInput]}
            value={lastName}
            placeholder="Efternamn"
            onChangeText={(text) => setLastName(text)}
          />
        </View>
        <TextInput
          autoCapitalize="none"
          textContentType="emailAddress"
          style={styles.input}
          value={email}
          placeholder="E-postadress"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          value={password}
          placeholder="Lösenord"
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          value={pwConfirmation}
          placeholder="Bekräfta lösenord"
          onChangeText={(text) => setPwConfirmation(text)}
        />
        <View style={styles.termsAndConditions}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setIsChecked}
          />
          <Text>
            Jag har förstått{' '}
            <Text style={{ fontWeight: '700' }}>användarvillkoren</Text>
          </Text>
        </View>
        <Pressable
          disabled={!isChecked}
          onPress={handleCreateAccount}
          style={
            isChecked ? styles.button : [styles.button, styles.buttonDisabled]
          }
        >
          <Text style={styles.buttontext}>SKAPA KONTO</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  )
}

export default CreateAccount
