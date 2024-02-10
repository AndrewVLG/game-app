import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import createMiddleware from 'redux-saga'

import { Middleware, combineReducers, configureStore } from '@reduxjs/toolkit'

import { cardsReducer } from './cardsSlice/cardsSlice'
import { helpModalReducer } from './helpModalSlice/helpModalSlice'
import { rootSaga } from './saga/rootSaga'

const middleware: Middleware = (store) => (next) => (action) => {
  if (action.type !== 'cards/setTarget') {
    return next(action)
  }
  const { target } = store.getState().cards
  if (action.type === 'cards/setTarget' && action.payload !== target) {
    return next(action)
  }
}

const sagaMiddleware = createMiddleware()

const reducer = combineReducers({
  cards: cardsReducer,
  helpModal: helpModalReducer,
})

export const store = configureStore({
  reducer,
  middleware: (gdm) => gdm().concat(middleware, sagaMiddleware),
})
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof reducer>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
