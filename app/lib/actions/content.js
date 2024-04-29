import { client } from '../sanity'
import { aboutQuery, workQuery } from '../queries'

export const getWorkContent = async () => {
  const workContent = await client.fetch(workQuery())
  
  const { websites, websites2 } = workContent[0]

  return { websites, websites2 }
}

export const getAboutContent = async () => {
  const aboutContent = await client.fetch(aboutQuery())

  return aboutContent[0]
}