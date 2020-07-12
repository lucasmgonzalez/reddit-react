import {createGlobalStyle} from 'styled-components'

import normalize from './normalize'

export default createGlobalStyle`
  * {
    font-family: ${({theme}) => theme.font.family};
  }

  html {
    font-size: ${({theme}) => theme.font.size}
  }

  ${normalize}
`
