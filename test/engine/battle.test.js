const battleEngine = require('../../src/engine/battle')

test('Before battle the log should be empty', () => {
    expect(battleEngine.getLog()).toEqual([])
});

