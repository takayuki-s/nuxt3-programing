// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful'
import { Document } from '@contentful/rich-text-types'

export interface IBlogPageFields {
  /** Title */
  title?: string | undefined

  /** Body */
  body?: Document | undefined

  /** Thumbnail */
  thumbnail?: Asset | undefined

  /** Recommended posts */
  recommendedPosts?: Entry<{ [fieldId: string]: unknown }>[] | undefined

  /** excerpt */
  excerpt?: string | undefined

  /** markdown */
  markdown?: string | undefined
}

/** Blog page with title, body, image, thumbnail, date, and other recommended posts */

export interface IBlogPage extends Entry<IBlogPageFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'blogPage'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export type CONTENT_TYPE = 'blogPage'

export type IEntry = IBlogPage

export type LOCALE_CODE = 'en-US'

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US'
