const express = require('express')
const app = express()

const olaMid = require('./olaMid')

app.use(olaMid('Gabriela'))

app.use((req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/ola', (req, res, next) => {
    console.log('Durante...')
    res.json({
        data: [
            { id: 7, name: 'Luana', position: 1 },
            { id: 34, name: 'Junior', position: 2 },
            { id: 73, name: 'Robarta', position: 3 }
        ], 
        count: 30, 
        skip: 0, //o quanto pulou da paginação
        limit: 3,
        status: 200
    })

    next()
})

app.use((req, res) => {
    console.log('Depois...')
    next()
})

app.listen(3030, () => {
    console.log('Backend executando...')
})