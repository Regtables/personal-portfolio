import { createClient, SanityClient } from '@sanity/client'

export const client: SanityClient = createClient({
  projectId: 'vqc9o1hb',
  dataset: 'production',
  apiVersion: '2023-05-09',
  useCdn: false,
  token: 'skWVNuii5ZEUx7H9f4iT7UUUjokpbUrS6dXHaN0nQHJE8FHRiMCTcxpSuAHE3OMV0sLZWd7xuumbtaNZGVXgbpACnHYrzGJWCMi4Yh3J8swTaQAGuuly6Pt3ogna8Q9JJOyy4FRFYt5iAzq8OYbSKbUuePii0V8bTVO2Qq7ij4naSUkYmRiJ'
})