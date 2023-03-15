const express = require('express')
const path = require('path')

const app = express()

// template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
// arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))
// server via post (formulario)
app.use(express.urlencoded({ extended: true }))

//rotas
app.get('/', (req, res) => {
  res.render('index', {
    title: 'titulozin'
  })
})

//404 error (not found)
app.use((req, res) => {
  res.send('Página não encontrada!')
})

//executando servidor 
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
