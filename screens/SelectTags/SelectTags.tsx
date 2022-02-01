import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'

import { NavigationScreenProp } from 'react-navigation'
import { UserContext } from '../../contexts/user/UserContext'
import { useNavigation } from '@react-navigation/native'

const SelectTags = () => {
  const { user } = useContext(UserContext)!

  return (
    <View style={styles.container}>
      <Text style={styles.header}>SELECT TAGS</Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Done</Text>
      </Pressable>
    </View>
  )
}

export default SelectTags

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#455499',
    borderRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    paddingVertical: 10,
  },
})
