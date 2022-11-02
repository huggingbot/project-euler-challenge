/**
 * Problem 1: Multiples of 3 or 5
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

// Brute force approach
// Time complexity of Ω(n)
export const problem1 = (n: number): number => {
  let result = 0

  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i
    }
  }
  return result
}

// Optimized approach
// Time complexity of Ω(1)
// Sum of 1 to n numbers: n(n+1)/2
// Sum of all the multiples of m up to n: m(n/m)(n/m+1)/2
// Sum of all the multiples of 3 and 5 up to n: (3(n/3)(n/3+1)/2) + (5(n/5)(n/5+1)/2) - <common multiples of 3 and 5 up to n>
// Common multiple of 3 and 5 is a multiple of the least common multiple (LCM), which is 15

const sumMultipleOf = (m: number, n: number): number => {
  return Math.floor((m * Math.floor(n / m) * (Math.floor(n / m) + 1)) / 2)
}

export const problem1Optimized = (n: number): number => {
  return sumMultipleOf(3, n - 1) + sumMultipleOf(5, n - 1) - sumMultipleOf(15, n - 1)
}
