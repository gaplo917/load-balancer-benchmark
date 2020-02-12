const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('ok')
})

const timeouts = [
    ...(new Array(50).fill(200).map((it, index) => it + (index * 10))), // generate 200 - 700 ms
    2000, // some requests cache miss
    3000 // some requests require more
]
const len = timeouts.length
let counter = 0

app.get('/io', function (req, res) {
    setTimeout(() => res.send('ok'), timeouts[counter % len - 1])
    counter += 1;
})

console.log('started express...')
app.listen(3000)
