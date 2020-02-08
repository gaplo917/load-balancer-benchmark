const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('ok')
})

app.get('/1000ms', function (req, res) {
    setTimeout(() => res.send('ok'), 1000)
})

app.get('/10000ms', function (req, res) {
    setTimeout(() => res.send('ok'), 10000)
})

app.get('/60000ms', function (req, res) {
    setTimeout(() => res.send('ok'), 60000)
})

console.log('started express...')
app.listen(3000)
