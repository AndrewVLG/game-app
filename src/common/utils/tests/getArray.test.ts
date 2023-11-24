import { getArray } from '../getArray'

describe('test: getArray', () => {
  it('should return array with null, length = 10', () => {
    expect(getArray(10, null)).toEqual(new Array(10).fill(null))
    expect(getArray(10, null)).toHaveLength(10)
  })
})
