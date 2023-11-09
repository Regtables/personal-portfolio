import { client } from '../sanity'
import { aboutQuery, workQuery } from '../queries'

export const getWorkContent = async () => {
  const workContent = await client.fetch(workQuery())

  return workContent[0].websites
}

export const getAboutContent = async () => {
  const aboutContent = await client.fetch(aboutQuery())

  return aboutContent[0]
}