import { createAsyncThunk } from '@reduxjs/toolkit'

import { getArrayWithRandomNumbers } from '../../../common/utils/getArrayWithRandomNumbers'

import { cardsApi } from '../../api/cardsApi'
import { RootState } from '../store'

import { setIsWin } from './cardsSlice'

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
