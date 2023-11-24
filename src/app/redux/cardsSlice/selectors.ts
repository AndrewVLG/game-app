import { createSelector } from '@reduxjs/toolkit'

import { getArray } from '../../../common/utils/getArray'
import { emptyCard } from '../../../pages/RememberCards/rememberCardsPage.const'

import { RootState, store } from '../store'

export const selectPick = (store: RootState) => store.cards.pick
export const selectIsWin = (store: RootState) => store.cards.isWin

export const selectCards = (store: RootState) => store.cards.cardsOnCanvas
export const selectIsLoading = (store: RootState) => store.cards.isLoading
export const selectCount = (store: RootState) => store.cards.count
export const selectCardsOnCanvas = createSelector(
  [selectCards, selectIsLoading, selectCount],
  (cards, isLoading, count) => {
    return isLoading
      ? getArray(count, emptyCard).map((card) => ({
          ...card,
          code: String(Math.random() * Math.random()),
        }))
      : cards
  }
)
