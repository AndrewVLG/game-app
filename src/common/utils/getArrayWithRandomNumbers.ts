import {t} from './T'

interface Props {
  from: number
  to: number
}

export const getArrayWithRandomNumbers = ({
  from,
  to,
}: Props): Array<number> => {
  const set = new Set<number>()
  const count = from ? to - from + 1 : to + 1
  while (set.size < count) {
    const random = Math.floor(Math.random() * (to - from + 1)) + from
    set.add(random)
  }
  return Array.from(set)
}
