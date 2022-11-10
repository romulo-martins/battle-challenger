const Character = require('../../src/models/character')

describe('On Warrior character', () => {
    const player = new Character('Rei_Lagarto', 'Warrior')

    test('The initial attack should be 80% of strenght and 20% of skill ', () => {
        const expectedAttack = 0.8 * player.attributes.strength + 0.2 * player.attributes.skill
        expect(player.getAttack()).toEqual(expectedAttack)
    });

    test('The initial speed should be 60% of skill and 20% of inteligence', () => {
        const expectedSpeed = 0.6 * player.attributes.skill + 0.2 * player.attributes.intelligence
        expect(player.getSpeed()).toEqual(expectedSpeed)
    });
})

describe('On Thief character', () => {
    const player = new Character('Legodas', 'Thief')

    test('The initial attack should be 25% of strenght + 100% of skill + 25% of inteligence', () => {
        const expectedAttack = 0.25 * player.attributes.strength + 1 * player.attributes.skill + 0.25 * player.attributes.intelligence
        expect(player.getAttack()).toEqual(expectedAttack)
    });

    test('The initial speed should be 80% of skill', () => {
        const expectedSpeed = 0.8 * player.attributes.skill
        expect(player.getSpeed()).toEqual(expectedSpeed)
    });
})

describe('On Mage character', () => {
    const player = new Character('Ermiouni', 'Mage')

    test('The initial attack should be 20% of strength + 50% of skill + 150% intelligence ', () => {
        const expectedAttack = 0.2 * player.attributes.strength + 0.5 * player.attributes.skill + 1.5 * player.attributes.intelligence
        expect(player.getAttack()).toEqual(expectedAttack)
    });

    test('The initial speed should be 20% of strength + 50% of skill', () => {
        const expectedSpeed = 0.2 * player.attributes.strength + 0.5 * player.attributes.skill
        expect(player.getSpeed()).toEqual(expectedSpeed)
    });
})
