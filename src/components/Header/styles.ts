import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5rem 0;

  img {
    width: 27.6rem;
    height: 3.6rem;
  }
`
export const Cart = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  svg {
    width: 3.6rem;
    height: 3.6rem;
  }

  div {
    text-align: right;
    margin-right: 1rem;

    strong {
      display: block;
      color: #fff;
      font-size: 2rem;

      @media (orientation: portrait) {
        font-size: 2rem;
      }
    }

    span {
      font-size: 1.7rem;
      color: #999;

      @media (orientation: portrait) {
        font-size: 1.7rem;
      }
    }
  }
`
