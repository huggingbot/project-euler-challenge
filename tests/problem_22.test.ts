import { expect } from 'chai'
import { problem22 } from '../src/problem_22'

describe('Problem 22', () => {
  it('should find the total of all the name scores in the file correctly', () => {
    const expected = 871_198_282
    const result = problem22()

    expect(result).to.be.equal(expected)
  })

  it('should find the total of all the name scores in an unsorted list correctly', () => {
    const input = ['ZACK', 'YEN', 'XAVIER']
    const expected = 290
    const result = problem22(input)

    expect(result).to.be.equal(expected)
  })

  it('should return 0 if input is empty', () => {
    const input = []
    const expected = 0
    const result = problem22(input)

    expect(result).to.be.equal(expected)
  })

  it('should return NaN if given string in list is not in uppercase', () => {
    const input = ['Zack', 'Yen', 'Xavier']
    const result = problem22(input)

    expect(result).to.be.NaN
  })

  it('should return NaN if given string in list is not an alphabet', () => {
    const input = ['¥', 'Ñ', 'o͡o', '1']
    const result = problem22(input)

    expect(result).to.be.NaN
  })
})
