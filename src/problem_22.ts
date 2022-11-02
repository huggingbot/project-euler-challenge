import fs from 'fs'
import { join } from 'path'
import { ALPHABETS } from './constants'

/**
 * Problem 22: Names scores
 *
 * Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting
 * it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in
 * the list to obtain a name score.
 *
 * For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in
 * the list. So, COLIN would obtain a score of 938 × 53 = 49714.
 *
 * What is the total of all the name scores in the file?
 */

const NAMES_PATH = join(__dirname, 'p022_names.txt')

const alphabetToWorthMap = ALPHABETS.reduce(
  (obj, char, index) => ({ ...obj, [char]: index + 1 }),
  {} as { [k in typeof ALPHABETS[number]]: number },
)

const getNameWorth = (name: string): number => {
  return name.split('').reduce((worth, char) => worth + alphabetToWorthMap[char], 0)
}

export const problem22 = (inputNames?: string[]): number | never => {
  try {
    let namesArr = inputNames
    if (!namesArr) {
      const names = fs.readFileSync(NAMES_PATH, { encoding: 'utf-8' })
      namesArr = names.split(',')
    }
    return namesArr.sort().reduce((score, name, index) => {
      const strippedName = name.replace(/["]+/g, '')
      return score + (index + 1) * getNameWorth(strippedName)
    }, 0)
  } catch (err) {
    console.error(`Error with problem22: ${err}`)
    throw err
  }
}
