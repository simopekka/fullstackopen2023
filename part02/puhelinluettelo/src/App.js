import { useState, useEffect } from 'react'
import Header from './components/Header'
import Add from './components/Add'
import Persons from './components/Person'
import Filter from './components/Filter'
import personService from './services/Persons'
import Notification from './components/Notification'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState(
    { name: '', number:'' }
  )
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [success, setSuccess] = useState(false)

  useEffect(() =>{
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
      console.log(persons)
  },[])

  const addName = (event) => {
    event.preventDefault()
    console.log(newName)

    const found = persons.find(person => person.name ===newName.name)
    
    const nameObject = {
      name: newName.name,
      number: newName.number
    }

    if(found) {
      if(window.confirm(`${newName.name} is already added to the phonebook, replace the old number with a new one?`))
        console.log(found.id)
        personService
        .update(found.id, nameObject)
        .then(returnedName => {
          setSuccess(true)
          setPersons(persons.map(person => person.id !== found.id ? person : returnedName))
          setNotification(`${found.name} was updated!`)
        })
        .catch( error => {
          setSuccess(false)
          setNotification(
            `${found.name} was already deleted from server`
            )
          })
        setNewName({
          name:'', number:''
        })
        setTimeout(() => {
          setNotification(null)
        }, 5000)
        return
    }
    personService
      .create(nameObject)
      .then(nameObject => {
        setPersons(persons.concat(nameObject))
        setSuccess(true)
        setNotification(`${nameObject.name} was added!`)
        setNewName({
          name:'', number:''
        })
        setTimeout(() => {
          setNotification(null)
        }, 5000)
    })
  }

  const deleteUser = id => {
    console.log(id)
    const person = persons.find(person => person.id === id)
    if (window.confirm(`delete ${person.name}?`)){
      personService
        .deleteUser(id)
        .then (response =>
          setSuccess(true),
          setNotification(`${person.name} was deleted`),
          setPersons(persons.filter(person => person.id !== id)),
        )
        .catch( error => {
          setSuccess(false)
          setNotification(
            `${person.name} was already deleted from server`
          )
        })
        setTimeout(() => {
          setNotification(null)
        }, 5000)
    }
  }

  const filterInput = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }
  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewName({...newName, [event.target.name]: event.target.value})
  }

  return (
    <div>
      <Header text='Phonebook'/>
      <Notification message={notification} success={success}/>
      <Filter filter={filter} handle={filterInput}/>
      <Header text='Add new'/>
      <Add addName={addName} newName={newName} handle={handleInputChange}/>
      <Header text='numbers'/>
      <Persons persons={persons} filter={filter} deleteUser={deleteUser}/>
    </div>
  )
}

export default App
