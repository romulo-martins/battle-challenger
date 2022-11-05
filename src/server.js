const express = require('express')
const Character = require('./models/character')
const app = express()

app.use(express.json())

const db = {
    characters: []
}

app.post('/character', (request, response) => {
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

app.get('/character', (_, response) => {
    const allCharacters = db.characters.map(({ id, name, occupation, status }) => ({ id, name, occupation, status }))
    response.status(200).send(allCharacters)
})

app.get('/character/:id', (request, response) => {
    const character = db.characters.find((character) => character.id == request.params.id)

    if (!character) {
        response.status(404).send({ error: 'Not Found: Character' })
    }

    response.status(200).send(character)
})

app.listen(3000, () => console.log('Listening on port 3000 ...'))
