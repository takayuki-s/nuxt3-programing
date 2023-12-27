const contentfulManagement = require('contentful-management')
const dotenv = require('dotenv-flow')
dotenv.config()

module.exports = async () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.VITE_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  })

  return contentfulClient
    .getSpace(process.env.VITE_CONTENTFUL_SPACE_ID)
    .then((space) =>
      space.getEnvironment(process.env.VITE_CONTENTFUL_ENVIRONMENT_ID),
    )
}
