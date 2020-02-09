const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('ok')
})

const timeouts = [
    ...(new Array(110).fill(10).map((it, index) => it * Math.floor(index / 10) + 10)), // generate 10 - 100 ms
    500, // some requests cache miss
    1000, // some requests require more io
]
const len = timeouts.length
let counter = 0

app.get('io', function (req, res) {
    setTimeout(() => res.send('ok'), timeouts[counter % len - 1])
    counter += 1;
})

console.log('started express...')
app.listen(3000)
