'use strict';

const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = $('#includeUppercase')
const includeNumbersElement = $('#includeNumbers')
const includeSymbolsElement = $('#includeSymbols')
const form = $('#passwordGeneratorForm')

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65,90)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(97,122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48,57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33,47)
    .concat(arrayFromLowToHigh(58,64)
        .concat(arrayFromLowToHigh(91,96)
            .concat(arrayFromLowToHigh(123,136))))

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    console.log(LOWERCASE_CHAR_CODES)
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}