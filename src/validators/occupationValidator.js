const occupations = require('../data/occupations')

function isValid(occupationName) {
    return occupations[occupationName.toLowerCase()] !== undefined
}

module.exports = { isValid }
