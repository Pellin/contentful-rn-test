import { Text, View, Image, FlatList, ListRenderItem } from 'react-native'
import React, { useContext } from 'react'
import { ContentContext } from '../../contexts/contentful/ContentfulContext'
import { Article } from '../../contexts/contentful/types'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './styles'

const Home = () => {
  const { articles } = useContext(ContentContext)!

  const renderItem: ListRenderItem<Article> = ({ item }) => (
    <View style={[styles.articleCard]}>
      <LinearGradient
        style={styles.gradient}
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        locations={[0.6, 1]}
      />
      <>
        <Image
          style={styles.featureImage}
          source={{
            uri: `https:${item.fields.featureImage.fields.file.url}`,
          }}
        />
        <Text style={styles.headline}>{item.fields.headline}</Text>
      </>
    </View>
  )

  return (
    <View style={styles.container}>
      {articles && articles.length ? (
        <FlatList
          style={styles.articleList}
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
