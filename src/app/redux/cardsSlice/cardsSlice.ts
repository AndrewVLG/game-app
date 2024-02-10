import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Card, DrawCards } from '../../../common/dto/cards.dto'
import { areEqual } from '../../../common/utils/areEqual'

import { asyncHash } from './asyncThunks'

interface InitialState {
  count: number
  cardsOnCanvas: Array<Card>
  result: Array<string>
  isLoading: boolean
  deck_id: string
  remaining: number
  pick: string | null
  target: string | null
  isWin: boolean
}
const initialState: InitialState = {
  count: 5,
  cardsOnCanvas: [],
  result: [],
  isLoading: true,
  deck_id: '',
  remaining: 0,
  pick: null,
  target: null,
  isWin: false,
}

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setDeck(state, { payload }: PayloadAction<string>) {
      state.deck_id = payload
    },

    setCount(state, { payload }: PayloadAction<number>) {
      state.count = payload
    },

    setPick(state, { payload }: PayloadAction<string>) {
      state.pick = payload
    },

    setTarget(state, { payload }: PayloadAction<string | null>) {
      state.target = payload
    },

    makePickInactive(state) {
      state.pick = null
    },
    setIsWin(state, { payload }: PayloadAction<boolean>) {
      state.isWin = payload
    },

    moveCard(state) {
      const pick = state.cardsOnCanvas.find((card) => card.code === state.pick)
      const pickIndex = state.cardsOnCanvas.findIndex(
        (card) => card.code === state.pick
      )

      const target = state.cardsOnCanvas.find(
        (card) => card.code === state.target
      )
      const targetIndex = state.cardsOnCanvas.findIndex(
        (card) => card.code === state.target
      )

      const copyCardsOnCanvas = [...state.cardsOnCanvas]
      copyCardsOnCanvas[targetIndex] = pick as Card
      copyCardsOnCanvas[pickIndex] = target as Card
      state.cardsOnCanvas = copyCardsOnCanvas
      state.pick = null

      state.isWin = areEqual(
        state.result,
        state.cardsOnCanvas.map((card) => card.code)
      )
    },

    setIsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload
    },
    setCards(
      state,
      { payload }: PayloadAction<{ data: DrawCards; deck_id: string }>
    ) {
      state.deck_id = payload.deck_id
      state.cardsOnCanvas = payload.data.cards
      state.result = payload.data.cards.map((card) => card.code)
      state.remaining = payload.data.remaining
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncHash.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(asyncHash.fulfilled, (state, { payload }) => {
      state.cardsOnCanvas = payload
      state.isLoading = false
    })
  },
})

export const cardsReducer = cardSlice.reducer
export const {
  setDeck,
  setPick,
  moveCard,
  setCount,
  makePickInactive,
  setTarget,
  setIsWin,
  setIsLoading,
  setCards,
} = cardSlice.actions
