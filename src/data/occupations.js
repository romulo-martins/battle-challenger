module.exports = {
    warrior: {
        attributes: {
            life: 20,
            strength: 10,
            skill: 5,
            intelligence: 5,
            battleModifiers: {
                attack: {
                    strength: 0.8,
                    skill: 0.2 
                },
                speed: {
                    skill: 0.6,
                    inteligence: 0.2
                }
            }
        }
    },
    thief: {},
    mage: {}
} 
