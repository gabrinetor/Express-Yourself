function salvar(req, res) {
    res.send('Usuario > salvar')
}

function obter(req, res) {
    res.send('Usuario > obter')
}

//module.exports = { salvar: salvar, obter: obter }    //exportar módulos
module.exports = { salvar, obter }    