const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.send("Hello World")
})

app.get('/feature', (req, res) => {
    return res.send("Feature Test")
})

app.listen(3000 , () => console.log('listen in port:3000'))

