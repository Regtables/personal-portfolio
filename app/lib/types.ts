export type Section = {
  heading: string,
  children: React.ReactNode,
  hero?: boolean,
  left?: boolean
}

export type Webiste = {
  name: string,
  image: any,
  links: {
    url: string,
    github: string
  }
  type: string,
  logo: any,
  stack: string[],
  description: string
}

export type SkillType = {
  skill: string,
  logo: any
}

export type AboutType = {
  title: string,
  description: string
}

export type TimelineSection = {
  year: string,
  activity: string,
  description: string
}

export type ProfileType = {
  images: any[],
  bio: any[],
  metrics: {
    name: string,
    age: string,
    nationality: string,
    residence: string,
    phone: string,
    email: string
  }
}

export type SkillCardContent = {
  icon?: any,
  title?: any,
  text?: any
}

export type QuadrantType = {
  major: string,
  minor: string
}
