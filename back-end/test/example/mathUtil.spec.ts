import { expect } from 'chai'
import { add } from './mathUtil'

describe('add function', () => {
  it('should correctly add two numbers', () => {
    const result = add(2, 3)
    expect(result).to.equal(5)
  })

  it('should return 0 when adding 0 and 0', () => {
    const result = add(0, 0)
    expect(result).to.equal(0)
  })
})
