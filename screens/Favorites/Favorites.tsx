import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Favorites = () => {
  return (
    <View style={styles.container}>
      <Text>FAVORITES</Text>
    </View>
  )
}

export default Favorites

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
