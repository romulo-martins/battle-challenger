module.exports = {
    warrior: {
        attributes: {
            life: 20,
            strength: 10,
            skill: 5,
            intelligence: 5,
        },
        battleModifiers: {
            attack: {
                strength: 0.8,
                skill: 0.2
            },
            speed: {
                skill: 0.6,
                intelligence: 0.2
            }
        }
    },
    thief: {
        attributes: {
            life: 15,
            strength: 4,
            skill: 10,
            intelligence: 4,
        },
        battleModifiers: {
            attack: {
                strength: 0.25,
                skill: 1,
                intelligence: 0.25
            },
            speed: {
                skill: 0.8
            }
        }
    },
    mage: {
        attributes: {
            life: 12,
            strength: 5,
            skill: 6,
            intelligence: 10,
        },
        battleModifiers: {
            attack: {
                strength: 0.2,
                skill: 0.5,
                intelligence: 1.5
            },
            speed: {
                strength: 0.2,
                skill: 0.5
            }
        }
    }
} 
