import { problem1, problem1Optimized } from './problem_1'
import { problem22 } from './problem_22'

const main = (): void => {
  const input1 = 1000
  const output1 = problem1(input1)
  console.log(`Answer to problem 1 with input ${input1}: ${output1}`)

  const input1Optimized = 1000
  const output1Optimized = problem1Optimized(input1Optimized)
  console.log(`Answer to problem 1 (optimized) with input ${input1Optimized}: ${output1Optimized}`)

  const output22 = problem22()
  console.log(`Answer to problem 22: ${output22}`)
}

main()
