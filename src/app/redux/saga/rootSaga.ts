import { spawn } from 'redux-saga/effects'

import { cardsSaga } from '../cardsSlice/cardsSaga'

export function* rootSaga() {
  yield spawn(cardsSaga)
}
