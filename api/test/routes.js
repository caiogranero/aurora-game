// During the test the env variable is set to test
process.env.NODE_ENV = 'test'

const server = require('../src/config/server')
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const fullCategories = require('../src/helpers/categories')

chai.use(chaiHttp)

const agent = chai.request.agent(server)

// const should = require('should')
const options = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis']

describe('Routes', () => {
  it('get dice value', (done) => {
    agent
      .get('/api/dices')
      .then(response => {
        const diceValue = response.body.results
        expect(response).to.have.status(200)
        expect(diceValue).to.be.a('string')
        expect(options).to.include(diceValue)
        done()
      }, error => {
        done(error)
      })
  })

  it('get all categories', (done) => {
    agent
      .get('/api/categories')
      .then(response => {
        const categories = response.body.results
        expect(response).to.have.status(200)
        expect(categories).to.be.a('array')
        expect(categories).to.not.be.empty
        expect(categories).to.have.lengthOf(14)
        expect(categories).to.be.deep.equal(fullCategories)
        done()
      }, error => {
        done(error)
      })
  })

  it('send [2, 2, 3, 3, 3] as dices and get catories: "Dois", "Três", "Par", "Trio", "Full House"', (done) => {
    agent
      .post('/api/game')
      .send({ dices: ["dois", "dois", "três", "três", "três"] })
      .then(response => {
        const results = response.body.results
        // console.log(results)
        expect(response).to.have.status(200)
        expect(results).to.be.a('array')
        expect(results).to.not.be.empty
        expect(results).to.have.lengthOf(5)
        expect(results).to.deep.include({ totalPoints: 4, category: 'Dois' })
        expect(results).to.deep.include({ totalPoints: 9, category: 'Três' })
        expect(results).to.deep.include({ totalPoints: 4, category: 'Par' })
        expect(results).to.deep.include({ totalPoints: 9, category: 'Trio' })
        expect(results).to.deep.include({ totalPoints: 13, category: 'Full House' })
        done()
      }, error => {
        done(error)
      }).catch(error => {
        done(error)
      })
  })

  it('send [2, 3, 4, 5, 5] as dices and get catories: "Dois", "Três", "Quatros", "Cincos", "Par" and "Sequencia Menor"', (done) => {
    agent
      .post('/api/game')
      .send({ dices: ["dois", "três", "quatro", "cinco", "cinco"] })
      .then(response => {
        const results = response.body.results
        expect(response).to.have.status(200)
        expect(results).to.be.a('array')
        expect(results).to.not.be.empty
        expect(results).to.have.lengthOf(6)
        expect(results).to.deep.include({ totalPoints: 2, category: 'Dois' })
        expect(results).to.deep.include({ totalPoints: 3, category: 'Três' })
        expect(results).to.deep.include({ totalPoints: 4, category: 'Quatros' })
        expect(results).to.deep.include({ totalPoints: 10, category: 'Cincos' })
        expect(results).to.deep.include({ totalPoints: 10, category: 'Par' })
        expect(results).to.deep.include({ totalPoints: 15, category: 'Sequencia Menor' })
        done()
      }, error => {
        done(error)
      }).catch(error => {
        done(error)
      })
  })
})
