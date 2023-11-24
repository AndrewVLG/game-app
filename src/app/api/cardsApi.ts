import axios from 'axios'

import { CardsResponse, DrawCards } from '../../common/dto/cards.dto'

const baseURL = 'https://deckofcardsapi.com/api/'
const instance = axios.create({
  baseURL,
})

export const cardsApi = {
  async shuffleCards() {
    const response = await instance.get<CardsResponse>(
      'deck/new/shuffle/?deck_count=1'
    )
    return response.data
  },
  async drawCards({ deck_id, count }: { deck_id: string; count: number }) {
    const response = await instance.get<DrawCards>(
      `deck/${deck_id}/draw/?count=${count}`
    )

    return response.data
  },
  async reshuffleCards({ deck_id }: { deck_id: string }) {
    const response = await instance.get<CardsResponse>(
      `deck/${deck_id}/shuffle`
    )
    return response.data
  },
}
