export const skillsQuery = () => {
  const query = '*[_type == "skills"]'

  return query
}

export const workQuery = () => {
  const query = '*[_type == "work"]{websites[]->, websites2[]->}'

  return query
}

export const aboutQuery = () => {
  const query = '*[_type == "about"]'
  
  return query
}