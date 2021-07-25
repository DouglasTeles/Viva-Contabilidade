const {Router} = require('express')
const routes = Router()
const Client = require('../models/Clients')




routes.get('/cliente/novo', (req, res) => {
    res.render("RegisterClient")
})

routes.post('/cliente/save', (req, res) => {
    const data = req.body
    const nome = data.nome
     const email = data.email
     const foto = data.foto
     const dataCadastro = data.dataCad
    const dataAtualizacao = data.dataupdate
    Client.create({
      nome,
     email,
    foto,
      dataCadastro,
    dataAtualizacao
     }).then(() =>{
     console.log("Cadastro realizado com sucesso")
      res.redirect("/cliente/novo")
     })
    })



module.exports = routes