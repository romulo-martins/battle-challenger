const occupationValidator = require('../../src/validators/occupationValidator');

test('The warrior occupation is valid', () => {
    expect(occupationValidator.isValid('Warrior')).toBe(true);
});

test('The Thief occupation is valid', () => {
    expect(occupationValidator.isValid('Thief')).toBe(true);
});

test('The Mage occupation is valid', () => {
    expect(occupationValidator.isValid('Mage')).toBe(true);
});

test('The Monster occupation is not valid', () => {
    expect(occupationValidator.isValid('Monster')).toBe(false);
});

test('The Dragon occupation is not valid', () => {
    expect(occupationValidator.isValid('Dragon')).toBe(false);
});
