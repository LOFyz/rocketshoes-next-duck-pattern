// eslint-disable-next-line no-use-before-define
import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Header from '../components/Header'
import store from '../store'

// Aqui vc taca tudo que quiser que apareça na tela e enos
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    // provider é o que junta a bagaça com tudo dentro da pasta store
    // theme provider é para acessar as cores do tema que fica na pasta styles
    // Header é o componente header que vem da pasta components
    // Component serão as telas em si, o que vai mandar pro body
    // GlobalStyle é o css global
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
