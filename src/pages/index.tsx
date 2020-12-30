/* eslint-disable react/prop-types */
// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MdAddShoppingCart } from 'react-icons/md'
import api from '../services/api'
import { formatPrice } from '../util/format'

import * as CartActions from '../store/ducks/cart/actions'

import { ProductList } from '../styles/pages/index'

export default function Home() {
  // Aqui é o array pra onde os produtos vem da api
  const [products, setProducts] = useState([])

  // Aqui é a soma do amount que vc adiciona no carrinho e aparece no index
  const amount = useSelector(state =>
    state.cart.product.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount

      return sumAmount
    }, {})
  )
  // declaração do dispatch
  const dispatch = useDispatch()

  // A chamada api que insere os produtos no array de cima
  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products')

      const data = response.data.map(product => ({
        ...product,
        priceFormated: formatPrice(product.price)
      }))

      setProducts(data)
    }

    loadProducts()
  }, [])
  // a função chamada pelo botão quando vc clica em adicionar ao carrinho, ela é um dispatch que chama uma ação ouvida pelo sagas
  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id))
  }

  return (
    <ProductList>
      {/* O map é pra inserir no index todos os produtos do array produtos */}
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormated}</span>
          {/* O botão que vai chamar a função de adicionar produtos */}
          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />{' '}
              {/* A exibição em tela do amount que veio do useSelector */}
              {amount[product.id] || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}
