import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#ededed',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  articleCard: {
    borderRadius: 5,
    marginBottom: 10,
  },
  headline: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  featureImage: {
    borderRadius: 5,
    width: 350,
    height: 200,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: -4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
})
