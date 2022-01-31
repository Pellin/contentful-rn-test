export interface Author {
  sys: {
    id: string
    createdAt: string
    updatedAt: string
  }
  fields: {
    name: string
    email: string
    articles: Article[]
  }
}

export interface Article {
  sys: {
    id: string
    createdAt: string
    updatedAt: string
    metaData: {
      tags: string[]
    }
  }
  fields: {
    author: Author
    body: object
    category: string
    celebrities: object[]
    headline: string
    images: ArticleImage[]
    featureImage: ArticleImage
  }
}
export interface ArticleImage {
  fields: {
    file: {
      url: string
    }
  }
}

export interface ContentContextInterface {
  articles: any[]
}
