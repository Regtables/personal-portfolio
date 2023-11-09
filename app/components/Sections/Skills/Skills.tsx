import React from 'react'

import SkillCardLg from '../../Cards/SkillCardLg/SkillCardLg'
import SkillCardSml from '../../Cards/SkillCardSml/SkillCardSml'
import SkillCardMd from '../../Cards/SkillCardMd/SkillCardMd'

const LG_CARDS = [
  {
    title: 'Modern',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    title: 'Creative',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    title: 'Full Stack',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
]

const SML_CARDS = [
  {
    skill: 'javacript',
    icon: '/javascript.png'
  },
  {
    skill: 'css',
    icon: '/css.png'
  },
  {
    skill: 'html',
    icon: '/html.png'
  },
  {
    skill: 'react',
    icon: '/react.png'
  },
  {
    skill: 'next.js',
    icon: '/next.png'
  },
  {
    skill: 'git',
    icon: '/git.png'
  },
  {
    skill: 'redux',
    icon: '/redux.png'
  },
  {
    skill: 'node',
    icon: '/node.png'
  },
  {
    skill: 'express',
    icon: '/express.png'
  },
  {
    skill: 'mongDB',
    icon: '/mongo.png'
  },
  {
    skill: 'sass',
    icon: '/sass.png'
  },
  {
    skill: 'json web token',
    icon: '/jwt.png'
  },
  {
    skill: 'figma',
    icon: '/figma.png'
  },
  {
    skill: 'tailwind css',
    icon: '/tailwind.png'
  },
  {
    skill: 'typescript',
    icon: '/typescript.png'
  },
  {
    skill: 'sanity.io',
    icon: '/sanity.svg',
    width: 60,
    height: 60,
  },
]

const MD_CARDS_1 = [
  {
    title: 'Leadership',
    points: [
      'Decisive',
      'Accountable',
      'Manages Resources',
      'Instrinsictly Motivated',
      'Orginized'
    ]
  },
  {
    title: 'Critical Thinking',
    points: [
      'Problem Solving',
      'Adaptable',
      'Persistent',
      'Skeptical',
      'Reasonable'
    ]
  }
]

const MD_CARDS_2 = [
  {
    title: 'Creativity',
    points: [
      'Out of the box',
      'Intuitive',
      'Commited to cool',
      'Fun Details',
      'Experimental'
    ]
  },
  {
    title: 'Social',
    points: [
      'Kind',
      'Talkative',
      'Loyal',
      'Quirky',
      'Warm'
    ]
  }
]

const Skills = () => {

  return (
    <div className='flex h-[95%] gap-2'>
      <div className='flex-[0.5] grid grid-rows-3 gap-2 h-full'>
        <div className='grid grid-cols-8 gap-1'>
          {SML_CARDS.map((card, i) => (
            <SkillCardSml card={card} i = {i} key = {i} />
          ))}
        </div>

        <div className='grid grid-cols-2 gap-2 h-full'>
          {MD_CARDS_1.map((card, i) => (
            <SkillCardMd card = {card} i = {i+1} key = {i} />
          ))}
        </div>

        <div className='grid grid-cols-2 gap-2 h-full'>
          {MD_CARDS_2.map((card, i) => (
            <SkillCardMd card = {card} i = {i} key = {i} />
          ))}
        </div>
      </div>

      <div className='flex-[0.5] grid grid-rows-3 gap-2 h-full'>
        {LG_CARDS.map((card, i) => (
          <SkillCardLg card={card} i = {i} key = {i} />
        ))}
      </div>
    </div>
  )
}

export default Skills