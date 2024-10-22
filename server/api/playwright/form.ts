export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  const { members } = body
  console.log(members)
  return { members }
})
