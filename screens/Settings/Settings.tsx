import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../../contexts/user/UserContext'

const Settings = () => {
  const { handleLogout } = useContext(UserContext)!

  return (
    <View style={styles.container}>
      <Pressable onPress={handleLogout} style={styles.button}>
        <Text style={styles.buttonText}>LOGGA UT</Text>
      </Pressable>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#D80A7A',
    width: '70%',
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    paddingVertical: 10,
  },
})
