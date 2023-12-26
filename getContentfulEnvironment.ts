import contentfulManagement from 'contentful-management'
import { EnvironmentGetter } from 'contentful-typescript-codegen'

const getContentfulEnvironment: EnvironmentGetter = () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: import.meta.env.VITE_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  })

  return contentfulClient
    .getSpace(import.meta.env.VITE_CONTENTFUL_SPACE_ID)
    .then((space) =>
      space.getEnvironment(import.meta.env.VITE_CONTENTFUL_ENVIRONMENT_ID),
    )
}

module.exports = getContentfulEnvironment
