export interface CardsResponse {
  success: boolean
  deck_id: string
  shuffled: boolean
  remaining: number
}

type ImagesKeys = 'svg' | 'png'
type Images = Record<ImagesKeys, string>
export interface Card {
  code: string
  image: string
  images: Images
  value: string
  suit: string
}

export interface DrawCards extends Omit<CardsResponse, 'shuffled'> {
  cards: Array<Card>
}
