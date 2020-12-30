// Os types das actions
export enum CartTypes {
  ADD_TO_CART_REQUEST = '@cart/ADD_REQUEST',
  ADD_TO_CART_SUCCESS = '@cart/ADD_SUCCESS',
  REMOVE_FROM_CART = '@cart/REMOVE',
  UPDATE_AMOUNT_REQUEST = '@cart/UPDATE_AMOUNT_REQUEST',
  UPDATE_AMOUNT_SUCCESS = '@cart/UPDATE_AMOUNT_SUCCESS'
}

// A tipagem do produto
export interface Product {
  id: number
  title: string
  price: number
  amount: number
  image: string
  priceFormatted: string
}

// A tipagem do carrinho
export interface Cart {
  product: Product[]
}
