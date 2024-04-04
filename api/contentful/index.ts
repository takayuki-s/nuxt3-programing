import { createClient } from 'contentful'

const LIMIT: number = 10

const spaceId: string = import.meta.env.VITE_CONTENTFUL_SPACE_ID
const accessToken: string = import.meta.env.VITE_CONTENTFUL_CD_ACCESS_TOKEN
const client = createClient({
  space: spaceId,
  accessToken: accessToken,
})

export const fetchEntriesByContentful = async () => {
  try {
    const entries = await client.getEntries({
      content_type: 'blogPage',
      limit: LIMIT,
      order: ['-sys.createdAt'],
    })
    return entries
  } catch {
    console.log('エラーが発生しました')
    return []
  }
}

export const fetchEntryByContentful = async (id: string) => {
  try {
    const entry = await client.getEntry(id)
    return entry
  } catch {
    console.log('エラーが発生しました')
    return {}
  }
}
