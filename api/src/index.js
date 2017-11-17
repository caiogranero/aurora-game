const app = require('./config/server')
const port = 3000
const path = require('path')
const __static = path.join(__dirname, '/../static/')

app.get('/', (req, res) => {
  res.sendFile(path.join(__static, 'index.html'))
})

app.get('*', (req, res) => {
  res.status(404).send({
    error: true,
    message: 'Not found'
  })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})