import { areEqual } from '../areEqual'

describe('areEqual test', () => {
  it('should be Equal', () => {
    expect(areEqual([1, 2], [1, 2])).toBeTruthy()
    expect(areEqual([1, 2], [1, 2, 5])).toBeFalsy()
    expect(areEqual([1, NaN], [1, NaN])).toBeTruthy()
  })
})
