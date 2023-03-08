import { useState, useEffect } from 'react'
import Header from './components/Header'
import Add from './components/Add'
import Persons from './components/Person'
import Filter from './components/Filter'
import personService from './services/Persons'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState(
    { name: '', number:'' }
  )
  const [filter, setFilter] = useState('')
  
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
    if(found) {
      alert(`${newName.name} is already added to the phonebook`)
      setNewName({
        name:'', number:''
      })
      return
    }
    const nameObject = {
      name: newName.name,
      number: newName.number
    }
    personService
      .create(nameObject)
      .then(nameObject => {
        setPersons(persons.concat(nameObject))
        setNewName({
          name:'', number:''
        })
    })
  }

  const deleteUser = id => {
    console.log(id)
    const person = persons.find(person => person.id === id)
    if (window.confirm(`delete ${person.name}?`)){
      personService
        .deleteUser(id)
        .then ( response =>
          setPersons(persons.filter(person => person.id !== id))
        )
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
      <Filter filter={filter} handle={filterInput}/>
      <Header text='Add new'/>
      <Add addName={addName} newName={newName} handle={handleInputChange}/>
      <Header text='numbers'/>
      <Persons persons={persons} filter={filter} deleteUser={deleteUser}/>
    </div>
  )

}

export default App
