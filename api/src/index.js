const app = require('./config/server')
const port = 3000

app.get('*', (req, res) => {
  res.status(404).send({
    error: true,
    message: 'Not found'
  })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})