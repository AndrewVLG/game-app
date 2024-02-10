import { spawn } from 'redux-saga/effects'
import { cardsSaga, fetchShuffleCards } from '../cardsSlice/cardsSaga'

export function* rootSaga() {
  yield spawn(cardsSaga)
}
