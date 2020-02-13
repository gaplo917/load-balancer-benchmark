const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('ok')
})

const timeouts = [
    ...(new Array(25).fill(10).map((it, index) => it + (index * 2))), // some request serve with cache (10 - 70ms)
    ...(new Array(25).fill(200).map((it, index) => it + (index * 20))), // some request need query database 200 - 700 ms
    2000, // some requests cache miss
    3000 // some requests require more
]
const len = timeouts.length
let counter = 0

app.get('/io', function (req, res) {
    setTimeout(() => res.send('ok'), timeouts[counter % len - 1])
    counter += 1;
})

const port = process.env.PORT || 3000

console.log('started express on port', port)

app.listen(port)
