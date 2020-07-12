import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../components/GlobalStyle'
import theme from '../themes/default'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Component {...pageProps} />
        </React.Fragment>
      </ThemeProvider>
    )
  }
}
