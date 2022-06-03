const express = require('express')
const redis = require('redis')

const server = express()
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
})
const PORT = 3033

client.set('visits', 0)

server.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Numbe os visits: ' + visits)
        client.set('visits', parseInt(visits) + 1)
    })
})

server.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`)
})