const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello About Section !')
})

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
    
})

app.listen(port, () => {
  console.log(`listening on port  http://localhost:${port}`)
})


