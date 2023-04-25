// Excercise Level 2 - 4/25/23

// #1
const countries = require('./countries')
const webTechs = require('./web_techs')

console.log(countries)
console.log(webTechs)

// #2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const words = text.split(' ')

console.log(words)
console.log(words.length)

// #3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log('Initial List ', shoppingCart)

const honeyAllergy = true
modifyCart(shoppingCart, honeyAllergy)

function modifyCart(shoppingCart, honeyAllergy) {
    // Add Meat at the beginning of the list
    const checkForMeat = shoppingCart.indexOf('Meat')
    if (checkForMeat != -1) {
        console.log('Already Put Meat on the List')
    } else {
        shoppingCart.unshift('Meat')
        console.log('Added Meat: ', shoppingCart)
    }

    // uUsing ternary to Add Sugar
    const checkForSugar = shoppingCart.indexOf('Sugar')
    checkForSugar != -1 ? console.log('Sugar is already on the list') : shoppingCart.push('Sugar'), console.log('Added Sugar: ', shoppingCart)

    // Remove honey if allergic
    if (honeyAllergy = true) {
        const honeyIndex = shoppingCart.indexOf('Honey')
        shoppingCart.splice(honeyIndex, 1)
        console.log('Remove honey, Allergic: ', shoppingCart)
    }

    // Modify Tea to 'Green Tea'
    const teaIndex = shoppingCart.indexOf('Tea')
    if (teaIndex != -1) {
        shoppingCart[teaIndex] = 'Green Tea'
        console.log('Specified Tea: ', shoppingCart)
    }
}

// #4
const ethiopiaIndex = countries.indexOf('Ethiopia')

if (ethiopiaIndex != -1) {
    console.log('ETHIOPIA')
} else {
    countries.push('Ethiopia')
}

// #5 
const sassIndex = webTechs.indexOf('Sass')
if (sassIndex != -1) {
    console.log('Sass is a preprocess')
} else {
    webTechs.push('Sass')
    console.log('New WebTech Array: ', webTechs)
}

// #6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log('Full Stack: ', fullStack)



// Excercise Level 3 - 4/25/23

// #1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

const sortedAges = ages.sort()
console.log('Sorted Array: ', sortedAges)
// used the spread operator '...' to pass each element as an argument
const minAge = Math.min(...ages)
console.log('Minimum Age: ', minAge)
const maxAge = Math.max(...ages)
console.log('Maximum Age: ', maxAge)

let medianAge
if(sortedAges.length % 2 === 0) {
    medianAge = (sortedAges[sortedAges.length / 2 - 1] + sortedAges[sortedAges.length / 2]) / 2
} else {
    medianAge = sortedAges[Math.floor(sortedAges.length /2)]
}
console.log('Median Age: ', medianAge)

const avgAge = ages.reduce((acc, cur) => acc + cur, 0) / ages.length
console.log('Average Age: ', avgAge)

const ageRange = maxAge - minAge
console.log('Range: ', ageRange)

const diff1 = Math.abs(minAge - avgAge);
const diff2 = Math.abs(maxAge - avgAge);
console.log("Difference between Minimum Age and Average Age:", diff1)
console.log("Difference between Maximum Age and Average Age:", diff2)

// #2
console.log('All Countries: ', countries)
const middleCountry = Math.floor(countries.length / 2)
console.log('Middle Country: ', countries[middleCountry])

// #3 
splitCountries(countries)

function splitCountries(countries) {
    const countryLength = countries.length
    if (countryLength % 2 == 0) {
        const midpoint = Math.ceil(countryLength / 2)
        const firstHalf = countries.splice(0, midpoint)
        console.log('First Half of Countries:', firstHalf)
        console.log('Second Half: ', countries)
    } else {
        console.log('Not Even, adding a country')
        countries.push('Chile')
        console.log(countries)
        splitCountries(countries)
    }
}