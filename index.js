const express = require('express')
const app = express()

app.use('/ola',(req, res) => {
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

    // res.json([
    //     { id: 7, name: 'Luana', position: 1 },
    //     { id: 34, name: 'Junior', position: 2 },
    //     { id: 73, name: 'Robarta', position: 3 }
    // ])

    // res.json({
    //     name: 'Galaxy X 128Gb',
    //     price: 2899.00,
    //     discont: 0.12
    // })

    // res.send('Está Ok!')
})

app.listen(3030, () => {
    console.log('Backend executando...')
})