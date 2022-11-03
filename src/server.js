const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    response.status(200).send({ message: 'Hello World!'})
})

app.listen(3000, () => console.log('Listening on port 3000 ...'))
