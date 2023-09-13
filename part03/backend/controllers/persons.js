const personsRouter = require('express').Router()
const Person = require('../models/person')

personsRouter.get('/', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})
  
personsRouter.get('/info', (req, res) => {
  Person.find({}).then(persons =>{
    const info = `Phonebook has info for ${persons.length} people`
    const date = new Date()
    const message = `${info}<br><br>${date}`
    res.send(message)
  })
})
  
personsRouter.get('/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})
  
personsRouter.delete('/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})
  
personsRouter.post('/', (request, response, next) => {
  const body = request.body
  
  const person = new Person({
    name: body.name,
    number: body.number,
  })
      
  person.save()
    .then(savedPerson => {
      response.json(savedPerson)
    })
    .catch(error => next(error))
})
  
personsRouter.put(':id', (request, response, next) => {
  const { name, number } = request.body
  
  Person.findByIdAndUpdate(
    request.params.id,
    { name, number },
    { new: true, runValidators: true, context: 'query'}
  )
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})
  
module.exports = personsRouter