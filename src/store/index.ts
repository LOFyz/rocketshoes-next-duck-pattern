/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Cart } from './ducks/cart/types'

import rootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'

// Essa é a tipagem do State do carrinho
export interface AplicationState {
  cart: Cart
}
// Essa constante é o middleware criado pelo saga
const sagaMiddleware = createSagaMiddleware()

// Esse é o store que adicionamos no provider da pagina __app, é nele onde ficam os reducers e os middlewares
const store: Store<AplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
// A chamada do middleware
sagaMiddleware.run(rootSaga)
export default store
