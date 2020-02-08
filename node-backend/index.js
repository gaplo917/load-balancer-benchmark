const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('ok')
})

app.get('/io/:io', function (req, res) {
    setTimeout(() => res.send('ok'), req.params.io)
})

console.log('started express...')
app.listen(3000)
