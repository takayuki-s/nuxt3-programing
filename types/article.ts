export type ArticleCardData = {
  id: number
  author: number
  categories: {
    sys: {
      type: string
      linkType: string
      id: string
    }
  }[]
  date: string
  modified: string
  title: string
  link: string
  content: string
  excerpt: string
  thumbnailUrl: string | null
}
