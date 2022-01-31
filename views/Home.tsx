import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ContentContext } from '../contexts/contentful/ContentfulContext'

const Home = () => {
  const { articles } = useContext(ContentContext)!

  return (
    <View style={styles.container}>
      {articles && articles.length ? (
        <View>
          <Text>{articles[0].fields.headline}</Text>
          <Text>{articles[1].fields.headline}</Text>
        </View>
      ) : null}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
