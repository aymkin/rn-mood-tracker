import { dummySum } from './dummy'

describe('just a default dummy test', () => {
  it('dummy sum func', () => {
    expect(dummySum(1, 1)).toBe(2)
    expect(dummySum(-1, 1)).toBe(0)
    expect(dummySum(-1, -1)).toBe(-2)
  })
})
