import { createAction } from '@reduxjs/toolkit'

export const getShuffledCards = createAction('cards/getShuffledCards')
export const getCards = createAction<string>('cards/getCards')
