const baseURL = '/api/dices'

module.exports = app => {
  app.get(baseURL, (req, res) => {
    const options = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis']
    const number = Math.floor((Math.random() * 6) + 0)
    let text = options[number]
    res.status(200).send({results: text})
  })
}
