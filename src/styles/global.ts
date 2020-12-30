import { createGlobalStyle } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 62.5%;

    @media(min-width: 800px){
      font-size: 46.5%;
    }

    @media(min-width: 1360px){
      font-size: 98.5%;
    }

    @media(min-width: 1400px){
      font-size: 99.5%;
    }

    @media(min-width: 1920px){
      font-size: 114.5%;
    }


    @media(orientation: portrait) {
      @media(min-width: 280px){
        font-size: 27.5%;
      }

      @media(min-width: 360px){
        font-size: 32.5%;
      }

      @media(min-width: 1024px){
        font-size: 105.5%;
      }
    }
  }

  body {
    width: 100%;
    background: #191920 url('assets/background.svg') no-repeat center top;
    -webkit-font-smoothing: antialiased;
    justify-content: center;
  }

  body, html {
    display: flex;
  }

  body, input, button, strong{
    font: 1.4rem Roboto, sans-serif;
  }

  #__next{
    max-width: 102rem;
    margin: 0;
    flex: 1;
    padding: 0 2rem 5rem;
  }

  button {
    cursor: pointer;
  }
`
