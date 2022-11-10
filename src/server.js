const express = require('express')
const app = express()

app.use(express.json())

const db = {
    characters: []
}

app.post('/characters', (request, response) => {
    const Character = require('./models/character')
    const nameValidator = require('./validators/nameValidator')
    const ocuppationValidator = require('./validators/occupationValidator')

    const name = request.body.name
    const occupationName = request.body.occupation

    if (!nameValidator.isValid(name)) {
        response.status(400).send({ error: 'invalid input: Name' })
    }

    if (!ocuppationValidator.isValid(occupationName)) {
        response.status(400).send({ error: 'invalid input: Occupation' })
    }

    const character = new Character(name, occupationName)
    db.characters.push(character)

    response.status(201).send(character)
})

app.get('/characters', (_, response) => {
    const allCharacters = db.characters.map(({ id, name, occupation, status }) => ({ id, name, occupation, status }))
    response.status(200).send(allCharacters)
})

app.get('/characters/:id', (request, response) => {
    const character = db.characters.find((character) => character.id == request.params.id)

    if (!character) {
        response.status(404).send({ error: 'Not Found: Character' })
    }

    response.status(200).send(character)
})

app.post('/battle', (request, response) => {
    const battleEngine = require('./engine/battle')
    const player1 = db.characters.find((character) => character.id == request.body.player1.id)
    const player2 = db.characters.find((character) => character.id == request.body.player2.id)

    battleEngine.run(player1, player2)

    response.status(200).send(battleEngine.getLog())
})

app.listen(3000, () => console.log('Listening on port 3000 ...'))
