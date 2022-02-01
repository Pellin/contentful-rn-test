import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.logo}>24Gossip</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    height: 90,
    justifyContent: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    zIndex: 40,
  },
  logo: {
    color: '#D80A7A',
    fontSize: 20,
    fontWeight: '800',
  },
})
