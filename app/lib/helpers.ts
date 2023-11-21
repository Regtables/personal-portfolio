import next from '../public/next-logo.png'
import sanity from '../public/sanity-logo.png'
import redux from '../public/redux-logo.png'
import javascript from '../public/JavaScript-logo.png'
import typescript from '../public/ts-logo.png'
import mui from '../public/mui-logo.png'

export const renderStackLogo = (logo: string) => {
  if(logo === 'next'){
    return next
  } else if (logo === 'sanity'){
    return sanity
  } else if (logo === 'redux'){
    return redux
  } else if (logo === 'typescript'){
    return typescript
  } else if (logo === 'javascript'){
    return javascript
  } else if (logo === 'mui'){
    return mui
  }
}