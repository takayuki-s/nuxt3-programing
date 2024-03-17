import { createClient } from 'contentful'

const LIMIT: number = 10

const spaceId: string = import.meta.env.VITE_CONTENTFUL_SPACE_ID
const accessToken: string = import.meta.env.VITE_CONTENTFUL_CD_ACCESS_TOKEN
const client = createClient({
  space: spaceId,
  accessToken: accessToken,
})
const entries = await client.getEntries({
  content_type: 'blogPage',
  limit: LIMIT,
  order: ['-sys.createdAt'],
})

export const getEntriesByContentful = async () => {
  return await client.getEntries({
    content_type: 'blogPage',
    limit: LIMIT,
    order: ['-sys.createdAt'],
  })
}

export const getEntryByContentful = async (id: string) => {
  return await client.getEntry(id)
}
