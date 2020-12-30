import { all, takeLatest } from 'redux-saga/effects'

import { addToCart, updateAmount } from './cart/sagas'
import { CartTypes } from './cart/types'

export default function* rootSaga() {
  return yield all([
    // Take latest é apenas para pegar o ultimo request caso aconteça mais de um ao mesmo tempo
    // É aqui onde os requests são ouvidos e chamam a action do reducer
    takeLatest<CartTypes, any>(CartTypes.ADD_TO_CART_REQUEST, addToCart),
    takeLatest<CartTypes, any>(CartTypes.UPDATE_AMOUNT_REQUEST, updateAmount)
  ])
}
