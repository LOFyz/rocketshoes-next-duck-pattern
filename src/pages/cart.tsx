/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-use-before-define
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md'

import * as CartActions from '../store/ducks/cart/actions'

import { formatPrice } from '../util/format'

import { Container, ProductTable, Total } from '../styles/pages/cart'

export default function Cart() {
  // esse map é responsavel por multiplicar o valor do produto pelo amount no carrinho, dando o subtotal
  const cart = useSelector(state =>
    state.cart.product.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount)
    }))
  )
  // esse reduce vai fazer o mesmo que o map de cima, só que ao inves de dar um subtotal pra cada produto, vai somar todos em uma unica constante
  const total = useSelector(state =>
    formatPrice(
      state.cart.product.reduce(
        (totalSum, product) => totalSum + product.price * product.amount,
        0
      )
    )
  )
  // declaração do dispatch
  const dispatch = useDispatch()
  // função que será chamada pelo botão de aumentar a quantidade do mesmo produto no carrinho
  // ele é um dispatch que chama uma action ouvida pelo sagas
  function increment(product) {
    dispatch(
      CartActions.updateAmountRequest({
        id: product.id,
        amount: product.amount + 1
      })
    )
  }

  // função que será chamada pelo botão de diminuir a quantidade do mesmo produto no carrinho
  // ele é um dispatch que chama uma action ouvida pelo sagas
  function decrement(product) {
    dispatch(
      CartActions.updateAmountRequest({
        id: product.id,
        amount: product.amount - 1
      })
    )
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {/* Esse map é usado para adicionar um tr de cada produto no carrinho */}
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    {/* Aqio são os botões de aumentar e diminuir o amount */}
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    // Esse botão ta chamando o dispatch direto no arrowfunction do onClick, a action chamada por esse dispatch é ouvida direto pelo redux
                    dispatch(CartActions.removeFromCart(product.id))
                  }}
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  )
}
