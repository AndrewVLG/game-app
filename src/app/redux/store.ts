import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { Middleware, combineReducers, configureStore } from '@reduxjs/toolkit'

import { cardsReducer } from './cardsSlice/cardsSlice'
import { helpModalReducer } from './helpModalSlice/helpModalSlice'

const middleware: Middleware = (store) => (next) => (action) => {
  if (action.type !== 'cards/setTarget') {
    return next(action)
  }
  const { target } = store.getState().cards
  if (action.type === 'cards/setTarget' && action.payload !== target) {
    return next(action)
  }
}

const reducer = combineReducers({
  cards: cardsReducer,
  helpModal: helpModalReducer,
})

export const store = configureStore({
  reducer,
  middleware: (gdm) => gdm().concat(middleware),
})

export type RootState = ReturnType<typeof reducer>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
