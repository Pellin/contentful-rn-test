import React, { useEffect, useState } from 'react'
const { createClient } = require('contentful/dist/contentful.browser.min.js')
import { ContentContextInterface, Article } from './types'
import { CF_SPACE_ID, CF_ACCESS_KEY } from '@env'

const client = createClient({
  space: CF_SPACE_ID,
  accessToken: CF_ACCESS_KEY,
})

export const ContentContext =
  React.createContext<ContentContextInterface | null>(null)

const ContentContextProvider: React.FC = (props) => {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    client
      .getEntries({
        content_type: 'article',
      })
      .then((entries: { items: Article[] }) => {
        setArticles(entries.items)
      })
  }, [])

  const contentContext: ContentContextInterface = {
    articles: articles!,
  }

  return (
    <ContentContext.Provider value={contentContext}>
      {props.children}
    </ContentContext.Provider>
  )
}

export default ContentContextProvider
