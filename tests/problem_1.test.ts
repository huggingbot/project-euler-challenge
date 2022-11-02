import { expect } from 'chai'
import { problem1, problem1Optimized } from '../src/problem_1'

describe('Problem 1', () => {
  it('should find the sum of all the multiples of 3 or 5 below 1000 correctly', () => {
    const input = 1_000
    const expected = 233_168
    const result = problem1(input)

    expect(result).to.be.equal(expected)
  })

  it('should find the sum of all the multiples of 3 or 5 below 1000 correctly (optimized)', () => {
    const input = 1_000
    const expected = 233_168
    const result = problem1Optimized(input)

    expect(result).to.be.equal(expected)
  })

  it('should find the sum of all the multiples of 3 or 5 below 10 correctly', () => {
    const input = 10
    const expected = 23
    const result = problem1(input)

    expect(result).to.be.equal(expected)
  })

  it('should find the sum of all the multiples of 3 or 5 below 10 correctly (optimized)', () => {
    const input = 10
    const expected = 23
    const result = problem1Optimized(input)

    expect(result).to.be.equal(expected)
  })
})
