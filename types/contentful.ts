type ContentfulSystemFields = {
  id: string
  type: string
  createdAt: string
  updatedAt: string
  revision: number
}

type ContentfulLink = {
  sys: ContentfulSystemFields
}

type ContentfulAsset = {
  sys: ContentfulSystemFields
  fields: {
    // ここにアセットのフィールドを定義
    file: {
      url: string
      details: {
        size: number
        image: {
          width: number
          height: number
        }
      }
    }
  }
}

type ContentfulEntry<T> = {
  sys: ContentfulSystemFields
  fields: T
}

// 例: 記事の Content Type に合わせた型定義
type ArticleFields = {
  title: string
  content: string
  image: ContentfulLink
}

// 記事一覧を取得するAPIレスポンスの型定義
type GetEntriesResponse = {
  items: ContentfulEntry<ArticleFields>[]
  // 他にも必要なプロパティがあれば追加
}

// アセットを取得するAPIレスポンスの型定義
type GetAssetResponse = {
  fields: {
    file: {
      url: string
      details: {
        size: number
        image: {
          width: number
          height: number
        }
      }
    }
  }
  // 他にも必要なプロパティがあれば追加
}
