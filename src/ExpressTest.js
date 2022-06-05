const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/note/1', (req, res) => {
    res.send({
        'id': 1,
        'url': 'google.com'
    })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})