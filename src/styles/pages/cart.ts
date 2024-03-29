import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  padding: 3rem;
  background: #fff;
  border-radius: 0.4rem;

  footer {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 0.4rem;
      padding: 1.2rem;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }
  }
`

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 1.2rem;
  }

  tbody td {
    padding: 1.2rem;
    border-bottom: 0.1rem solid #eee;
  }

  img {
    height: 10rem;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 0.5rem;
    font-size: 2rem;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 0.1rem solid #ddd;
      border-radius: 0.4rem;
      color: #666;
      padding: 0.6rem;
      width: 5rem;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 0.6rem;
  }
`

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 2.8rem;
    margin-left: 0.5rem;
  }
`
