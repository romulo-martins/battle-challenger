const occupations = require('../templates/occupations')

function isValid(occupationName) {
    return occupations[occupationName.toLowerCase()] !== undefined
}

module.exports = { isValid }
