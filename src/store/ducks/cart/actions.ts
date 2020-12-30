import { action } from 'typesafe-actions'
import { CartTypes, Product } from './types'

// A criação das actions e definição de seus payloads
export const addToCartRequest = (id: number) =>
  action(CartTypes.ADD_TO_CART_REQUEST, id)

export const addToCartSuccess = (product: Product) =>
  action(CartTypes.ADD_TO_CART_SUCCESS, product)

export const removeFromCart = (id: number) =>
  action(CartTypes.REMOVE_FROM_CART, id)

export const updateAmountRequest = (data: { id: number; amount: number }) =>
  action(CartTypes.UPDATE_AMOUNT_REQUEST, data)

export const updateAmountSuccess = (data: { id: number; amount: number }) =>
  action(CartTypes.UPDATE_AMOUNT_SUCCESS, data)
