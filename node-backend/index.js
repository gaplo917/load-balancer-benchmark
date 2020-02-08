const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('ok')
})

const timeouts = [20,40,60,80,100,120,140,160,180,200,400,600,800,1000]
const len = timeouts.length
let counter = 0

app.get('io', function (req, res) {
    setTimeout(() => res.send('ok'), timeouts[counter % len - 1])
    counter += 1;
})

console.log('started express...')
app.listen(3000)
