export default defineEventHandler(async (event) => {
  console.log('test')
  const body = await readBody(event) // useBody -> readBody
  const { members } = body
  console.log(members)
  return { members }
})
