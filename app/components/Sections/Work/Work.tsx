import React from 'react'

import { getWorkContent } from '../../../lib/actions/content'
import { Webiste } from '@/app/lib/types'
import WebsiteCard from '../../Cards/WebsiteCard/WebsiteCard'

const Work = async () => {
  const work = await getWorkContent()

  return (
    <div className='grid grid-cols-3 gap-2 h-full'>
      {work.map((website: Webiste, i: number) => (
        <div>
          <WebsiteCard website = {website} i = {i} key = {i} />
        </div>
      ))}
    </div>
  )
}

export default Work