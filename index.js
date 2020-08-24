const express = require('express')
const app = express()

const olaMid = require('./olaMid')

app.use(olaMid('Gabriela'))

app.use((req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/clientes/relatorio', (req, res) => { //função mais específica, também poderia ser post, mas sabemos que os parâmetros viessem no body da requisição
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    let corpo = ''
    req.on('data', function(parte){
        corpo += parte
    })

    req.on('end', function() {
        //res.json(JSON.parse(corpo)) //body parse interpreta e entrega o conteudo a mais resumido pronto no formato de objeto
        res.send(corpo)
    })
})

app.get('/clientes/:id', (req, res) => { //função mais generica
    res.send(`Cliente ${req.params.id} selecionadx!`)
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