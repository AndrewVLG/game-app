import { Card } from '../../common/dto/cards.dto'
import { getArray } from '../../common/utils/getArray'

export const counterValues = getArray(9, null).map((_, index) => index + 1)
export const startButtonText = 'START'

export const emptyCard: Card = {
  code: '',
  image: '',
  images: { png: '', svg: '' },
  suit: '',
  value: '',
}
