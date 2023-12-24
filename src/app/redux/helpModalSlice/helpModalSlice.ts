import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ModalContent = {
  title: string | null
  message: string | string[] | null
}

interface Init {
  current: string | null
  modalContent: ModalContent
}

const initialState: Init = {
  current: null,
  modalContent: {
    title: null,
    message: null,
  },
}

const helpModalSlice = createSlice({
  initialState,
  name: 'helpModal',
  reducers: {
    setModalContent(state, { payload }: PayloadAction<ModalContent>) {
      state.modalContent = payload
    },
    setCurrent(state, {payload}: PayloadAction<string | null>) {
      state.current = payload
    }
  },
})

export const helpModalReducer = helpModalSlice.reducer
export const { setModalContent, setCurrent } = helpModalSlice.actions