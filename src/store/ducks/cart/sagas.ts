/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { call, select, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '../../../services/api'
import { formatPrice } from '../../../util/format'

import { addToCartSuccess, updateAmountSuccess } from './actions'
import { Cart, Product } from './types'
import Router from 'next/dist/client/router'
import { AplicationState } from '../../index'

export function* addToCart({ payload: id }) {
  // Faz a chamada do array produtos, procura o produto referente ao id passado na action e verifica se ele existe
  const productExists: Product = yield select((state: AplicationState) =>
    state.cart.product.find(p => p.id === id)
  )
  // faz uma chamada api para consultar o produto no stock, passando o id nos params
  const stock = yield call(api.get, `/stock/${id}`)

  // Cria uma constante com o amount do produto em estoque
  const stockAmount = stock.data.amount
  // faz a verificação se o produto existe e passa o amount atual
  const currentAmount = productExists ? productExists.amount : 0
  // cria um constante do amount atual + 1
  const amount = currentAmount + 1

  // Se o novo amount for maior que o amount em estoque, retorna vazio e um erro
  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque')
    return
  }
  // Se o produto existir e não cair no primeiro if, vai chamar a action ouvida pelo reducer responsavel por atualizar o amount
  if (productExists) {
    yield put(updateAmountSuccess({ id: productExists.id, amount }))
  } else {
    // se o produto não for achado no carrinho, vai fazer uma chamada api e chamar o reducer de adicionar ao carrinho, passando os dados e o amount inicial como 1
    const response = yield call(api.get, `/products/${id}`)

    const data = {
      ...response.data,
      amount: 1,
      priceFormated: formatPrice(response.data.price)
    }

    yield put(addToCartSuccess(data))
    // Caso o produto seja adicionado ao carrinho, o Router do next vai te redirecionar ao carrinho
    yield call(Router.push, '/cart')
  }
}

export function* updateAmount({ payload: { id, amount } }) {
  // se o amount passado na action for igual ou menor que 0, não alterara o estado
  if (amount <= 0) return
  // caso passe na primeira verificação, vai chamar o produto referente ao id, do stock e definira uma constante com o amount dele
  const stock = yield call(api.get, `stock/${id}`)
  const stockAmount = stock.data.amount
  // Se o amount passado for maior que o amount em estoque, não mudará o estado
  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque')
    return
  }
  // Se tudo tiver de acordo, chama a action que atualiza o amount ouvida pelo reducer
  yield put(updateAmountSuccess({ id, amount }))
}
