import { getArrayWithRandomNumbers } from '../getArrayWithRandomNumbers'

describe('to - from', () => {
  it('1 - 5', () => {
    expect(getArrayWithRandomNumbers({ from: 1, to: 5 }).sort()).toEqual([
      1, 2, 3, 4, 5,
    ])
    expect(getArrayWithRandomNumbers({ from: 2, to: 5 }).sort()).toEqual([
      2, 3, 4, 5,
    ])
    expect(getArrayWithRandomNumbers({ from: 0, to: 5 }).sort()).toEqual([
      0, 1, 2, 3, 4, 5,
    ])
  })
})
