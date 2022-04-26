const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log('Example listening on port ${port}')
})

app.get('/launchX', (req, res) => {
    res.send('Bienvenido a LaunchX')
})

app.get('/explorersinNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})

