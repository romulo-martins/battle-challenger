const nameValidator = require('../../src/validators/nameValidator');

test('A name in capital case with only letters should be valid', () => {
    expect(nameValidator.isValid('John')).toBe(true);
});

test('A name in upper case with only letters should be valid', () => {
    expect(nameValidator.isValid('JOHN')).toBe(true);
});

test('A double name with underline and only letters should be valid', () => {
    expect(nameValidator.isValid('John_Mayer')).toBe(true);
});

test('A name with special character shoudn\'t be valid', () => {
    expect(nameValidator.isValid('John#')).toBe(false);
});

test('A name with numbers shoudn\'t be valid', () => {
    expect(nameValidator.isValid('John123')).toBe(false);
});

test('A double name with spaces shoudn\'t be valid', () => {
    expect(nameValidator.isValid('John Mayer')).toBe(false);
});

test('A full name with less than 15 characters shoud be valid', () => {
    expect(nameValidator.isValid('Dino_da_Silva')).toBe(true);
});

test('A full name with mode than 15 characters shoudn\'t be valid', () => {
    expect(nameValidator.isValid('Dino_da_Silva_Sauro')).toBe(false);
});
