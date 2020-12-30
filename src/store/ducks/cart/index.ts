import produce from 'immer'
import { Cart, CartTypes } from './types'

// O estado inicial do carrinho
const INITIAL_STATE: Cart = {
  product: []
}

export default function cart(state = INITIAL_STATE, action) {
  // switch é responsavel por apenas uma action ser ouvida por vez
  switch (action.type) {
    // Declaração do tipo da action, para o redux saber qual action ouvir
    case CartTypes.ADD_TO_CART_SUCCESS:
      // O return da action
      // Esta adicionando o produto no carrinho, o payload é o objeto produto
      return produce(state, draft => {
        draft.product.push(action.payload)
      })
    // Essa action simplesmente recebe um id e verifica se existe no carrinho um produto com esse id, caso ache, da um splice e o remove do carrinho
    case CartTypes.REMOVE_FROM_CART:
      return produce(state, draft => {
        const productIndex = draft.product.findIndex(
          p => p.id === action.payload
        )
        if (productIndex >= 0) {
          draft.product.splice(productIndex, 1)
        }
      })
    case CartTypes.UPDATE_AMOUNT_SUCCESS: {
      // Se tentar diminuir o amount para 0, ele vai returnar o proprio state, não mudando assim o amount
      if (action.payload.amount <= 0) return state
      // Se puder mudar o amount, ele vai verificar no array o index do produto a ter o amount mudado
      return produce(state, draft => {
        const productIndex = draft.product.findIndex(
          p => p.id === action.payload.id
        )
        // Se o index for maior ou igual a 0, ele vai receber o novo amount mandado pelo dispatch, no caso, amount + 1 ou amount - 1
        if (productIndex >= 0) {
          draft.product[productIndex].amount = action.payload.amount
        }
      })
    }
    // Caso ocorra algum problema, retorna o proprio estado e nada é alterado
    default:
      return state
  }
}
