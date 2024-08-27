import { ContentfulClientApi, createClient } from "contentful"
import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_LIMIT,
} from "./variables"

export const client: ContentfulClientApi<undefined> = createClient({
  space: CONTENTFUL_SPACE_ID,
  environment: CONTENTFUL_ENVIRONMENT_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
})

export const getContentfulEntries = async (
  contentType: string = "",
  limit: number = 1,
  slug: string = ""
) => {
  let object: any = {
    content_type: contentType,
    limit,
  }
  if (slug !== "") {
    object = {
      content_type: contentType,
      "fields.slug": slug,
    }
  }
  // console.log(`object`, object)

  try {
    const { total, items } = await client.getEntries(object)
    // console.log(`total`, total)

    return items
  } catch (error) {
    console.error(`Error`, error)
    return []
  }
}

export interface LibContentfulSdkInterface {
  client: ContentfulClientApi<undefined>
  getContentfulEntries(contentType: string, limit: number, slug: string): any
}

const LibContentfulSdk: LibContentfulSdkInterface = {
  client,
  getContentfulEntries,
}

export default LibContentfulSdk
