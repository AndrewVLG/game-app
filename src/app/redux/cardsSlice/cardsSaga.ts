import { call, put, select, take, takeEvery } from 'redux-saga/effects'

import { PayloadAction } from '@reduxjs/toolkit'

import { CardsResponse, DrawCards } from '../../../common/dto/cards.dto'
import { cardsApi } from '../../../app/api/cardsApi'

import { setCards, setIsLoading, setIsWin } from './cardsSlice'
import { getCards, getShuffledCards } from './actions'
import { selectCount, selectRemaining } from './selectors'

export function* fetchShuffleCards() {
  try {
    yield take(getShuffledCards)
    const { deck_id }: CardsResponse = yield call(cardsApi.shuffleCards)
    yield put(setIsLoading(true))

    const count: number = yield select(selectCount)

    if (deck_id) {
      localStorage.setItem('deck', deck_id)
    }
    const data: DrawCards = yield call(cardsApi.drawCards, { count, deck_id })
    yield put(setCards({ data, deck_id }))
    yield put(setIsLoading(false))
  } catch (e) {
    console.log(e)
  }
}

export function* fetchGetCards({ payload }: PayloadAction<string>) {
  const count: number = yield select(selectCount)
  const remaining: number = yield select(selectRemaining)
  yield put(setIsLoading(true))
  yield put(setIsWin(false))

  if (remaining < count) {
    yield call(cardsApi.reshuffleCards, { deck_id: payload })
  }
  const data: DrawCards = yield call(cardsApi.drawCards, {
    count,
    deck_id: payload,
  })
  yield put(setCards({ data, deck_id: payload }))
  yield put(setIsLoading(false))
}

export function* cardsSaga() {
  yield takeEvery(getShuffledCards, fetchShuffleCards)
  yield takeEvery(getCards, fetchGetCards)
}
