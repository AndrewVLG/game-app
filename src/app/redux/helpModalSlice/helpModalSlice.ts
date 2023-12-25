import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Init {
  current: string | null
}

const initialState: Init = {
  current: null,
}

const helpModalSlice = createSlice({
  initialState,
  name: 'helpModal',
  reducers: {
    setCurrent(state, { payload }: PayloadAction<string | null>) {
      state.current = payload
    },
  },
})

export const helpModalReducer = helpModalSlice.reducer
export const { setCurrent } = helpModalSlice.actions
