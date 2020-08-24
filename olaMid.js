function olaMid(nome) { //função que retorna um middleware
    return function(req, res, next) { 
        console.log(`Welcome ${nome}.`)
        next()
    }
}

module.exports = olaMid