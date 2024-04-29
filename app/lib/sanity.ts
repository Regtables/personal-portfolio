import { createClient, SanityClient } from '@sanity/client'

export const client: SanityClient = createClient({
  projectId: 'vqc9o1hb',
  dataset: 'production',
  apiVersion: '2023-05-09',
  useCdn: false,
  token: process.env.SANITY_API_KEY
})