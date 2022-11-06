const battleEngine = require('../../src/engine/battle')
const Character = require('../../src/models/character')

describe('On initial state', () => {
    test('Before battle the log should be empty', () => {
        expect(battleEngine.getLog()).toEqual([])
    })
})

describe('generateRandomSpeed', () => {
    test('should be a random number less or equal 9', () => {
        expect(battleEngine.generateRandomSpeed(9)).toBeLessThanOrEqual(9)
    })

    test('should be a random number less or equal 5', () => {
        expect(battleEngine.generateRandomSpeed(5)).toBeLessThanOrEqual(9)
    })
})

describe('getFirstPlayer', () => {
    test('player1 should start when this speed is greater', () => {
        const player1 = new Character('Rei_Lagarto', 'Warrior')
        player1.getSpeed = () => 5

        const player2 = new Character('Legodas', 'Thief')
        player2.getSpeed = () => 2

        expect(battleEngine.getFirstPlayer(player1, player2)).toEqual(player1)
    })

    test('player1 should start when this speed is greater', () => {
        const player1 = new Character('Rei_Lagarto', 'Warrior')
        player1.getSpeed = () => 2

        const player2 = new Character('Legodas', 'Thief')
        player2.getSpeed = () => 5

        expect(battleEngine.getFirstPlayer(player1, player2)).toEqual(player2)
    })
})
