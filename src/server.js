const express = require('express')
const uuid = require('uuid')
const app = express()

app.use(express.json())

const db = {
    characters: []
}

app.post('/character', (request, response) => {
    const nameValidator = require('./validators/nameValidator')
    const ocuppationValidator = require('./validators/occupationValidator')
    const occupations = require('./data/occupations')

    const name = request.body.name
    const occupationName = request.body.occupation

    if(!nameValidator.isValid(name)) {
        response.status(400).send({error: 'invalid input: Name'})
    }

    if(!ocuppationValidator.isValid(occupationName)) {
        response.status(400).send({error: 'invalid input: Occupation'})
    }

    const newCharacter = {
        id: uuid.v4(),
        name: name,
        occupation: occupations[occupationName.toLowerCase()]
    }

    db.characters.push(newCharacter)

    response.status(201).send(newCharacter)
})

app.get('/character', (_, response) => {
    response.status(200).send(db.characters)
})

app.get('/character/:id', (request, response) => {
    const character = db.characters.find((character) => character.id == request.params.id)
    
    if(!character) {
        response.status(404).send({error: 'Not Found: Character'})
    }

    response.status(200).send(character)
})

app.listen(3000, () => console.log('Listening on port 3000 ...'))
