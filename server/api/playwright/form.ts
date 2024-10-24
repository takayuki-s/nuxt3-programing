export default defineEventHandler(async (event) => {
  const body = await readBody(event) // useBody -> readBody
  const { members } = body
  const result = members.sort(() => Math.random() - 0.5)
  return { result }
})
