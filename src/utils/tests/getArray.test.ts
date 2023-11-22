import { getArray } from '../getArray'

describe('test: getArray', () => {
  it('should return array with null, length = 10', () => {
    expect(getArray(10, null)).toEqual(new Array(10).fill(null))
    expect(getArray(10, null)).toHaveLength(10)
  })
  it('should return values 1 - 9', () => {
    expect(getArray<null, number>(9, null, (_, i) => i + 1)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ])
  })
  it('should return ["aNaNas", "baNaN"]', () => {
    expect(
      getArray<number, string>(2, NaN, (v, i) => (i ? `ba${v}` : `a${v}as`))
    ).toEqual(['aNaNas', 'baNaN'])
  })
})
