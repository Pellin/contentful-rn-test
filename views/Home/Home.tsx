import { Text, View, Image, FlatList, ListRenderItem } from 'react-native'
import React, { useContext } from 'react'
import { ContentContext } from '../../contexts/contentful/ContentfulContext'
import { Article } from '../../contexts/contentful/types'
import styles from './styles'

const Home = () => {
  const { articles } = useContext(ContentContext)!

  const renderItem: ListRenderItem<Article> = ({ item }) => (
    <View style={[styles.articleCard]}>
      <Text style={styles.headline}>{item.fields.headline}</Text>
      <Image
        style={styles.featureImage}
        source={{
          uri: `https:${item.fields.featureImage.fields.file.url}`,
        }}
      />
    </View>
  )

  return (
    <View style={styles.container}>
      {articles && articles.length ? (
        <FlatList
          data={articles}
          renderItem={renderItem}
          keyExtractor={(item) => item.sys.id}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  )
}

export default Home
