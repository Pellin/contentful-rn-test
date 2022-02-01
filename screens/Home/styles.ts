import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#ededed',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  articleList: {
    paddingTop: 10,
    width: '100%',
  },
  articleCard: {
    borderRadius: 5,
    marginBottom: 10,
    height: 240,
    width: '100%',
  },
  gradient: {
    flex: 1,
    zIndex: 10,
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 260,
    borderRadius: 5,
  },
  headline: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '800',
    paddingHorizontal: 5,
    paddingBottom: 5,
    marginTop: -20,
    zIndex: 20,
  },
  featureImage: {
    flex: 1,
    borderRadius: 5,
    width: '100%',
    height: 260,
    zIndex: 0,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: -4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
})
