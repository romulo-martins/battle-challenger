function isValid(name) {
    return ((name.length <= 15) &&
            (/^[a-zA-z]*$/.test(name)))
}

module.exports = { isValid }
