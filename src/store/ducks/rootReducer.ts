import { combineReducers } from 'redux'

import cart from './cart/index'

// Simplesmente a combinação dos reducers que vão ser adicionados no store do index
export default combineReducers({
  cart
})
