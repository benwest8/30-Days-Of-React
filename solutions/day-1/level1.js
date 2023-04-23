// Excercise: Level 1 - Arrays in Javacript - 4/23/2023
const emptyArrary = Array();

const moreThanFiveElements = [0, 1, 2, 3, 4, 5, 6]
console.log(moreThanFiveElements.length)
let firstElement = moreThanFiveElements[0]
let middleIndex = Math.floor(moreThanFiveElements.length / 2)
let middleElement = moreThanFiveElements[middleIndex]
let lastElement = moreThanFiveElements[moreThanFiveElements.length-1]
console.log('FirstElement', firstElement)
console.log('Middle Element', middleElement)
console.log('Last Element', lastElement)

const mixedDataTypes = [9, true, 7.14, '4/11/23', {country: 'Canada', city: 'Alberta', }, 8000]
console.log('Mixed Data Types Length: ', mixedDataTypes.length)

const itCompanies = ['Facebook', 'Google', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log('IT COMPANIES', itCompanies)
console.log(itCompanies.length)
let firstCompany = itCompanies[0]
let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)]
let lastCompany = itCompanies[itCompanies.length - 1]
console.log('First Company: ', firstCompany)
console.log('Middle Company: ', middleCompany)
console.log('Last Company: ', lastCompany)
for (const company of itCompanies) {
    console.log(company.toUpperCase())
}
const joinedArray = itCompanies.join(', ')
const sentenceEnding = ' are big IT Companies'
console.log(joinedArray + sentenceEnding)
function findITCompany(company) {
    if (itCompanies.includes(company)) {
        return company
    } else {
        return 'Company Not Found'
    }
}
console.log(findITCompany('IBM'))
console.log(findITCompany('Amazonia'))

const filteredCompanies = []
for (let i = 0; i <itCompanies.length; i++) {
    const company = itCompanies[i]
    let count = 0
    for (let j = 0; j < company.length; j++) {
        if (company[j] == 'o') {
            count++
            if (count > 1) {
                break
            }
        }
    }
    if (count === 2) {
        continue
    }
    filteredCompanies.push(company)
}
console.log('Companies w/o 2 ' + 'o' + ' letters: ', filteredCompanies)

const sortedCompanies = itCompanies.sort()
console.log('Sorted', sortedCompanies)
const reverseAlphabetical = sortedCompanies.reverse()
console.log('Reverse', reverseAlphabetical)
console.log(itCompanies)
console.log('Slice at 3: ', itCompanies.slice(0, 3))
console.log('Slice last 3: ', itCompanies.slice(3,itCompanies.length))
const middleElementOfCompanies = Math.floor(itCompanies.length / 2)
console.log('Slice Middle: ', itCompanies.slice(middleElementOfCompanies, middleElementOfCompanies + 1))

// Finish 19 - 23 - Removals