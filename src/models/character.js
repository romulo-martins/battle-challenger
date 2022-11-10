const occupationsData = require('../templates/occupations')
const uuid = require('uuid')

class Character {
    constructor(name, occupation) {
        this.id = uuid.v4()
        this.name = name
        this.occupation = occupation.toLowerCase()
        this.status = 'alive'
        this.attributes = occupationsData[occupation.toLowerCase()].attributes
        this.battleModifiers = occupationsData[occupation.toLowerCase()].battleModifiers
    }

    getAttack() {
        const attackKeys = Object.keys(this.battleModifiers.attack)
        return attackKeys
            .map(attackKey => this.battleModifiers.attack[attackKey] * this.attributes[attackKey])
            .reduce((acc, value) => acc + value, 0)

    }

    getSpeed() {
        const speedKeys = Object.keys(this.battleModifiers.speed)
        return speedKeys
            .map(speedKey => this.battleModifiers.speed[speedKey] * this.attributes[speedKey])
            .reduce((acc, value) => acc + value, 0)
    }
}

module.exports = Character
