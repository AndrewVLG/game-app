import { createAsyncThunk } from '@reduxjs/toolkit'

import { getArrayWithRandomNumbers } from '../../../common/utils/getArrayWithRandomNumbers'

import { cardsApi } from '../../api/cardsApi'
import { RootState } from '../store'

import { setIsWin } from './cardsSlice'

export const fetchShuffleCards = createAsyncThunk(
  'cards/fetchShuffleCards',
  async (_, { getState }) => {
    const { deck_id } = await cardsApi.shuffleCards()
    const {
      cards: { count },
    } = getState() as RootState
    if (deck_id) {
      localStorage.setItem('deck', deck_id)
    }

    const data = await cardsApi.drawCards({ count, deck_id })
    return { data, deck_id }
  }
)

export const fetchDrawCards = createAsyncThunk(
  'drawCards',
  async ({ deck_id }: { deck_id: string }, { getState, dispatch }) => {
    const {
      cards: { remaining, count },
    } = getState() as RootState

    dispatch(setIsWin(false))

    const fewCards = remaining < count
    if (fewCards) {
      await cardsApi.reshuffleCards({ deck_id })
    }

    const data = await cardsApi.drawCards({ count, deck_id })
    return { deck_id, data }
  }
)

export const asyncHash = createAsyncThunk('hash', async (_, { getState }) => {
  const {
    cards: { count, cardsOnCanvas },
  } = getState() as RootState
  const arrayWithRandomNumbers = getArrayWithRandomNumbers({
    from: 0,
    to: count - 1,
  })
  await new Promise((resolve) => setTimeout(() => resolve(1), 1000))
  return arrayWithRandomNumbers.map((index) => cardsOnCanvas[index as number])
})
