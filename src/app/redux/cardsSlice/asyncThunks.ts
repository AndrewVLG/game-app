import { createAsyncThunk } from '@reduxjs/toolkit'

import { getArrayWithRandomNumbers } from '../../../common/utils/getArrayWithRandomNumbers'

import { cardsApi } from '../../api/cardsApi'
import { RootState } from '../store'

export const fetchShuffleCards = createAsyncThunk(
  'cards/fetchShuffleCards',
  async ({ count }: { count: number }) => {
    const { deck_id } = await cardsApi.shuffleCards()

    if (deck_id) {
      localStorage.setItem('deck', deck_id)
    }

    const data = await cardsApi.drawCards({ count, deck_id })
    return { data, deck_id }
  }
)

export const fetchDrawCards = createAsyncThunk(
  'drawCards',
  async ({ deck_id }: { deck_id: string }, { getState }) => {
    const {
      cards: { remaining, count },
    } = getState() as RootState

    const fewCards = remaining < count
    if (fewCards) {
      await cardsApi.reshuffleCards({ deck_id })
    }

    const data = await cardsApi.drawCards({ count, deck_id })
    return { deck_id, data }
  }
)

export const asyncHash = createAsyncThunk(
  'hash',
  async (count: number, { getState }) => {
    const { cards } = getState() as RootState
    const arrayWithRandomNumbers = getArrayWithRandomNumbers({
      from: 0,
      to: count - 1,
    })
    await new Promise((resolve) => setTimeout(() => resolve(1), 1000))
    return arrayWithRandomNumbers.map(
      (index) => cards.cardsOnCanvas[index as number]
    )
  }
)
